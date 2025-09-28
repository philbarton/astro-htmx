// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET() {

    const apiKey = import.meta.env.MY_API_KEY;

    return new Response(
        `<p>${apiKey}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}