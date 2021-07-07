const { User } = require('../models');

const userData = [
    {
        name: 'chris A',
        email: 'chrisabiva@hotmail.com',
        password: 'password',
        access_level: 1,
        date_created: '2021-06-10',
    },
    {
        name: 'vinette',
        email: 'vinette@hotmail.com',
        password: 'password',
        access_level: 1,
        date_created: '2021-06-22',
    },
    {
        name: 'rex',
        email: 'rex@hotmail.com',
        password: 'rexpassword',
        access_level: 1,
        date_created: '2021-06-22',
    },
    {
        name: 'matt',
        email: 'matt@hotmail.com',
        password: 'matt',
        access_level: 1,
        date_created: '2021-06-22'
    },
        {name: 'Josephine',
        email: 'josie@hotmail.com',
        password: 'jose',
        access_level: 1,
        date_created: '2021-06-22'}
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
