const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Permiso = require("./permiso");
const RolPermiso = require("./rolesPermisos");

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

Rol.belongsToMany(Permiso, {
    through: RolPermiso,
    foreignKey: 'id_rol'
});
Permiso.belongsToMany(Rol, {
    through: RolPermiso,
    foreignKey: 'id_permiso'
});

module.exports = Rol;