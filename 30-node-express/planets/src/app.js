// require in express
const express = require('express');
// make an express app
const app = express();

// do other useful things
// add in middleware

app.use((req, res, next) => {
  // log the incoming request
  console.log('there was a request');
  // move on to the next piece of middleware or main task/handler function
  next();
})

// define routes

// what path are we listening at?
// what to do when a request comes in at that path?
// this is a handler: sends something in the response

app.get('/', (req, res, next) => {
  res.send('1. this is still root and it is refreshing now');
})

// this will never run! the above handler will send back its response
app.get('/', (req, res, next) => {
  res.send('2. please use this data');
})


app.get('/current-time', (req, res, next) => {
  let now = new Date();
  res.send(now.toString());
})

// export the app
module.exports = app;
