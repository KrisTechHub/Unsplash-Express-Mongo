const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: String,
  // Other fields you want to store
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
