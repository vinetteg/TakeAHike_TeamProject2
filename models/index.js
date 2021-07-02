const User = require('./User');
const Trail = require('./Trail');
const UserTrail = require('./UserTrail')

// User has many Trail
User.belongsTo(Trail, {
    foreignKey: 'trails_id',
    onDelete: 'CASCADE',

});

Trail.hasMany(User, {
    foreignKey: 'trails_id',
})


module.exports = { User, Trail, UserTrail }