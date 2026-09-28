export default async function handler(req, res) {
    const isTelegram = req.headers['user-agent']?.includes('Telegram') || 
                       req.headers['x-requested-with']?.includes('XMLHttpRequest') ||
                       req.headers['origin']?.includes('telegram') ||
                       req.headers['referer']?.includes('telegram');
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    if (isTelegram) {
        res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;");
    }
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    try {
        const raw = req.method === "POST" ? req.body?.text : req.query?.text;
        const ask = raw || "?";

        // ==== KONFIGURASI ENDPOINT 9Router ====
        const BASE_URL = "https://9router-production-dc2a.up.railway.app";
        const API_KEY  = "sk-ff05415d8099c44e-ee2qeu-72b94e74";

        // Model utama: Claude Opus 4.6 (unlimited + vision + reasoning)
        const MODEL = req.query?.model || req.body?.model || "custom2/gatekey-unlimited-claude-opus-4.6";

        // Daftar fallback (dipakai kalau model utama error)
        const FALLBACKS = [
            "custom2/gatekey-unlimited-claude-sonnet-4.6",
            "custom2/gatekey-unlimited-grok-4.7",
            "custom2/gatekey-unlimited-gemini-3.8-flash",
            "oc/muse-spark-1.3-contributor-free"
        ];
        // ======================================

        const messages = [{ role: "user", content: ask }];

        async function tryModel(model) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 300000); // 5 menit
            try {
                const resp = await fetch(`${BASE_URL}/v1/chat/completions`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${API_KEY}`
                    },
                    body: JSON.stringify({ model, messages, stream: false }),
                    signal: controller.signal
                });
                clearTimeout(timeout);
                const text = await resp.text();
                if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${text.slice(0, 200)}`);
                return text;
            } catch (e) {
                clearTimeout(timeout);
                throw e;
            }
        }

        let responseText;
        let usedModel = MODEL;
        try {
            responseText = await tryModel(MODEL);
        } catch (primaryErr) {
            // Coba fallback satu per satu
            let lastErr = primaryErr;
            for (const fb of FALLBACKS) {
                try {
                    responseText = await tryModel(fb);
                    usedModel = fb;
                    lastErr = null;
                    break;
                } catch (e) {
                    lastErr = e;
                }
            }
            if (lastErr) throw lastErr;
        }

        try {
            const json = JSON.parse(responseText);

            function extractText(obj) {
                if (typeof obj === 'string') return obj;
                if (!obj || typeof obj !== 'object') return null;
                const fields = ['text','response','result','message','answer','output','content','reply','generated_text'];
                for (const f of fields) {
                    if (typeof obj[f] === 'string' && obj[f]) return obj[f];
                }
                for (const f of fields) {
                    if (obj[f] && typeof obj[f] === 'object') {
                        const inner = extractText(obj[f]);
                        if (inner) return inner;
                    }
                }
                if (obj.choices?.[0]?.message?.content)
                    return obj.choices[0].message.content;
                if (obj.candidates?.[0]?.content?.parts?.[0]?.text)
                    return obj.candidates[0].content.parts[0].text;
                if (Array.isArray(obj) && obj.length > 0) return extractText(obj[0]);
                return null;
            }

            const extracted = extractText(json) ?? JSON.stringify(json);
            res.status(200).json({ result: extracted, model: usedModel });
        } catch (e) {
            res.status(200).json({ result: responseText, model: usedModel });
        }

    } catch (err) {
        res.status(500).json({ 
            error: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
            detail: err.message 
        });
    }
}