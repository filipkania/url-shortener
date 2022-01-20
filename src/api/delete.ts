import { isA } from "ts-type-checked";
import { Settings } from "../../global";
import { returnJSON } from "../utils/returnJSON";

export default async (req: Request): Promise<Response> => {
    try {
		let data: Settings = await req.json();

		if (!isA<string>(data.key))
			throw new Error("Key must be a string.");
            
        const key = data.key.replace(/[^\x00-\xFF]/g, "")?.toLowerCase();
        await URLS.delete(key);

        return returnJSON({
            message: "deleted."
        });
	} catch(err) {
		const message = (err as Error)?.message || "Unexpected error occured.";

		return returnJSON({
			error: 500,
			message: message
		}, 500);
	}
}