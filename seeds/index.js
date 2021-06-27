const sequelize = require('../config/connection');
const { User, Trail, Trail_Category } = require('../models');

const seedUser = require('./user-seed.js');
const seedTrail = require('./trail-seed.js');
const seedTrailCategory = require('./trail-category-seed.js');

const seedDatabase = async () => {
   try {
    await sequelize.sync({ force: true });
    // await seedTrailCategory();
    // await seedTrail();
    await seedUser();
    
    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        return: true,
    });
   } catch (error) {
       console.log(error)
   }
   
    

    process.exit(0);

    }

seedDatabase();