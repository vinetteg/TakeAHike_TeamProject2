const { User } = require('../models');

const userData = [
    {
        name: 'chris A',
        email: 'chrisabiva@hotmail.com',
        password: 'password',
    },
    {
        name: 'vinette',
        email: 'vinette@hotmail.com',
        password: 'password',
    },
    {
        name: 'rex',
        email: 'rex@hotmail.com',
        password: 'password',
    },
    {
        name: 'matt',
        email: 'matt@hotmail.com',
        password: 'matt',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;