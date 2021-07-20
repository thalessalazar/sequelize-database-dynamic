import { Router } from "express";

const routes = new Router();

// eslint-disable-next-line arrow-body-style
routes.get("/", (req, res) => {
    return res.json("Hello World");
});

export default routes;
