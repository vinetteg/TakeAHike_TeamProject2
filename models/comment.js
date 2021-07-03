const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Comment = mongoose.model('Comment', {
    title: String,
    content: String
  });
  
  
  module.exports = Comment