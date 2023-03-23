const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('welcome to the station(ae)ry store');
})
// good code goes here
const itemsRouter = require('./items/items.router');
app.use('/items', itemsRouter);

app.use((error, req, res, next) => {
  // this is not the best version of the error handler
  // go find a better version
  res.status(error.status).send(error.message);
})
module.exports = app;
