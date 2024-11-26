const { Router } = require('express');
const { findAllController, findByIdController, createController, updateController, deleteByIdController } = require('../controllers/estudiante');

const router = Router();

router.get('', findAllController);

router.get('/:id', findByIdController);

router.post('', createController);

router.put('', updateController);

router.delete('/:id', deleteByIdController);

module.exports = router;