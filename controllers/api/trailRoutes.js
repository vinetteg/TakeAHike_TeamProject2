const router = require('express').Router();
const { Trail, User } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all hike
router.get('/', async (req, res) => {
  try {
    const trailData = await Trail.findAll();
    res.status(200).json(trailData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single hike
router.get('/:id', async (req, res) => {
  try {
    console.log(' Try to Find One Hike by ID');
    const trailData = await Trail.findByPk(req.params.id, {
    });

    if (!trailData) {
      res.status(404).json({ message: 'No hike found' });
      return;
    }
    console.log('Find One Hike by ID');
    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Create a new hike with Authentication
router.post('/', withAuth, async (req, res) => {
  try {
    const newTrail = await Trail.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newTrail);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Delete Trail with Authentication == If User has permissions.
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const trailData = await Trail.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if ( trailData) {
      res.status(404).json({ message: 'No trail found with this id!' });
      return;
    }

    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;