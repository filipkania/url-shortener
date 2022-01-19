export default (): Response => {
	return new Response(JSON.stringify({ "error": 404 }), {
		headers: {
			"content-type": "application/json;charset=UTF-8"
		}
	});
}