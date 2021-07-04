const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserTrail extends Model {}

UserTrail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    trail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Trail',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usertrail',
  }
);

module.exports = UserTrail;
Model.enableModelComments();