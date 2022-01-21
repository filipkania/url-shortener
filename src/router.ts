import { Router } from "itty-router";
import shortenHandler from "./api/shorten";
import Page404Handler from "./Page404";
import deleteHandler from "./api/delete";
import handler from "./api/handle";

export const router = Router();

router.post("/api/shorten", shortenHandler);
router.post("/api/delete", deleteHandler);

router.all("/:id", handler);
router.all("/*", Page404Handler);
