const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('personal');
});

module.exports = router;

// // rex's notes
// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Trail, User, Comment } = require('../models');

// router.get('/', (req, res) => {
//     console.log(req.session);

//     trail.findAll({
//       attributes: [

//     })
//       .then(dbtrailData => {
//         const trails = dbtrailData.map(trail => trail.get({ plain: true }));
//         res.render('homepage', {
//             trails,
//             loggedIn: req.session.loggedIn
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }

//     res.render('login');
//   });

//   router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }

//     res.render('signup');
//   });

//   router.get('/trail/:id', (req, res) => {
//     trail.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//       ]
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'trails_id', 'user_id'],
//           include: {
//             model: User,

//           }
//         },

//       ]
//     })
//       .then(dbtrailData => {
//         if (!dbtrailData) {
//           res.status(404).json({ message: 'No trail found with this id' });
//           return;
//         }

//         // serialize the data
//         const trail = dbtrailData.get({ plain: true });

//         // pass data to template
//         res.render('add-comment', {
//             trail,
//             loggedIn: req.session.loggedIn
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// module.exports = router;
