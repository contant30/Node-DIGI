const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to SQLite has been established successfully.');

        // Sync models
        await sequelize.sync({ alter: true });
        require('../models/index.js');
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };
