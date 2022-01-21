import { returnJSON } from "./utils/returnJSON";

export default (): Response => {
	return returnJSON({
		"error": 404,
		"message": "Shorten your URL under /api/shorten!"
	});
}