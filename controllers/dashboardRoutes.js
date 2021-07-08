const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, TrailComment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Trail.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'name',
        'location',
        'zipcode',
        'difficulty',
        'category',
        'season'
      ]
    })
      .then(dbTrailData => {
        // serialize data before passing to template
        const trails = dbTrailData.map(trail => trail.get({ plain: true }));
        res.render('dashboard', { trails, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



router.get('/create/', withAuth, (req, res) => {
        res.render('create-post', { loggedIn: true })

  });


module.exports = router
