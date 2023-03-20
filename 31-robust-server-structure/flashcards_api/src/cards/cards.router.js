// router file defines the routes that exist & connect them to handlers
const express = require('express');
const methodNotAllowed = require('../errors/methodNotAllowed');
const cardsController = require('./cards.controller');

// mergeParams gives us access to params from the parent router
// in this case, from the decks router
const router = express.Router({ mergeParams: true });


// a route is the combination of a method and a path
// a path is the end part of the URL, which might contain variables
// an HTTP method is one of the different forms our HTTP requests can take (GET, POST, etc)

router.route("/")
  .get(cardsController.list)
  // each of these can take in a single function, an array of functions, or multiple functions
  .post(cardsController.create)
  // .put
  // .patch
  // .delete
  .all(methodNotAllowed);

router.route("/:cardId")
  .get(cardsController.read)
  .put(cardsController.update)
  .delete(cardsController.destroy)
  .all(methodNotAllowed);

module.exports = router;
