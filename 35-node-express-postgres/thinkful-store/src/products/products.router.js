const router = require("express").Router();
const { list, listOutOfStockCount, listPriceSummary, read } = require("./products.controller");

// /products
router.route("/").get(list);

// custom routes
router.route("/out-of-stock-count").get(listOutOfStockCount);
router.route("/price-summary").get(listPriceSummary);

// params route
router.route("/:product_id").get(read);

module.exports = router;
