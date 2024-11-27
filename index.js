/* const Server = require("./server/server");

const server = new Server();

server.listen(); */

const Usuario = require("./models/usuario");
const UsuarioRol = require("./models/UsuariosRoles");

UsuarioRol.findAll().then((usuarios) => {
    console.log(usuarios);
});