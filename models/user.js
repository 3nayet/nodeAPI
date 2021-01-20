const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:String,
  surname:String,
  phone:String
});

module.exports = mongoose.model('User', userSchema);
