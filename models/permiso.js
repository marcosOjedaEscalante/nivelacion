const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Permiso = sequelize.define('Permiso', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    permiso: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'permisos',
    timestamps: false,
    underscored: true
});

module.exports = Permiso;