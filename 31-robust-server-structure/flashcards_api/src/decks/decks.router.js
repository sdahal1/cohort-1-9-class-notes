const express = require('express');
const methodNotAllowed = require('../errors/methodNotAllowed');

const controller = require('./decks.controller')
const cardsRouter = require('../cards/cards.router');
const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router.route('/:deckId')
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed);

router.use('/:deckId/cards', controller.validateDeckExists, cardsRouter);
module.exports = router;
