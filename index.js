/* const Server = require("./server/server");

const server = new Server();

server.listen(); */

const Permiso = require("./models/permiso");
const Rol = require("./models/rol");
const Usuario = require("./models/usuario");
const { findAll, findById, findByNombreUsuario } = require("./service/usuario");

findByNombreUsuario('nombreUsuarioUno lo que sea').then((data) => {
    console.log(data);
});
