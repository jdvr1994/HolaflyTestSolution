const AbstractController = require('../../domain/Commons/abstractController');
const ApplicationException = require('../../domain/Commons/exceptions/application.exception');

class PeopleController extends AbstractController {
  people_rep;

  people_ext_rep;

  planet_rep;

  planet_ext_rep;

  constructor(_peopleRep, _peopleExtRep, _planetRep, _planetExtRep) {
    super(_peopleRep, _peopleExtRep);
    this.people_rep = _peopleRep;
    this.people_ext_rep = _peopleExtRep;
    this.planet_rep = _planetRep;
    this.planet_ext_rep = _planetExtRep;
  }

  async getEntity(id, lang) {
    if (!this.validateId(id)) throw new ApplicationException('invalid peopleId');

    let people = await this.people_rep.get(id);
    if (!people) {
      people = await this.people_ext_rep.get(id, lang);
      const planetId = people.getHomeworldId()?.split('planets/').length > 1 ? people.getHomeworldId()?.split('planets/')[1] : undefined;
      let planet = await this.planet_rep.get(planetId, lang);
      if (!planet) {
        planet = await this.planet_ext_rep.get(planetId, lang);
        planet = await this.planet_rep.create(planet);
      }
      people.homeworldName = planet.getName();
      people = await this.createEntity(people);
    }
    return people;
  }

  async createEntity(people) {
    return await this.people_rep.create(people);
  }

  async getAllEntities() {
    throw new Error('To be implemented on PeopleController');
  }

  async updateEntity() {
    throw new Error('To be implemented on PeopleController');
  }

  async deleteEntity() {
    throw new Error('To be implemented on PeopleController');
  }

  validateId(id) {
    return id > 0;
  }
}

module.exports = PeopleController;
