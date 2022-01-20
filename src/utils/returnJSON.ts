export const returnJSON = (obj: object, code: number = 200) => 
    new Response(JSON.stringify(obj), {
        status: code,
        headers: {
            "Content-Type": "application/json"
        }
    });
