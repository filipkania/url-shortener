import { Settings } from "../../global";
import { isA } from 'ts-type-checked';
import { returnJSON } from "../utils/returnJSON";

export default async (req: Request): Promise<Response> => {
	try {
		let data: Settings = await req.json();

		if (!data.url || !isA<string>(data.url)) 
			throw new Error("URL must be present and it must be an instance of string.");

		return returnJSON(data);
	} catch(err) {
		const message = (err as Error)?.message || "Unexpected error occured.";

		return returnJSON({
			error: 500,
			message: message
		});
	}
}
