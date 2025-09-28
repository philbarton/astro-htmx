// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET({cookies}) {
    const cookie = cookies.get("user")?.value || "";

    const secret = import.meta.env.MY_API_KEY;
    const variable = import.meta.env.MY_VARIABLE;
    let mode = import.meta.env.MODE;

    return new Response(
        `<p>${variable}</p><p>${secret}</p><p>${cookie}</p><p>${mode}</p>`,
        { headers: { "Content-Type": "text/html" } }
    );
}