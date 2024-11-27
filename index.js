/* const Server = require("./server/server");

const server = new Server();

server.listen(); */

const Permiso = require("./models/permiso");
const Rol = require("./models/rol");
const Usuario = require("./models/usuario");

Usuario.findOne({
    where:{
        id: 1
    },
    include: {
        model: Rol,
        include: Permiso
    }
}).then((datos) => {
    console.log(datos.toJSON());
});