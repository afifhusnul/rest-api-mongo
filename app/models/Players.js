const mongoose = require('mongoose')

const Players = new mongoose.Schema({
  firstName: {type: String, default: '', required: true},
  lastName: {type: String, default: '', required: true},
  position: {type: String, default: '', required: true},
  age: {type: Number, default: 0, required: true},
  team: {type: String, default: '', required: true}
})

module.exports = mongoose.model('Players', Players)