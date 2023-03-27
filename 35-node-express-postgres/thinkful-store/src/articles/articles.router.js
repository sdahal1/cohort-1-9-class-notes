const router = require("express").Router();
const { list, create, read, update, destroy } = require("./articles.controller");

//creating endpoints for when we reach /articles
// /articles get all and create
// /articles/:articleId get one, delete one, update one
router.route("/").get(list)//.post(create);
//router.route("/:articleId").get(read).put(update).delete(destroy);

module.exports = router;