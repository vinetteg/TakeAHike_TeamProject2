const User = require('./User');
const Trail = require('./Trail');
const Trail_Category = require('./Trail_Category');

// User has many Trail
User.hasMany(Trail, {
    foreignKey: 'trails_id',
    onDelete: 'CASCADE',
    through: {
        model: User,
        unique: false
    },
    as: 'user_trail'
});

Trail.belongsTo(User, {
    foreignKey: 'trails_id'
})

// Belongs to Many
// 

module.exports = { User, Trail }