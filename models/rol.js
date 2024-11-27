const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Rol = sequelize.define('Rol', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'roles',
    timestamps: false,
    underscored: true
});

module.exports = Rol;