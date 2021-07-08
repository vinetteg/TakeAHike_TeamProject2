const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trail model
class Trail extends Model {}

// create fields/columns for Trail model
Trail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
           type: DataTypes.STRING,
           allowNull: false,
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
         },
        image_source: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date_been_there: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allownull: false,
        },
        season: {
            type: DataTypes.STRING,
            allownull: false,
        },
        difficulty: {
            type: DataTypes.STRING,
            allownull: false
        },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'trail'
    }
  );

  module.exports = Trail;
