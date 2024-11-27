const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Usuario = sequelize.define('Usuario', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuentaHabilitada: {
        type: DataTypes.BOOLEAN
    },
    cuentaVencida: {
        type: DataTypes.BOOLEAN
    },
    cuentaBloqueada: {
        type: DataTypes.BOOLEAN
    },
    credencialesVencidas: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'usuarios',
    underscored: true,
    timestamps: false
});

module.exports = Usuario;