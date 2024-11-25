const { findAll, findById } = require("./service/estudiante");

findById(60).then((estudiante) => {
    console.log(estudiante);
});