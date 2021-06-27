const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // Need to connect to front end.
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    //   }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
         },
        access_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        trails_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'trail',
                key: 'id',
            },
        },
    },
    {
    //     hooks: {
    //       beforeCreate: async (newUserData) => {
    //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //         return newUserData;
    //       },
    //       beforeUpdate: async (updatedUserData) => {
    //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //         return updatedUserData;
    //       },
    //     },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);

module.exports = User;