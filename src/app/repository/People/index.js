const AbstractRepository = require('../../domain/Commons/abstractRepository')

class PeopleRepository extends AbstractRepository {
    db;

    constructor(_db){
        super(_db)
        this.db = _db;
    }

    async get(id) {
        throw new Error("To be implemented on PeopleRepository");
    }

    async getAll() {
        throw new Error("To be implemented on PeopleRepository");
    }

    async create(_people) {
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