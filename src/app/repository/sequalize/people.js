const AbstractRepository = require('../../domain/Commons/abstractRepository')
const People = require('../../domain/People')
class PeopleRepository extends AbstractRepository {
    source;

    constructor(_source){
        super(_source)
        this.source = _source;
    }

    async get(id, lang) {
        const peopleResponse = (await this.source.swPeople.findByPk(id))?.toJSON()
        return peopleResponse? People.peopleFactory(peopleResponse,lang) : peopleResponse
    }

    async getAll() {
        throw new Error("To be implemented on PeopleRepository");
    }

    async create(_people, lang) {
        _people.homeworld_name = _people.homeworldName;
        _people.homeworld_id = _people.homeworldId;
        const peopleResponse = (await this.source.swPeople.create(_people)).toJSON();
        peopleResponse.homeworldName = peopleResponse.homeworld_name;
        peopleResponse.homeworldId = peopleResponse.homeworld_id;
        return await People.peopleFactory(peopleResponse,lang);
    }

    async update() {
        throw new Error("To be implemented on PeopleRepository");
    }

    async delete() {
        throw new Error("To be implemented on PeopleRepository");
    }
}

module.exports = PeopleRepository