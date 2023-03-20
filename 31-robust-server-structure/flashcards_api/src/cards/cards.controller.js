// define handlers that will be used in the router
const { cards, decks } = require('../dataStore');

const cuid = require("cuid");
const logger = require('../logger');

const list = (req, res, _next) => {
  if (req.params.deckId) {
    let filteredCards = cards.filter(card => card.deckId === req.params.deckId);
    res.json({ data: filteredCards });
  } else {
    res.json({ data: cards });
  }
}

const makeAFunctionThatChecksForField = (field) => {
  const validateFieldExists = (req, res, next) => {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `${field} is required.` })
    } else {
      return next();
    }
  }
  return validateFieldExists;
}


const create = (req, res, next) => {

  const { front, back, deckId } = data;

  // Validate required fields are present
  // const requiredFields = ["front", "back", "deckId"];
  // for (const field of requiredFields) {
  //   if (!data[field]) {
  //     const message = `'${field}' is required`;
  //     return next({ status: 400, message });
  //   }
  // }

  // Validate deck exists
  const deck = decks.find(d => d.id === deckId);
  if (!deck) {
    const message = `Deck id ${deckId} does not exist.`;
    return next({ status: 400, message });
  }

  // Create an ID
  const id = cuid();

  const card = {
    id,
    front,
    back,
    deckId,
  };

  cards.push(card);
  logger.info(`Card with id ${id} created`);

  res
    .status(201)
    .json({ data: card });
};

const validateDataExists = (req, res, next) => {
  const data = req.body.data;
  if (data) {
    next();
  } else {
    next({
      status: 400,
      message: 'request must include data'
    })
  }
}
const validateCardExists = (req, res, next) => {
  const { cardId } = req.params;
  const cardIndex = cards.findIndex(c => c.id === cardId);

  // make sure we found a card
  if (cardIndex < 0) {
    const message = `Card with id ${cardId} not found.`;
    return next({ status: 404, message });
  } else {
    // save the card and its index for future middleware use
    res.locals.cardIndex = cardIndex;
    res.locals.card = cards[cardIndex];
    next();
  }
}

const read = (req, res, next) => {
  // access the card that we saved during validateCardExists
  const { card } = res.locals;
  res.json({ data: card });
};

const update = (req, res, next) => {
  const { card, cardIndex } = res.locals;
  const { front, back, deckId } = req.body.data;
  // create an object with the updated data
  const updatedCard = {
    ...card,
    front,
    back,
    deckId
  };
  // replace the card object in the cards array with my updated object
  cards.splice(cardIndex, 1, updatedCard);
  // send as the response the updated card object
  res.json({data: updatedCard});
}

const destroy = (req, res, next) => {
  // access the cardIndex we saved during validateCardExists
  const { cardIndex } = res.locals;
  cards.splice(cardIndex, 1);
  res
    .status(204)
    .send();
};

// the even wilder way of doing this
// let fields = ['front', 'back', 'deckId']
// fields.map(field => makeAFunctionThatChecksForField(field))
// inside of create, I would spread the result of that map
module.exports = {
  list: list,
  create: [
    validateDataExists,
    makeAFunctionThatChecksForField('front'),
    makeAFunctionThatChecksForField('back'),
    makeAFunctionThatChecksForField('deckId'),
    create
  ],
  read: [validateCardExists, read],
  update: [
    validateCardExists,
    validateDataExists,
    ...['front', 'back', 'deckId'].map(makeAFunctionThatChecksForField),
    update
  ],
  destroy: [validateCardExists, destroy]
};
