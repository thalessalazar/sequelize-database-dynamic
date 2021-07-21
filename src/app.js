import express from "express";
import cors from "cors";
import router from "./router/router";

import Database from "./app/database/index";

import User from "./app/model/User";
import Client from "./app/model/Client";

require("dotenv").config();

class App {
    constructor() {
        this.server = express();
        this.database();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // this.server.use(Database());
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
        this.server.use(cors());
    }

    routes() {
        this.server.use(router);
    }

    database() {
        const models = [User, Client];

        const config = {
            dialect: process.env.DATABASE_DIALECT,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_BASE,
            define: {
                timeStamp: true, // createdAt - updatedAt
                underscored: true, // underline format - not camelCase
                underscoredAll: true,
            },
        };

        // eslint-disable-next-line no-new
        new Database(config, models);
    }
}

export default new App().server;
