const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'bootcamp',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;