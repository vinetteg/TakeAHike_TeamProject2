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

// CREATE a hike
router.post('/', async (req, res) => {
  try {
    const newTrail = await Trail.create({
      ...req.body
      // user_id: req.session.user_id,
    });

    res.status(200).json(newTrail);
  } catch (err) {
    res.status(400).json(err);
  }
});


// UPDATE TRAIL BY VALUE
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateTrail = await Trail.update(req.body, {
       where: {
         id: req.params.id,
       },
      });
      
    if (!updateTrail[0]) {
      res.status(404).json({message: 'No Trail with this id! '})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a hike
router.delete('/:id', async (req, res) => {
  try {
    const trailData = await Trail.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!trailData) {
      res.status(404).json({ message: 'No hike found with this id!' });
      return;
    }

    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
