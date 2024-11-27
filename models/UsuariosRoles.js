const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const UsuarioRol = sequelize.define('UsuarioRol', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }
}, {
    tableName: 'usuarios_roles',
    underscored: true,
    timestamps: false
});

module.exports = UsuarioRol;