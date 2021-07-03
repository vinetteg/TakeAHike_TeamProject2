const router = require('express').Router();
const { User, Trail, UserTrail } = require('../models')


// Get all Trail in the dashboard
router.get('/', async (req, res) => {
    try {
        const HikingData = await Trail.findAll({
            include: [{ model: User }]
        });
    
        const trails = HikingData.map((trail) => trail.get({ plain: true }));
        
        res.render('homepage', { trails });    
    } catch (error) {
        res.status(500).json(err);
    }
    
});

router.get('/dashboard', async (req, res) => {
    console.log("Hello there, here is rhe home pages in text");
    res.render('dashboard');
});

router.get('/login', async (req, res) => {
    console.log("Hello there, here is rhe home pages in text");
    res.render('login');
});
router.get('/signup', async (req, res) => {
    console.log("Hello there, here is rhe home pages in text");
    res.render('signup');
});


router.get('/login', async (req, res) => {
    console.log("Hello there, here is rhe home pages in text");
    res.render('login');
});

module.exports = router;

// rex's notesp
// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Trail, User, Comment } = require('../models');

// router.get('/', (req, res) => {
//     console.log(req.session);

//     trail.findAll();
//       .then(dbtrailData => {
//         const trails = dbtrailData.map(trail => trail.get({ plain: true }));
//         res.render('homepage', {
//             trails,
//             // loggedIn: req.session.loggedIn
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// router.get('/login', (req, res) => {
//     // if (req.session.loggedIn) {
//     //   res.redirect('/');
//     //   return;
//     // }

//     res.render('login');
//   });

//   router.get('/signup', (req, res) => {
//     // if (req.session.loggedIn) {
//     //   res.redirect('/');
//     //   return;
//     // }

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
//             // loggedIn: req.session.loggedIn
//           });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// module.exports = router;
