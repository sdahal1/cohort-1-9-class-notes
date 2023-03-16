// router file defines the routes that exist & connect them to handlers
const express = require('express');
const cardsController = require('./cards.controller');

const router = express.Router();

router.route("/")
  .get(cardsController.list)
  .post(cardsController.create);

router.route("/:cardId")
  .get(cardsController.read)
  .delete(cardsController.destroy);

module.exports = router;
