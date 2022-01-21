import { returnJSON } from "../utils/returnJSON";

export default async ({ params }: any): Promise<Response> => {
    const redirect_url = await URLS.get(params.id);
    if (!redirect_url) {
        return returnJSON({
            error: 404,
            message: "Shortened URL not found."
        }, 404);
    } else {
        return new Response("Redirecting...", {
            status: 308,
            headers: {
                Location: redirect_url
            }
        });
    }
}