import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                // provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                name: {
                    singular: "user",
                    plural: "users",
                },
            }
        );
    }
}

export default User;
