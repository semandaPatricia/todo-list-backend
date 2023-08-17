
const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true
  },
  date:{
    type:Date,
    default:Date.now
}
})

module.exports = mongoose.model('Todo', TodoSchema)