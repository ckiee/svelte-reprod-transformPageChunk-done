import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    let i = 0,
        reqId = Math.random();
    return resolve(event, {
        transformPageChunk({ html, done }) {
            console.log(reqId, { done, i: i++ });
            throw new Error("something failed");
            return html;
        },
    });
};
