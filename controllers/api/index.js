const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trailRoutes = require('./trailRoutes');


router.use('/users', userRoutes);
router.use('/trail', trailRoutes);
// router.use('/api', apiRoutes);

module.exports = router;