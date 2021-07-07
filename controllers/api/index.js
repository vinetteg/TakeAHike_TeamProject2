const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trailRoutes = require('./trailRoutes');
const userTrailRoutes = require('./userTrailRoutes');
const trailCommentRoutes = require('./trailCommentRoutes');


router.use('/users', userRoutes);
router.use('/trail-comments', userRoutes);
router.use('/trails', trailRoutes);
router.use('/user-trails', userTrailRoutes);
// router.use('/api', apiRoutes);

module.exports = router;