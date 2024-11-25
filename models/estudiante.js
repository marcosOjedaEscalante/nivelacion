const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Curso = require("./curso");
const CursoEstudiante = require("./cursoEstudiante");

const Estudiante = sequelize.define('Estudiante', {
    idEstudiante: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    rutEstudiante: {
       type: DataTypes.STRING,
       unique: true,
    },
    nombreEstudiante: {
        type: DataTypes.STRING
    },
    fechaNacimiento: {
        type: DataTypes.DATE
    },
    direccion: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'estudiantes',
    underscored: true,
    timestamps: false
});

Estudiante.belongsToMany(Curso, {
    through: CursoEstudiante,
    foreignKey: 'id_estudiante'
});
Curso.belongsToMany(Estudiante, {
    through: CursoEstudiante,
    foreignKey: 'id_curso'
});

module.exports = Estudiante;