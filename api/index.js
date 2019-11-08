const express = require('express');
const graphqlMiddleware = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema');
const resolvers = require('./resolvers');

const api = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/mine');
mongoose.connection.once('open', () => console.log('connected mongodb'));

api.all('/graphql', graphqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

module.exports = api;

