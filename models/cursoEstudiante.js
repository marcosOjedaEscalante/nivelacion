const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const CursoEstudiante = sequelize.define('CursoEstudiante', {
    idCursosEstudiantes:{
        primaryKey: true,
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'cursos_estudiantes',
    underscored: true,
    timestamps: false
});

module.exports = CursoEstudiante;