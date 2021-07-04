const router = require('express').Router();
const { User, Trail, UserTrail } = require('../models')


// Get all Trail in the dashboard
router.get('/', async (req, res) => {
    try {
        const HikingData = await Trail.findAll({
            include: [{ model: User }]
        });
    
        const trails = HikingData.map((trail) => trail.get({ plain: true }));
        
        res.render('dashboard', { trails });    
    } catch (error) {
        res.status(500).json(err);
    }
    
});

// Get all trail by ID
router.get('trail/:id', async (req, res) => {
    try {
        // Fetching data 
      const trailData = await Trail.findByPk(req.params.id, {
          include: [
              {
                  model: User,
                  attributes: ['name'],
              }
          ]
      });

      const trail = trailData.get({ plain: true });
    //   Displaying the data on handlebar named trail
      res.render('trail', {
          ...project,
        //   logged_in: req.session.logged_in
      });
  
      if (!trailData) {
        res.status(404).json({ message: 'No hike found' });
        return;
      }
      res.render('trail-info', { trails });    
      res.status(200).json(trailData);
    } catch (err) {
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

router.post('/login', async (req, res) => {
try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
    res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
    return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
    res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
    return;
    }

    req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    
    res.json({ user: userData, message: 'You are now logged in!' });
    });

} catch (err) {
    res.status(400).json(err);
}
});

// Loggout session && Log out button
router.post('/logout', (req, res) => {
if (req.session.logged_in) {
    req.session.destroy(() => {
    res.status(204).end();
    });
} else {
    res.status(404).end();
}
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('signup');
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

module.exports = router;
