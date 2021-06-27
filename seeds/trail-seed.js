const { Trail } = require('../models');

const trailData = [
    {
        name: 'Poo Poo Point',
        location: 'Chrico Trail',
        image_source: 'https://i.redd.it/h02jk0942af21.jpg',
        date_been_there: '2021-06-26',
        category: '360 View',
        season: 'Spring',
        difficulty: 'Easy'
    },
    {
        name: 'Mailbox Peak',
        location: 'Snoqualmie Region',
        image_source: 'https://www.mountaineers.org/activities/activities/day-hike-mailbox-peak-43/@@images/image',
        date_been_there: '2021-06-26',
        category: '360 View',
        season: 'Autums',
        difficulty: 'Easy'
    },
];

const seedTrail = () => Trail.bulkCreate(trailData);

module.exports = seedTrail;