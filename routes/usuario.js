const { Router } = require('express');
const { findAllController, findByIdController, findByNombreUsuarioController } = require('../controllers/usuario');

const router = Router();

router.get('', findAllController);

router.get('/id/:id', findByIdController);

router.get('/nombreUsuario/:nombreUsuario', findByNombreUsuarioController);

module.exports = router;