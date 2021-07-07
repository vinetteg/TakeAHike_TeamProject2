const { TrailComment } = require('../models');

const commentData = [
    {
        user_id: 1,
        trails_id: 5,
        comment: "This is amazing!"
    },
    {
        user_id: 4,
        trails_id: 4,
        comment: "Wow, amazing work!"
    },
    {
        user_id: 1,
        trails_id: 4,
        comment: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        trails_id: 5,
        comment: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        trails_id: 2,
        comment: "This is great news!"
    },
    {
        user_id: 3,
        trails_id: 4,
        comment: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        trails_id: 3,
        comment: "Very useful tool!"
    },
    {
        user_id: 2,
        trails_id: 1,
        comment: "Nice tool!"
    }
]

const seedComments = () => TrailComment.bulkCreate(commentData);

module.exports = seedComments;
