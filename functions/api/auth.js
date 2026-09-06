export async function onRequestPost(context) {
    try {
        const { request, env } = context;
        const data = await request.json();
        const { action, email, password, name } = data;

        const tursoUrl = env.TURSO_URL;
        const tursoToken = env.TURSO_TOKEN;

        if (!tursoUrl || !tursoToken) {
            return new Response(JSON.stringify({ success: false, error: "Missing database configuration." }), { status: 500 });
        }

        let sql = "";
        let args = [];

        if (action === 'register') {
            if (!name || !email || !password) {
                return new Response(JSON.stringify({ success: false, error: "All fields are required." }), { status: 400 });
            }
            sql = "INSERT INTO u (n, e, p) VALUES (?, ?, ?)";
            args = [
                { type: "text", value: name },
                { type: "text", value: email },
                { type: "text", value: password }
            ];
        } else if (action === 'login') {
            if (!email || !password) {
                return new Response(JSON.stringify({ success: false, error: "Email and password are required." }), { status: 400 });
            }
            sql = "SELECT n FROM u WHERE e = ? AND p = ?";
            args = [
                { type: "text", value: email },
                { type: "text", value: password }
            ];
        } else {
            return new Response(JSON.stringify({ success: false, error: "Invalid action." }), { status: 400 });
        }

        const tursoResponse = await fetch(`${tursoUrl}/v2/pipeline`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${tursoToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                requests: [
                    { type: "execute", stmt: { sql, args } },
                    { type: "close" }
                ]
            })
        });

        const tursoResult = await tursoResponse.json();
        const resObj = tursoResult.results?.[0];

        if (resObj?.error) {
            return new Response(JSON.stringify({ success: false, error: "Email is already taken or database error." }), { status: 400 });
        }

        if (action === 'login') {
            const rows = resObj?.response?.result?.rows;
            if (!rows || rows.length === 0) {
                return new Response(JSON.stringify({ success: false, error: "Invalid email or password." }), { status: 401 });
            }
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: "Internal server error." }), { status: 500 });
    }
}
