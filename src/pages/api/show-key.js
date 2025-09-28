// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET({request, env}) {

    let text = 'nah';
    if (env?.MY_WORKER) {
        text = await env.MY_WORKER.fetch("http://localhost:8080")?.text();
    }
    return new Response(
        `<p>text : ${text}</p><p>env : ${env}</p>`,
        {headers: {"Content-Type": "text/html"}}
    );
}