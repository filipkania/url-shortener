export const returnJSON = (obj: object) => new Response(JSON.stringify(obj), {
    headers: {
        "Content-Type": "application/json"
    }
});