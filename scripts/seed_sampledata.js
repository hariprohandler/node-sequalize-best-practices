const models = require('../src/models/db')

async function seed() {
    try{
        await models.db.sync({force: true})

        await models.Users.bulkCreate([
            {username: 'firstuser', password: 'firstpass'},
            {username: 'seconduser', password: 'secondpass'}
        ]);

        await models.Article.bulkCreate([
            {
                title: 'First Article',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
                authorId: 1
            },
            {
                title: 'Second Article',
                content: 'It is a long established fact that a reader will be .',
                authorId: 1
            },
            {
                title: 'Third Article',
                content: 'There are many variations of passages of',
                authorId: 2
            },
            {
                title: 'Fourth Article',
                content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
                authorId: 2
            }
        ])
    }catch(e){
        throw e
    }
}

seed()