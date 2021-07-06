const sequelize = require('../config/connection');
const { User } = require
const seedUser = require('./user-seed.js');
const seedTrail = require('./trail-seed.js');
const seedUserTrail = require('./user-trail-seed.js');
const seedTrailComment = require('./trail-comment-seed.js')

const seedDatabase = async () => {
   try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    // await seedTrailCategory();
    await seedTrail();
    console.log('\n----- TRAIL SEEDED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    // await seedUserTrail();
    console.log('\n----- USER TRAIL SEEDED -----\n');
    

    // await seedTrailComment();
    console.log('\n----- USER TRAIL SEEDED -----\n');
    
    // const user = await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     return: true,
    // });
    process.exit(0);
   } catch (error) {
       console.log(error)
   }
}

seedDatabase();