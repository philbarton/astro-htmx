export const prerender = false;

export async function GET() {
    return new Response("<p>Cookie set ✅</p>", {
        status: 200,
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "user=astro-htmx; Path=/; HttpOnly; Secure; SameSite=Strict"
        }
    });
}