const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  steps: [{
    title: {
      type: String,
      completed: Boolean,
    },
    completed: {
      type: String,
      required: true,
      default: false
    },
  }],
  status: {
    type: String,
    enum: ['COMPLETED', 'UNCOMPLETED']
  }
});

module.exports = mongoose.model('Todo', Todo);