import { Router } from "itty-router";
import shortenHandler from "./api/shorten";
import Page404Handler from "./Page404";
import deleteHandler from "./api/delete";

export const router = Router();

router.post("/api/shorten", shortenHandler);
router.post("/api/delete", deleteHandler);

router.all("/*", Page404Handler);
