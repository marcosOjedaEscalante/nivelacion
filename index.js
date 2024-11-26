const { findAll, findById, create, update, deleteById } = require("./service/estudiante");

deleteById(32).then((estudiante) => {
    console.log(estudiante);
});