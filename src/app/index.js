const db = require('./db');
const appControllers = require('./controllers');
const repositories = require('./repository');
const swapiFunctions = require('./swapiFunctions')

const peopleSeqRepository = new repositories.peopleSequalize(db)
const planetSeqRepository = new repositories.planetSequalize(db)
const logSeqRepository = new repositories.logSequalize(db)
const peopleSwapiRepository = new repositories.peopleSwapiAPI(swapiFunctions)
const planetSwapiRepository = new repositories.planetSwapiAPI(swapiFunctions)

const controllers = {
    peopleController: new appControllers.people(peopleSeqRepository,peopleSwapiRepository,planetSeqRepository,planetSwapiRepository),
    planetController: new appControllers.planet(planetSeqRepository,planetSwapiRepository),
    logController: new appControllers.log(logSeqRepository,null)
}

module.exports = {
    db,
    controllers,
    swapiFunctions
}