const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trailRoutes = require('./trailRoutes');

const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/trail', trailRoutes);
router.use('/comments', commentRoutes);



module.exports = router;
