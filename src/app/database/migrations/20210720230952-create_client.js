/* eslint-disable arrow-body-style */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.createTable("clients", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            dialect: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            host: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            port: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            base: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("clients");
    },
};
