const PeopleSequalize = require('./sequalize/people');
const PlanetSequalize = require('./sequalize/planet');
const LogSequalize = require('./sequalize/log');
const PeopleSwapiAPI = require('./swapiApi/people');
const PlanetSwapiAPI = require('./swapiApi/planet');

module.exports = {
  PeopleSequalize,
  PlanetSequalize,
  LogSequalize,
  PeopleSwapiAPI,
  PlanetSwapiAPI,
};
