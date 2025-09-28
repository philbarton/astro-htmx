// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET() {

    const secret = import.meta.env.MY_API_KEY;
    const variable = import.meta.env.MY_VARIABLE;

    return new Response(
        `<p>${variable}</p><p>${secret}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}