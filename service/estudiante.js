const Estudiante = require("../models/estudiante")

const findAll = async () => {
    try {
        const estudiantes = await Estudiante.findAll();
        if(estudiantes.length == 0){
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
        if(estudiante == null){
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

const create = () => {

}

const update = () => {

}

const deleteById = () => {

}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}