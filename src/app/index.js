const db = require('./db');
const application = require('./application');
const repositories = require('./repository');
const swapiFunctions = require('./swapiFunctions')

const peopleRepository = new repositories.people(db)

const controllers = {
    peopleController: new application.people(peopleRepository)
}

module.exports = {
    db,
    controllers,
    swapiFunctions
}