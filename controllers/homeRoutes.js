const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('personal');
});

module.exports = router;
