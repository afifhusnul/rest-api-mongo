const mongoose = require('mongoose')

const Users = new mongoose.Schema({
  firstName: {type: String, default: '', required: true},
  lastName: {type: String, default: '', required: true},
  username: {type: String, default: '', required: true, unique: true},
  email: {type: String, default: 'user10@gmail.com', required: true, unique: true},
  password: {type: String, default: 'mypassword', required: true}  
})

module.exports = mongoose.model('Users', Users)