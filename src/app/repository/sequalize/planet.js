const AbstractRepository = require('../../domain/Commons/abstractRepository');
const { Planet } = require('../../domain/Planet');

class PlanetRepository extends AbstractRepository {
  source;

  constructor(_source) {
    super(_source);
    this.source = _source;
  }

  // eslint-disable-next-line no-unused-vars
  async get(id, lang) {
    const planetResponse = (await this.source.swPlanet.findByPk(id))?.toJSON();
    return planetResponse ? new Planet(planetResponse) : planetResponse;
  }

  async getAll() {
    throw new Error('To be implemented on PlanetRepository');
  }

  async create(_planet) {
    const planetResponse = (await this.source.swPlanet.create(_planet)).toJSON();
    return await new Planet(planetResponse);
  }

  async update() {
    throw new Error('To be implemented on PlanetRepository');
  }

  async delete() {
    throw new Error('To be implemented on PlanetRepository');
  }
}

module.exports = PlanetRepository;
