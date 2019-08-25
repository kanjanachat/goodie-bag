const Sequelize = require('sequelize');
const db = require('../database');

const Candies = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cms-assets.tutsplus.com/uploads/users/115/posts/30051/image/diana_candy_monster_character_tut_63-min.jpg' ,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Candies
