const Estudiante = require("../models/estudiante")

const findAll = async () => {
    try {
        const estudiantes = await Estudiante.findAll();
        if (estudiantes.length == 0) {
            return {
                msg: 'No hay datos en la tabla',
                status: 204,
                datos: estudiantes.map(estudiante => estudiante.toJSON())
            }
        }
        return {
            msg: 'Los estudiantes son: ',
            status: 200,
            datos: estudiantes.map(estudiante => estudiante.toJSON())
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

const findById = async (idEstudiante) => {
    try {
        const estudiante = await Estudiante.findOne({
            where: {
                idEstudiante
            }
        });
        if (estudiante == null) {
            return {
                msg: `El estudiante con id ${idEstudiante} no existe`,
                status: 204,
                datos: {}
            }
        }
        return {
            msg: `El estudiante con id ${idEstudiante} es: `,
            status: 200,
            datos: estudiante.toJSON()
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

const create = async (idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono) => {
    try {
        const existeId = await Estudiante.findOne({ where: { idEstudiante } });
        const existeRut = await Estudiante.findOne({ where: { rutEstudiante } });
        if (existeId != null || existeRut != null) {
            return {
                msg: `El id ${idEstudiante} o el rut ${rutEstudiante} ya existen`,
                status: 400,
                datos: {}
            }
        }
        const estudianteInsertado = await Estudiante.create({ idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono });
        return {
            msg: `El usuario con rut ${rutEstudiante} se insertó correctamente`,
            status: 201,
            datos: estudianteInsertado.toJSON(),
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: {},
        }
    }
}

const update = async (idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono) => {
    try {
        const existeId = await Estudiante.findOne({ where: { idEstudiante } });
        if (!existeId) {
            return {
                msg: `El id ${idEstudiante} no existe, no puedo actualizar`,
                status: 400,
                datos: {}
            }
        }
        const estudianteActualizado = await Estudiante.update({
            rutEstudiante,
            nombreEstudiante,
            fechaNacimiento,
            direccion,
            correo,
            telefono
        }, {
            where: {
                idEstudiante
            }
        });
        return {
            msg: `El usuario con id ${idEstudiante} se actualizó correctamente`,
            status: 201,
            datos: estudianteActualizado
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: {},
        }
    }
}

const deleteById = async (idEstudiante) => {
    try {
        const existeId = await Estudiante.findOne({
            where: {
                idEstudiante
            }
        });
        if (!existeId) {
            return {
                msg: `El id ${idEstudiante} no existe, no puedo eliminar`,
                status: 400,
                datos: {}
            }
        }
        const estudianteEliminado = await Estudiante.destroy({
            where: {
                idEstudiante
            }
        });
        return {
            msg: `El estudiante con id ${idEstudiante} se eliminó correctamente`,
            status: 200,
            datos: estudianteEliminado
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: {},
        }
    }
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}