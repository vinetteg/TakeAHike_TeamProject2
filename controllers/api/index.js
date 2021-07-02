const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trailRoutes = require('./trailRoutes');
const userTrailRoutes = require('./userTrailRoutes');


router.use('/users', userRoutes);
router.use('/trail', trailRoutes);
router.use('/user-trail', userTrailRoutes);
// router.use('/api', apiRoutes);

module.exports = router;