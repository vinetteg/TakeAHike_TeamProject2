const User = require('./User');
const Trail = require('./Trail');

User.hasMany(Trail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Trail.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Trail };
