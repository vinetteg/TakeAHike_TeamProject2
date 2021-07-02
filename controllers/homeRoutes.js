const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log("Hello there, here is rhe home pages in text");
    res.render('personal');
});

module.exports = router;
