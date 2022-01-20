import { returnJSON } from "./utils/returnJSON";

export default (): Response => {
	return returnJSON({
		"error": 404
	});
}