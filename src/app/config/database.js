require("dotenv").config();

module.exports = {
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
