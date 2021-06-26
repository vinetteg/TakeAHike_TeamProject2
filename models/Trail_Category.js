const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Trail_Category Extends Model {}

User.init(
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
        description: {
           type: DataTypes.STRING,
        },
        image_source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_been_there: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'trail',
                key: 'id',
            },
        },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trail_category',
        }
    }
);

module.exports = Trail;