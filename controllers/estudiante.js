const { findAll, findById, create, update, deleteById } = require("../service/estudiante");

const findAllController = async (req, res) => {
    const respuesta = await findAll();
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const findByIdController = async (req, res) => {
    const { id } = req.params;
    const respuesta = await findById(id);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const createController = async (req, res) => {
    const { idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono } = req.body;
    const respuesta = await create(idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const updateController = async (req, res) => {
    const { idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono } = req.body;
    const respuesta = await update(idEstudiante, rutEstudiante, nombreEstudiante, fechaNacimiento, direccion, correo, telefono);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

const deleteByIdController = async (req, res) => {
    const { id } = req.params;
    const respuesta = await deleteById(id);
    res.status(respuesta.status).json({
        msg: respuesta.msg,
        datos: respuesta.datos
    });
}

module.exports = {
    findAllController,
    findByIdController,
    createController,
    updateController,
    deleteByIdController
}