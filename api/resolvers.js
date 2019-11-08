const crypto = require('crypto');

const Todo = require('./model');
// let todos = require('./todos');

// class Todo {
//   static id() {
//     return crypto.randomBytes(10).toString('hex');
//   }
//
//   constructor({ title, completed = false, steps = [] }) {
//     this.id = Todo.id();
//     this.title = title;
//     this.completed = completed;
//     this.steps = steps;
//   }
// }

module.exports = {
  todo: ({ id }) => Todo.findById(id),
  todos: ({ status }) => Todo.find({ status }),

  createTodo: ({ input }) => {
    return Todo.create(input)
  },
  updateTodo: ({ id, input }) => {
    return Todo.findByIdAndUpdate(id, input, { new: true });
  },
  deleteTodo: ({ id }) => {
    return Todo.deleteOne({ _id: id }).then(() => id);
  }


  // todo: ({ id }) => todos.find(todo => id == todo.id),
  // todos: ({ status }) => {
  //   switch(status) {
  //     case 'COMPLETED': return todos.filter(todo => todo.completed);
  //     case 'UNCOMPLETED': return todos.filter(todo => !todo.completed);
  //     default: return todos;
  //   }
  // },
  // createTodo: ({ input }) => {
  //   const todo = new Todo({ title: input.title });
  //   todos.push(todo);
  //   return todo;
  // },
  // updateTodo: ({ id, input }) => {
  //   const todo = todos.find(todo => todo.id == id);
  //
  //   Object.assign(todo, {title: input.title});
  //
  //   return todo;
  // },
  // deleteTodo: ({ id }) => {
  //   const todo = todos.find(todo => todo.id == id);
  //
  //   todos = todos.filter(todo => todo.id != id)
  // }
};