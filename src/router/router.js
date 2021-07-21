/* eslint-disable arrow-body-style */
import { Router } from "express";
import Client from "../app/model/Client";
import ClientBase from "../app/model/Client_base";
// import User from "../app/model/User";

import Database from "../app/database/index";

const routes = new Router();

// eslint-disable-next-line arrow-body-style
routes.get("/", async (req, res) => {
    const clients = await Client.findAll();

    clients.forEach(async (client) => {
        const models = [ClientBase];
        const config = {
            dialect: client.dialect,
            host: client.host,
            port: client.port,
            username: client.username,
            password: client.password,
            database: client.base,
            define: {
                timeStamp: true, // createdAt - updatedAt
                underscored: true, // underline format - not camelCase
                underscoredAll: true,
            },
        };

        // eslint-disable-next-line no-new
        new Database(config, models);

        const clientsOfBase = await ClientBase.findAll();
        console.log(clientsOfBase);
    });
});

routes.post("/", async (req, res) => {
    const inserted = await Client.create(req.body);
    return res.status(201).json(inserted);
});

export default routes;
