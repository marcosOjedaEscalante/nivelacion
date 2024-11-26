const findAllController = (req, res) => {
    res.json({ msg: 'findAll' });
}

const findByIdController = (req, res) => {
    res.json({ msg: 'findById' });
}

const createController = (req, res) => {
    res.json({ msg: 'create' });
}

const updateController = (req, res) => {
    res.json({ msg: 'update' });
}

const deleteByIdController = (req, res) => {
    res.json({ msg: 'deleteById' });
}

module.exports = {
    findAllController,
    findByIdController,
    createController,
    updateController,
    deleteByIdController
}