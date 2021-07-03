const router = require('express').Router();
const sequelize = require('../config/connection');
const { trail, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    trail.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [

      ],
      include: [
        {
          model: Comment,

          }
        },
        {
          model: User,

        }
      ]
    })
      .then(dbtrailData => {
        // serialize data before passing to template
        const trails = dbtrailData.map(trail => trail.get({ plain: true }));
        res.render('dashboard', { trails, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });




router.get('/create/', withAuth, (req, res) => {
    trail.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [

      ],
      include: [
        {
          model: Comment,

      ]
    })
      .then(dbtrailData => {
        // serialize data before passing to template
        const trails = dbtrailData.map(trail => trail.get({ plain: true }));
        res.render('create-post', { trails, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
