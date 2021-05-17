const { fetchArticles, createArticle } = require('../../controller/articles')
const route = require('express').Router()

route.get('/', async (req, res) => {
    // getAllArticles
    const articles = await fetchArticles()
    res.status(200).json(articles)

})

route.post('/', async (req, res) => {
    // add new article
    const article = await createArticle(
        req.body.title,
        req.body.content,
        1 // TODO: Use actual user id from req.user.id
    )
    res.send(article)
})

route.get('/:id', (req, res) => {
    // fetch particular article
})

route.get('/:id/comments', (req, res) => {
    // fetch comments of a prticular article
})

module.exports = route
