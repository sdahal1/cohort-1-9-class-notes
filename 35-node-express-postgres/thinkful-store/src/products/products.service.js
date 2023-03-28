const knex = require("../db/connection");

const addSupplier = mapProperties({
    supplier_id: "supplier.supplier_id",
    supplier_name: "supplier.supplier_name",
    supplier_city: "supplier.supplier_city",
    supplier_state: "supplier.supplier_state",
});

function listAll() {
    // SELECT * FROM products
    return knex("products").select("*")
}

function listOutOfStockCountService() {
    // counts the number of products that have a quantity of 0
    // SELECT count(*) FROM products WHERE product_quantity_in_stock = 0;

    // SELECT product_quantity_in_stock AS out_of_stock, COUNT(product_id)
    // FROM products
    // WHERE out_of_stock = 0
    // GROUP BY out_of_stock
    return knex("products")
        .select("product_quantity_in_stock as out_of_stock")
        .count("*")
        .where({ product_quantity_in_stock: 0 })
        .groupBy("out_of_stock")
}

function listPriceSummaryService() {
    // provides the min, max, and avg prices for each supplier
    //SELECT min(product_price), max(product_price), avg(product_price) FROM products GROUP BY supplier_id
    return knex("products")
        .select("supplier_id")
        .min("product_price")
        .max("product_price")
        .avg("product_price")
        .groupBy("supplier_id")

}

function readService(product_id) {
    //join
    return knex("products as p")
        .select("*")
        //join(table, relationship, relationship)
        .join("suppliers as s", "s.supplier_id", "p.supplier_id")
        .where({ product_id })
        .first()
        .then(addSupplier)
}


module.exports = {
    listAll,
    listOutOfStockCountService,
    listPriceSummaryService,
    readService,
};
