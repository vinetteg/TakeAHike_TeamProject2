const router = require('express').Router();
const { User } = require('../../models');



// POST /api/users


router.post('/', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    access_level: req.body.access_level,
    date_created: req.body.date_created
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.name = dbUserData.name;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  });
});

// LOGIN
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.name = dbUserData.name;
      req.session.access_level = dbUserData.access_level;
      req.session.date_created = dbUserData.date_created;
      req.session.loggedIn = true;


      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});
module.exports = router;
