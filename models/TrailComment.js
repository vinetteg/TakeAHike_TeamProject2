// const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const sequelize = new Sequelize('database', 'username', 'password');
class TrailComment extends Model {}

// const ModelComments = require('sequelize-model-comments').init(sequelize, options);
// ModelComments.defineModels({});

// const Post = sequelize.define('Post', {
//     title: Sequelize.STRING,
//     content: Sequelize.STRING,
//   });
   
//   Post.enableModelComments();

TrailComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    trail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trail',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trailcomment',
  }
);

module.exports = TrailComment;