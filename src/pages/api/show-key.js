// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET() {

    const variable = import.meta.env.MY_VARIABLE;

    return new Response(
        `<p>${variable}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}