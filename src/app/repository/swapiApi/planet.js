const AbstractRepository = require('../../domain/Commons/abstractRepository');
const SwapiException = require('../../domain/Commons/exceptions/swapi.exception');
const { Planet } = require('../../domain/Planet');
const { swapiBaseUrl } = require('../../../commons/config');

class PlanetRepository extends AbstractRepository {
  source;

  constructor(_source) {
    super(_source);
    this.source = _source;
  }

  // eslint-disable-next-line no-unused-vars
  async get(id, lang) {
    const planetResponse = await this.source.genericRequest(`${swapiBaseUrl}planets/${id}`, 'GET', null, false);
    if (planetResponse.detail) throw new SwapiException('The planet was not found', planetResponse);
    planetResponse.id = id;
    const gravityValue = parseFloat(planetResponse.gravity?.split(' ')[0]);
    planetResponse.gravity = gravityValue || 0;
    return planetResponse ? new Planet(planetResponse) : planetResponse;
  }

  async getAll() {
    throw new Error('To be implemented on PlanetRepository');
  }

  // eslint-disable-next-line no-unused-vars
  async create(_planet) {
    throw new Error('To be implemented on PlanetRepository');
  }

  async update() {
    throw new Error('To be implemented on PlanetRepository');
  }

  async delete() {
    throw new Error('To be implemented on PlanetRepository');
  }
}

module.exports = PlanetRepository;
