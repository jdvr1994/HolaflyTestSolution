const peopleSequalize = require('./sequalize/people');
const planetSequalize = require('./sequalize/planet');
const logSequalize = require('./sequalize/log');
const peopleSwapiAPI = require('./swapiApi/people');
const planetSwapiAPI = require('./swapiApi/planet');

module.exports = {
    peopleSequalize,
    planetSequalize,
    logSequalize,
    peopleSwapiAPI,
    planetSwapiAPI
}