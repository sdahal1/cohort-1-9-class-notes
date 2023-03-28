const { 
    getAllArticles,
    createArticle,
    readArticle,
    updateArticle,
    destroyArticle
} = require("./articles.service")

const asyncErrorBoundary = require("../errors/asyncErrorBoundary")


const wrappedList = asyncErrorBoundary(list)




async function list(req, res, _next) {
    let data = await getAllArticles();
    res.json({data})
}

async function create(req, res, _next) {
    let [newArticle] = await createArticle(req.body); // use destructuring to get the first row
    res.json({ data: newArticle }); // return the new article in the response
}

async function destroy(req, res, next) {
    const data = await destroyArticle(req.params.articleId);
    res.json({ data });
}

async function update(req, res, next) {
    const data = await updateArticle(req.params.articleId, req.body);
    res.json({ data });
}

async function read(req, res, next) {
    const { articleId } = req.params;
    const data = await readArticle(articleId);
    res.json({ data });
}




module.exports = {
    list: wrappedList,
    create: asyncErrorBoundary(create),
    read: asyncErrorBoundary(read),
    destroy: asyncErrorBoundary(destroy),
    update: asyncErrorBoundary(update)
}