const Curso = require("./models/curso");
const CursoEstudiante = require("./models/cursoEstudiante");
const Estudiante = require("./models/estudiante");

Estudiante.findOne({
    where: {
        idEstudiante: 1
    },
    include: Curso
}).then((estudiante) => {
    console.log(estudiante.toJSON());
});