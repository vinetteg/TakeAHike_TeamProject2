const seedTrail = require('./trail-seed');
const seedUser = require('./user-seed');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

  await seedTrail();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
