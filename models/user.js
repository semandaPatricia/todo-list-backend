const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  }
} ,{ timestamps: true })


module.exports = mongoose.model('User', UserSchema)