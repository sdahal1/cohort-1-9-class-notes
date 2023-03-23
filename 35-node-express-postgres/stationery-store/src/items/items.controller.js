const knex = require("../db/connection")

const list = async (req, res, next) => {
  const dataFromDatabase = await knex('items').select('*');
  res.json({ data: dataFromDatabase });
  // .then(data => res.json({ data }));
}

const validateIdIsNumber = (req, res, next) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    next({
      status: 400,
      message: `Id must be an integer (got ${id})`
    })
  } else {
    next();
  }
}
const validateItemExists = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const dataFromDatabase = await knex('items').select('*').where({ id: parseInt(id) });
  if (dataFromDatabase.length > 0) {
    res.locals.item = dataFromDatabase[0];
    next();
  } else {
    next({
      status: 404,
      message: `Item with id ${id} not found`
    })
  }
}

const read = async (req, res, next) => {
  res.json({ data: res.locals.item });
}

module.exports = {
  list,
  read: [validateIdIsNumber, validateItemExists, read]
}