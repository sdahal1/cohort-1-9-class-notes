// require in express
const express = require('express');
// make an express app
const app = express();

// do other useful things
// add in middleware

const morgan = require('morgan');
app.use(morgan('dev'));

// define routes

// what path are we listening at?
// what to do when a request comes in at that path?
// this is a handler: sends something in the response

app.get('/', (req, response, next) => {
  response.send('1. this is root');
})

// this will never run! the above handler will send back its response
app.get('/', (req, res, next) => {
  res.send('2. please use this data');
})


app.get('/current-time', (req, res, next) => {
  let now = new Date();
  // toSting, misspelled, so it will go to error handling
  res.send(now.toString());
})

function validateName(req, res, next) {
  // if the name exists and is valid, just move to the next piece of middleware in the pipeline
  if (req.query.name) {
    return next();
  }
  // if the name wasn't valid, go into error handling
  return next('Did not include a name');

}

function validateNameLength(req,res, next) {}
// app-level middleware: runs on every request
// bad because not every request should have a name
// app.use(validateName);

// route-level middleware: runs only for this route
app.get('/greeting', validateName, validateNameLength, (req, res, next) => {
  let { name, planet = 'Earth' } = req.query;
  
  res.send(`greetings from planet ${planet}, ${name}!`);
})

app.get('/planets/coolestPlanet', (req, res, next) => {
  res.send('The coolest planet is the one that you are on :D')
})


let closerPlanets = ['Mercury', 'Venus'];
let fartherPlanets = ['Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
app.get('/planets/:planet', (req, res, next) => {
  let { planet } = req.params;
  if (closerPlanets.includes(planet)) {
    return res.send(`The planet ${planet} is closer to the Sun than Earth.`)
  } else if (fartherPlanets.includes(planet)) {
    return res.send(`The planet ${planet} is farther from the Sun than Earth`)
  } else {
    return res.send(`I don't know about ${planet}.`);
  }
  res.send('this will never happen thanks to the returns');
})

// using planets data from data directory

const planets = require('../data');
app.get('/planets', (req, res, next) => {
  // if limitedData is true, only send some of the info
  if (req.query.limitedData && req.query.limitedData.toLowerCase() !== 'false') {
    let limitedDataPlanets = planets.map(planet => ({ name: planet.name, image: planet.image, description: planet.description }));
    res.send(limitedDataPlanets);
  } else {
    // otherwise, send everything
    res.send(planets);
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
