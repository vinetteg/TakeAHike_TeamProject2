const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password');

const ModelComments = require('sequelize-model-comments').init(sequelize, options);
ModelComments.defineModels({});

const Post = sequelize.define('Post', {
    title: Sequelize.STRING,
    content: Sequelize.STRING,
  });
   
  Post.enableModelComments();

