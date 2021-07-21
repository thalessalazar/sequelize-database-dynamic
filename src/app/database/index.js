import Sequelize from "sequelize";
// import config from "../config/database";

class Database {
    constructor(config, models) {
        this.connection = new Sequelize(config);
        this.models = models;
        this.init();
        this.associate();
    }

    init() {
        this.models.forEach((model) => model.init(this.connection));
    }

    associate() {
        // eslint-disable-next-line arrow-body-style
        this.models.forEach((model) => {
            if (model.associate) model.associate(this.connection.models);
        });
    }
}

export default Database;
