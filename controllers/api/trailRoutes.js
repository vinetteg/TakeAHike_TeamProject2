const router = require('express').Router();
const { Trail, User, TrailComment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  Trail.create({
    name: req.body.name,
    zipcode: req.body.zipcode,
    location: req.body.location,
    category: req.body.category,
    date_been_there: req.body.date_been_there,
    season: req.body.season,
    difficulty: req.body.difficulty,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
