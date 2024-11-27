const Permiso = require("../models/permiso");
const Rol = require("../models/rol");
const Usuario = require("../models/usuario")

// CRUD
const findAll = async () => {
    try {
        const usuarios = await Usuario.findAll({
            include: {
                model: Rol,
                include: Permiso
            }
        });
        if (usuarios.length == 0) {
            return {
                msg: 'No hay datos en la tabla usuarios',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Los usuarios existentes son: ',
            status: 200,
            datos: usuarios.map(usuario => usuario.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const findById = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id, {
            include: {
                model: Rol,
                include: Permiso
            }
        });
        if (usuario == null) {
            return {
                msg: `El usuario con id ${id} no existe`,
                status: 204,
                datos: {}
            }
        }
        return {
            msg: `La información del usuario con id ${id} es: `,
            status: 200,
            datos: usuario.toJSON()
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: {}
        }
    }
}

const findByNombreUsuario = async (nombreUsuario) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                nombreUsuario
            },
            include: {
                model: Rol,
                include: Permiso
            }
        });
        if(usuario == null) {
            return {
                msg: `El usuario con nombre de usuario ${nombreUsuario} no existe`,
                status: 204,
                datos: {}
            }
        }
        return {
            msg: `Los datos del usuario ${nombreUsuario} son: `,
            status: 200,
            datos: usuario.toJSON()
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: {}
        }
    }
}

const create = () => {

}

const update = () => {

}

const delelteById = () => {

}

module.exports = {
    findAll,
    findById,
    findByNombreUsuario,
    create,
    update,
    delelteById
}
