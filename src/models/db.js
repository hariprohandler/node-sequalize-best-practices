const Sequelize = require('sequelize')
const  DT = Sequelize.DataTypes
const db = new Sequelize('sampleblogdb', 'samplebloguser', 'sampleblogpass', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    port: 3306
})

const Users = db.define('user', {
    username: {
        type: DT.STRING(30),
        unique: true,
        allowNull: false
    },
    password: {
        type: DT.STRING,
        allowNull: false
    }
})

const Article = db.define('article', {
    title: {
        type: DT.STRING(150),
        allowNull: false
    },
    content: {
        type: DT.TEXT,
        allowNull: false
    }
})

const Comment = db.define('comment', {
    title: {
        type: DT.STRING
    },
    message: {
        type: DT.TEXT
    }
})

Article.belongsTo(Users, { as: 'author' })
Users.hasMany(Article, { foreignKey: 'authorId' })
Comment.belongsTo(Article)
Article.hasMany(Comment)

Comment.belongsTo(Users)
Users.hasMany(Comment)

module.exports = {
    db,
    Users,
    Article,
    Comment
}