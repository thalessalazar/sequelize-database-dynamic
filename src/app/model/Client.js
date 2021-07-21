import Sequelize, { Model } from "sequelize";

class Client extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                dialect: Sequelize.STRING,
                host: Sequelize.STRING,
                port: Sequelize.STRING,
                username: Sequelize.STRING,
                password: Sequelize.STRING,
                base: Sequelize.STRING,
            },
            {
                sequelize,
                name: {
                    singular: "client",
                    plural: "clients",
                },
            }
        );
    }
}

export default Client;
