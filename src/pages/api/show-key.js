// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET({cookies, env}) {
    const cookie = cookies.get("user")?.value || "";

    const secret = import.meta.env.MY_API_KEY;
    const variable = import.meta.env.MY_VARIABLE;
    let mode = import.meta.env.MODE;
    let response;
    if (env?.MY_WORKER) {
        // Cloudflare dev/prod
        response = await env.MY_WORKER.fetch("https://dummy/");
    }
    const text = await response?.text();
    return new Response(
        `<p>${variable}</p><p>${secret}</p><p>${cookie}</p><p>${mode}</p><p>${text}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}