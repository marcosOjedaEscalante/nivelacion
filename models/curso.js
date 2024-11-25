const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Curso = sequelize.define('Curso', {
    idCurso: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    codigoCurso: {
        type: DataTypes.STRING,
        unique: true
    },
    cantidadEstudiantes: {
        type: DataTypes.INTEGER
    },
    fechaInicio: {
        type: DataTypes.DATE
    },
    fechaTermino: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'cursos',
    underscored: true,
    timestamps: false
});

module.exports = Curso;