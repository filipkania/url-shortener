import { Settings } from "../../global";
import { isA } from 'ts-type-checked';
import { returnJSON } from "../utils/returnJSON";

export default async (req: Request): Promise<Response> => {
	try {
		let data: Settings = await req.json();

		if (!data.url || !isA<string>(data.url)) 
			throw new Error("URL must be present and it must be an instance of string.");

		if (!isA<string | undefined>(data.key))
			throw new Error("Key must be string or undefined.");

		if (!isA<number | undefined>(data.expire))
			throw new Error("Expire property must be a number or undefined.");

		const url = new URL(data.url);
		if (!["https:", "http:"].includes(url.protocol) || url.host.length <= 2)
			throw new Error("Protocol must be one of: http, https.");

		let key = data.key?.replace(/[^\x00-\xFF]/g, "")?.toLowerCase();
		if (!key || await URLS.get(key) !== null) {
			for (let i = 0; i < 5; i++) {
				key = Math.random().toString(36).slice(-6);

				if (await URLS.get(key) === null)
					break;
				else if (i === 4)
					throw new Error("Couldn't generate random key.");
			}
		}

		await URLS.put(key as string, data.url, {
			expirationTtl: data.expire
		});

		return returnJSON({
			url,
			key,
			expire: data.expire || -1,
			path: `https://${req.headers.get("Host")}/${key}`
		});
	} catch(err) {
		const message = (err as Error)?.message || "Unexpected error occured.";

		return returnJSON({
			error: 500,
			message: message
		}, 500);
	}
}
