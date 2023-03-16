const AbstractRepository = require('../../domain/Commons/abstractRepository')
const People = require('../../domain/People')
const swapi_base_url = 'https://swapi.dev/api/'

class PeopleRepository extends AbstractRepository {
    source;

    constructor(_source){
        super(_source)
        this.source = _source;
    }

    async get(id, lang) {
        const peopleResponse = await this.source.genericRequest(`${swapi_base_url}people/${id}`, 'GET', null, true)
        peopleResponse.id = id
        return peopleResponse? await People.peopleFactory(peopleResponse,lang) : peopleResponse
    }

    async getAll() {
        throw new Error("To be implemented on PeopleRepository");
    }

    async create(_people, lang) {
        throw new Error("To be implemented on PeopleRepository");
    }

    async update() {
        throw new Error("To be implemented on PeopleRepository");
    }

    async delete() {
        throw new Error("To be implemented on PeopleRepository");
    }
}

module.exports = PeopleRepository