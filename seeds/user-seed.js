const { User } = require('../models');

const userData = [
    {
        username: 'taco',
        name: 'chris A',
        email: 'chrisabiva@hotmail.com',
        password: 'password',
        access_level: 1,
        date_created: '2021-06-10',
        trails_id: '5'
    },
    {
        username: 'someone',
        name: 'someone',
        email: 'someone@hotmail.com',
        password: 'someone',
        access_level: 2,
        date_created: '2021-06-22',
        trails_id: '6'
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;