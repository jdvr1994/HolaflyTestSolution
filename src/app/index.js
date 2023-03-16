const db = require('./db');
const appControllers = require('./controllers');
const repositories = require('./repository');
const swapiFunctions = require('./swapiFunctions')

const peopleSeqRepository = new repositories.peopleSequalize(db)
const planetSeqRepository = new repositories.planetSequalize(db)
const peopleSwapiRepository = new repositories.peopleSwapiAPI(swapiFunctions)
const planetSwapiRepository = new repositories.planetSwapiAPI(swapiFunctions)

const controllers = {
    peopleController: new appControllers.people(peopleSeqRepository,peopleSwapiRepository,planetSeqRepository,planetSwapiRepository),
    planetController: new appControllers.planet(planetSeqRepository,planetSwapiRepository),
}

module.exports = {
    db,
    controllers,
    swapiFunctions
}