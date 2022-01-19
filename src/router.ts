import { Router } from "itty-router";
import shortenHandler from "./api/shorten";
import Page404Handler from "./Page404";

export const router = Router();

router.post("/api/shorten", shortenHandler);

router.all("/*", Page404Handler);
