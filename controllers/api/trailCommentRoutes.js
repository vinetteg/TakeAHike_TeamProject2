const router = require('express').Router();
const { TrailComment, User, Trail } = require('../../models');


// GET all hike
router.get('/', async (req, res) => {
  try {
    const trailCommentData = await TrailComment.findAll();
    res.status(200).json(trailCommentData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single hike
router.get('/:id', async (req, res) => {
  try {
    console.log(' Try to Find One Hike by ID');
    const trailCommentData = await TrailComment.findByPk(req.params.id, {
    });

    if (!trailCommentData) {
      res.status(404).json({ message: 'No hike found' });
      return;
    }
    console.log('Find One Hike by ID');
    res.status(200).json(trailCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a hike
router.post('/', async (req, res) => {
  try {
    const newTrail = await TrailComment.create({
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
    const updateTrail = await TrailComment.update(req.body, {
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
    const trailCommentData = await TrailComment.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!trailCommentData) {
      res.status(404).json({ message: 'No hike found with this id!' });
      return;
    }

    res.status(200).json(trailCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
