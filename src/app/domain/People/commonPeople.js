/* eslint-disable max-len */
const AbstractPeople = require('./abstractPeople');
const { swapiBaseUrl } = require('../../../commons/config');
//  Class to encapsulate the people model src/app/db/models/swPeopleModel.js
class CommonPeople extends AbstractPeople {
  constructor(_peopleData) {
    super(_peopleData);
    this.id = _peopleData.id;
    this.name = _peopleData.name;
    this.mass = _peopleData.mass;
    this.height = _peopleData.height;
    this.homeworldName = _peopleData.homeworld_name;
    const splittedHomeworldUrl = _peopleData.homeworld?.split(swapiBaseUrl);
    const homeworldId = _peopleData.homeworld_id;
    this.homeworldId = homeworldId || (splittedHomeworldUrl?.length > 1 ? splittedHomeworldUrl[1].slice(0, -1) : null);
  }
}

module.exports = CommonPeople;
