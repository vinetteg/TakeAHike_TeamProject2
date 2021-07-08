const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TrailComment extends Model {}

TrailComment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      trails_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trail',
          key: 'id'
        }
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'trailcomment'
  }
);

module.exports = TrailComment;
