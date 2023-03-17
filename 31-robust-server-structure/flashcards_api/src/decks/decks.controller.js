const { decks } = require('../dataStore');
const logger = require('../logger');
const cuid = require('cuid');


// Utility function to delete items from any provided collection by id
function deleteItem(collection, id) {
  const itemIndex = collection.findIndex(i => i.id === id);
  if (itemIndex > -1) {
    collection.splice(itemIndex, 1);
  }
}

const list = (req, res, _next) => {
  res
    .json({ data: decks });
}

const create = (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  }

  const { name, description } = data;

  const requiredFields = ["name", "description"];
  for (const field of requiredFields) {
    if (!data[field]) {
      const message = `'${field}' is required`;
      return next({ status: 400, message });
    }
  }

  // get an id
  const id = cuid();

  const deck = {
    id,
    name,
    description,
  };

  decks.push(deck);

  logger.info(`Deck with id ${id} created`);

  res
    .status(201)
    .json({ data: deck });
};

const validateDeckExists = (req, res, next) => {
  const { deckId } = req.params;

  const deckIndex = decks.findIndex(d => d.id === deckId);

  if (deckIndex < 0) {
    const message = `Deck with id ${deckId} not found.`;
    return next({ status: 404, message });
  } else {
    res.locals.deckIndex = deckIndex;
    res.locals.deck = decks[deckIndex];
    next();
  }
}

const read = (req, res, next) => {
  const deck = res.locals.deck;
  res.json({ data: deck });
};

const destroy = (req, res, next) => {
  const { deckId } = req.params;

  // Delete deck
  deleteItem(decks, deckId);
  // Delete all cards in deck
  cards
    .filter(c => c.deckId === deckId)
    .forEach(c => deleteItem(cards, c.id));

  logger.info(`Deck with id ${deckId} deleted.`);
  res
    .status(204)
    .end();
};

module.exports = {
  validateDeckExists,
  list,
  create,
  read: [validateDeckExists, read],
  destroy: [validateDeckExists, destroy]
}