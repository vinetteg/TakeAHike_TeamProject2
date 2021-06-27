const User = require('./User');
const Trail = require('./Trail');
const Trail_Category = require('./Trail_Category');

// User has many Trail
User.belongsToMany(Trail, {
    foreignKey: 'trails_id',
    through: {
        model: User,
        unique: false
    },
    as: 'user_trail'
});

Trail.belongsToMany(User, {
    foreignKey: 'trails_id',
    through: {
        model: User,
        unique: false
    },
    as: 'trail_user'
});

// Trail.hasMany(User, {
//     foreignKey: 'trails_id',
//     through: {
//         model:
//     }
// });
// Trails has many Trail Category
// Trail.hasMany(Trail_Category, {
//     foreignKey: 'category_id'
// });

module.exports = { User, Trail, Trail_Category }