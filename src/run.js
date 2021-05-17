const { app } = require('./server')
const { db } = require('./models/db')
const log = require('debug')('app:run')

async function run () {
    await db.sync({ force: true }) // force drop table
    log('database is synchronized')
    app.listen(2929, () => {
        log('App is listening on http://localhost:2929')
    })
}

run()
