const findAllController = (req, res) => {
    res.json({ msg: 'findall' });
}

const findByIdController = (req, res) => {
    res.json({ msg: 'findbyid' });
}

const findByNombreUsuarioController = (req, res) => {
    res.json({ msg: 'findnombreusuario' });
}

module.exports = {
    findAllController,
    findByIdController,
    findByNombreUsuarioController
}