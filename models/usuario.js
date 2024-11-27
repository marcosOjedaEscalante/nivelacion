const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Rol = require("./rol");
const UsuarioRol = require("./UsuariosRoles");

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

Usuario.belongsToMany(Rol, {
    through: UsuarioRol,
    foreignKey: 'id_usuario'
});
Rol.belongsToMany(Usuario, {
    through: UsuarioRol,
    foreignKey: 'id_rol'
});

module.exports = Usuario;