const { User } = require('../models');

const userData = [
    {
        username: 'chrisa',
        name: 'chris A',
        email: 'chrisabiva@hotmail.com',
        password: 'password',
        access_level: 1,
        date_created: '2021-06-10',
        trails_id: 1
    },
    {
        username: 'vinette',
        name: 'vinette',
        email: 'vinette@hotmail.com',
        password: 'password',
        access_level: 1,
        date_created: '2021-06-22',
        trails_id: 1
    },
    {
        username: 'rex',
        name: 'rex',
        email: 'rex@hotmail.com',
        password: 'password',
        access_level: 1,
        date_created: '2021-06-22',
        trails_id: 1
    },
    {
        username: 'matt',
        name: 'matt',
        email: 'matt@hotmail.com',
        password: 'matt',
        access_level: 1,
        date_created: '2021-06-22',
        trails_id: 1
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;