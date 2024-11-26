const { findAll, findById, create } = require("./service/estudiante");

create(
    31, 
    '66666666-6', 
    'nombre visual', 
    '1990-09-04', 
    'dirección visual', 
    'correoVisual@mail.com', 
    '76543345').then((estudiante) => {
    console.log(estudiante);
});