const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Steps {
    title: String!
    completed: Boolean!
  }

  type Todo {
    id: String!,
    title: String!,
    completed: Boolean!
    steps: [Steps]!
  }

  enum Status {
    COMPLETED
    UNCOMPLETED
  }

  type Query {
    todo(id: ID!): Todo!,
    todos(status: Status): [Todo]
  }
  
  input StepInput {
    title: String!
    completed: Boolean = false
  }
  
  input TodoInput {
    title: String!
    steps: [StepInput]
  }
  
  type Mutation {
    createTodo(input: TodoInput!): Todo
    updateTodo(id: ID!, input: TodoInput!): Todo
    deleteTodo(id: ID!): Todo
  }
`);