const mongoose = require('mongoose')

const Teams = new mongoose.Schema({
  team: {type: String, default: '', required: true},
  city: {type: String, default: '', required: true},
  conference: {type: String, default: '', required: true}  
})

module.exports = mongoose.model('Teams', Teams)