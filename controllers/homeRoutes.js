const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, User, TrailComment } = require('../models');
// /logging out



router.get('/', (req, res) => {
    console.log(req.session);

    Trail.findAll({
      attributes: [
        'id',
        'name',
        'location',
        'zipcode',
        'season',
        'category',
        'difficulty'
      ],
    })
      .then(dbTrailData => {
        const trails = dbTrailData.map(trail => trail.get({ plain: true }));
        res.render('homepage', {
            trails,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('signup');
  });

  router.get('/trail/:id', (req, res) => {
    Trail.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'location',
        'zipcode',
        'season',
        'category',
        'difficulty'
      ],
      include: [
        {
          model: TrailComment,
          attributes: ['id', 'comment', 'trails_id', 'user_id'],
          include: {
            model: User,
            attributes: ['name']
          }
        },
        {
          model: User,
          attributes: ['name']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }

        // serialize the data
        const trail = dbPostData.get({ plain: true });

        // pass data to template
        res.render('add-comment', {
            trail,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
