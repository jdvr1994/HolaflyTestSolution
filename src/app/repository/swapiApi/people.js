const AbstractRepository = require('../../domain/Commons/abstractRepository');
const SwapiException = require('../../domain/Commons/exceptions/swapi.exception');
const People = require('../../domain/People');
const { swapiBaseUrl } = require('../../../commons/config');

class PeopleRepository extends AbstractRepository {
  source;

  constructor(_source) {
    super(_source);
    this.source = _source;
  }

  async get(id, lang) {
    const format = lang ? `?format=${lang}` : '';
    const peopleResponse = await this.source.genericRequest(`${swapiBaseUrl}people/${id}${format}`, 'GET', null, false);
    peopleResponse.id = id;
    if (peopleResponse.detail) throw new SwapiException('The people was not found', peopleResponse);
    return peopleResponse ? await People.peopleFactory(peopleResponse, lang) : peopleResponse;
  }

  async getAll() {
    throw new Error('To be implemented on PeopleRepository');
  }

  // eslint-disable-next-line no-unused-vars
  async create(_people, lang) {
    throw new Error('To be implemented on PeopleRepository');
  }

  async update() {
    throw new Error('To be implemented on PeopleRepository');
  }

  async delete() {
    throw new Error('To be implemented on PeopleRepository');
  }
}

module.exports = PeopleRepository;
