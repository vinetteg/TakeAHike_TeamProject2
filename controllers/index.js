const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes= require('./homeRoutes');

const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes.js');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);


router.use('/dashboar', dashboardRoutes);

// router.use('/, commentRoutes');



module.exports = router;
