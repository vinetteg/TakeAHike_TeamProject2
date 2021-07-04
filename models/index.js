const User = require('./User');
const Trail = require('./Trail');
const UserTrail = require('./UserTrail')

// User has many Trail
User.belongsTo(Trail, {
    foreignKey: 'trails_id',
});

Trail.hasMany(User, {
    foreignKey: 'trails_id',
    onDelete: 'CASCADE',
})

User.belongsToMany(Trail, {
    foreignKey: 'user_id',
    through: {
        model: UserTrail,
        unique: false
    },
    as: 'users_trail'
})

Trail.belongsToMany(User, {
    foreignKey: 'trail_id',
    through: {
        model: UserTrail,
        unique: false
    },
    as: 'trails_of_users'
})


module.exports = { User, Trail, UserTrail }