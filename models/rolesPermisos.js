const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const RolPermiso = sequelize.define('RolPermiso', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'roles_permisos',
    timestamps: false,
    underscored: true
});

module.exports = RolPermiso;