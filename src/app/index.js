const db = require('./db');
const appControllers = require('./controllers');
const repositories = require('./repository');
const swapiFunctions = require('./swapiFunctions');

const peopleSeqRepository = new repositories.PeopleSequalize(db);
const planetSeqRepository = new repositories.PlanetSequalize(db);
const logSeqRepository = new repositories.LogSequalize(db);
const peopleSwapiRepository = new repositories.PeopleSwapiAPI(swapiFunctions);
const planetSwapiRepository = new repositories.PlanetSwapiAPI(swapiFunctions);

const controllers = {
  peopleController: new appControllers.People(
    peopleSeqRepository,
    peopleSwapiRepository,
    planetSeqRepository,
    planetSwapiRepository,
  ),
  planetController: new appControllers.Planet(planetSeqRepository, planetSwapiRepository),
  logController: new appControllers.Log(logSeqRepository, null),
};

module.exports = {
  db,
  controllers,
  swapiFunctions,
};
