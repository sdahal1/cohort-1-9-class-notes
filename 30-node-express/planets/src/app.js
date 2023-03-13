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
  // toSting, misspelled, so it will go to error handling
  res.send(now.toSting());
})

app.get('/greeting', (req, res, next) => {
  // let name = req.query.name;
  let { name, planet = 'Earth' } = req.query;
  // if they didn't include a name, handle the error
  if (!name) {
    next('Did not include a name in the greeting route');
  } else {
    res.send(`greetings from planet ${planet}, ${name}!`);
  }
})


app.get('/planets/coolestPlanet', (req, res, next) => {
  res.send('The coolest planet is the one that you are on :D')
})

let closerPlanets = ['Mercury', 'Venus'];
let fartherPlanets = ['Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
app.get('/planets/:planet', (req, res, next) => {
  let { planet } = req.params;
  if (closerPlanets.includes(planet)) {
    res.send(`The planet ${planet} is closer to the Sun than Earth.`)
  } else if (fartherPlanets.includes(planet)) {
    res.send(`The planet ${planet} is farther from the Sun than Earth`)
  } else {
    res.send(`I don't know about ${planet}.`);
  }
})


// error handling
// you can tell from the 4 params
app.use((error, req, res, next) => {
  console.log(error);
  res.send('There was an error.')
})


// export the app
module.exports = app;
