const express = require("express");
const morgan = require("morgan");
const cuid = require("cuid");
const logger = require('./logger');

const app = express();

// Import data store
const { cards, decks } = require("./dataStore");


// -- PIPELINE STARTS HERE ---

// Middleware
app.use(morgan("common"));
app.use(express.json());

// Routes

const cardsRouter = require('./cards/cards.router');
app.use("/cards", cardsRouter);

const decksRouter = require('./decks/decks.router');
app.use("/decks", decksRouter)

// Error Handler
app.use(function errorHandler(error, req, res, _next) {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  logger.error(message);

  res
    .status(status)
    .json({ error: message });
});

module.exports = app;