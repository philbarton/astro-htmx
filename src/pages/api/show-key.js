// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET(request, env) {

    const secret = import.meta.env.MY_API_KEY;
    const variable = import.meta.env.MY_VARIABLE;
    let mode = import.meta.env.MODE;
    let text = 'nah';
    if (env?.MY_WORKER) {
        console.log("found")
        // Cloudflare dev/prod
        text = await env.MY_WORKER.fetch("http://localhost:8080")?.text();
    }
    return new Response(
        `<p>${text}</p><p>${env}</p>`,
        {headers: {"Content-Type": "text/html"}}
    );
}