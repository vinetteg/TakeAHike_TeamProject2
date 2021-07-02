const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const trailRoutes = require('./api/trailRoutes.js')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;