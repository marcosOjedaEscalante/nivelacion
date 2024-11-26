const { Router } = require('express');

const router = Router();

router.get('', (req, res) => {
    res.json({ msg: 'findAll' });
});

router.get('/:id', (req, res) => {
    res.json({ msg: 'findById' });
});

router.post('', (req, res) => {
    res.json({ msg: 'create' });
});

router.put('', (req, res) => {
    res.json({ msg: 'update' });
});

router.delete('/:id', (req, res) => {
    res.json({ msg: 'deleteById' });
});

module.exports = router;