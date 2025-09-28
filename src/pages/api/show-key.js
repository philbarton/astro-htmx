// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET({cookies, context}) {
    const cookie = cookies.get("user")?.value || "";

    const secret = import.meta.env.MY_API_KEY;
    const variable = import.meta.env.MY_VARIABLE;
    let mode = import.meta.env.MODE;
    let text = 'nah';
    if (context?.env?.MY_WORKER) {
        console.log("found")
        // Cloudflare dev/prod
        text = await context.env.MY_WORKER.fetch(context.request)?.text();
    }
    return new Response(
        `<p>${variable}</p><p>${secret}</p><p>${cookie}</p><p>${mode}</p><p>${text}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}