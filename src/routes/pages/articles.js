const route = require('express').Router()
const { fetchArticles } = require('../../controller/articles')

route.get('/', async (req, res) => {
    try{
        const articles = await fetchArticles()
        res.render('pages/articles', { articles })
    }catch(e) {
        res.redirect('/')
    }
})

module.exports = route
