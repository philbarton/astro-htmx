// src/pages/api/check-cookie.js
export const prerender = false;

export async function GET({request, env}) {

    if (env?.MY_WORKER) {
        return await env.MY_WORKER.fetch("http://localhost:8080");
    }

}