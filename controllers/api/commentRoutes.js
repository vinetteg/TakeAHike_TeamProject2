const router = require('express').Router();
const { TrailComment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  // check the session
  if (req.session) {
    TrailComment.create({
      trailComment: req.body.trailComment,
      trails_id: req.body.trails_id,
      user_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});


module.exports = router;
