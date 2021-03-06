const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  image: String,

  email: String,

  phoneNumber: Number,

  currentListOfIngredients: Array,

  friendsList: Array,

  likedRecipes: Array,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
