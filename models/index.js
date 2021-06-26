const User = require('./User');
const Trail = require('./Trails');
const Trail_Category = require('./Trail_Category');

// User has many Trail
User.hasMany(Trails, {
    foreignKey: 'trails_id',
    onDelete: 'CASCADE'
});
// Trails has many Trail Category
Trail.hasMany(Trail_Category, {
    foreignKey: 'category_id'
});

module.exports = { User, Trail, Trail_Category }