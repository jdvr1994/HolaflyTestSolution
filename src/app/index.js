const db = require('./db');
const application = require('./application');
const repositories = require('./repository');
const swapiFunctions = require('./swapiFunctions')

const peopleRepository = new repositories.people(db)
const planetRepository = new repositories.planet(db)

const controllers = {
    peopleController: new application.people(peopleRepository),
    planetController: new application.planet(planetRepository)
}

module.exports = {
    db,
    controllers,
    swapiFunctions
}