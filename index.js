/* const Server = require("./server/server");

const server = new Server();

server.listen(); */

const Permiso = require("./models/permiso");
const Rol = require("./models/rol");
const RolPermiso = require("./models/rolesPermisos");
const Usuario = require("./models/usuario");
const UsuarioRol = require("./models/UsuariosRoles");

Permiso.findAll().then((datos) => {
    console.log(datos);
});