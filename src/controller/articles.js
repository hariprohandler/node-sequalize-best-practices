const { Article, Users } = require('../models/db')

async function createArticle (title, content, authorId) {
    if( typeof title !== 'string' || title.length < 1){
        throw new Error('Title is empty or undefined')
    }

    if( typeof content !== 'string' || content.length < 1){
        throw new Error('Content is empty or undefined')
    }

    if( typeof authorId !== 'number' || authorId < 1) {
        throw new Error('Author id is either undefined or less than 1')
    }

    try {
         return await Article.create({
             title, content, authorId
         })
     } catch(e) {
        throw e
     }
}

async function fetchArticles() {
    try{
        return await Article.findAll({
            include:[
                {model: Users, as: 'author', attributes: ['username']}
            ]
        })
    }catch (e) {
        throw e
    }
}
module.exports = {
    createArticle,
    fetchArticles
}