const AbstractPeople = require('./abstractPeople');
const WookieTranslator = require('../../../commons/wookieeTranslator');
const { swapiBaseUrl } = require('../../../commons/config');
//  Class to encapsulate the people model src/app/db/models/swPeopleModel.js
class WookieePeople extends AbstractPeople {
  constructor(_peopleData) {
    super(_peopleData);

    this.id = _peopleData.id;
    this.name = WookieTranslator.getValueFromWookieeBody(_peopleData, 'name');
    this.mass = _peopleData[WookieTranslator.toWookie('mass')];
    this.height = _peopleData[WookieTranslator.toWookie('height')];
    this.homeworldName = WookieTranslator.getValueFromWookieeBody(_peopleData, 'homeworld_name');
    const splittedHomeworldUrl = WookieTranslator.getValueFromWookieeBody(_peopleData, 'homeworld')?.split(swapiBaseUrl);
    const homeWorldId = _peopleData[WookieTranslator.toWookie('homeworld_id')];
    // eslint-disable-next-line max-len
    this.homeworldId = homeWorldId || (splittedHomeworldUrl?.length > 1 ? splittedHomeworldUrl[1].slice(0, -1) : null);
  }
}

module.exports = WookieePeople;
