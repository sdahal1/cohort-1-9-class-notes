const { listAll, listOutOfStockCountService, listPriceSummaryService} = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await listAll();
    res.json({ data });
}

async function read(req, res, next) {
    const { product_id } = req.params;
    const data = await readService(product_id);
    res.json({ data });
}

async function listOutOfStockCount(req, res, next) {
    const data = await listOutOfStockCountService();
    res.json({ data: data });
}

async function listPriceSummary(req, res, next) {
    const data = await listPriceSummaryService();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: asyncErrorBoundary(read),
    listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
    listPriceSummary: asyncErrorBoundary(listPriceSummary),
};
