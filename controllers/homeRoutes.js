const router = require('express').Router();
const { User, Trail, UserTrail } = require('../models')
const withAuth = require('../utils/auth');

// Get all Trail in the dashboard
router.get('/', async (req, res) => {
    try {
      // Get all trails and JOIN with user data
      const trailData = await Trail.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const trails = trailData.map((trail) => trail.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        trails, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// List of my hikes
router.get('/my-hikes', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('/dashboard');
  });

router.get('/add-trail', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.render('create-trail');
      return;
    }
  
    res.redirect('/');
  });
  

router.get('/trail/:id', async (req, res) => {
    try {
      const trailData = await Trail.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const trail = trailData.get({ plain: true });
  
      res.render('trail', {
        ...trail,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Add comment route, Once you select a hike you'll be able to make a comment
router.get('/add-comment/:id', async (req, res) => {
try {
    const trailData = await Trail.findByPk(req.params.id, {
    include: [
        {
        model: User,
        attributes: ['name'],
        },
    ],
    });

    const trail = trailData.get({ plain: true });

    res.render('trail', {
    ...trail,
    logged_in: req.session.logged_in
    });
} catch (err) {
    res.status(500).json(err);
}
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  

// router.post('/login', async (req, res) => {
// try {
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     if (!userData) {
//     res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//     return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//     res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//     return;
//     }

//     req.session.save(() => {
//     req.session.user_id = userData.id;
//     req.session.logged_in = true;
    
//     res.json({ user: userData, message: 'You are now logged in!' });
//     });

// } catch (err) {
//     res.status(400).json(err);
// }
// });

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
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});

// Create a Trail

module.exports = router;
