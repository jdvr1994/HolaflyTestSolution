const AbstractRepository = require('../../domain/Commons/abstractRepository')

class PlanetRepository extends AbstractRepository {
    db;

    constructor(_db){
        super(_db)
        this.db = _db;
    }

    async get(id) {
        throw new Error("To be implemented on PlanetRepository");
    }

    async getAll() {
        throw new Error("To be implemented on PlanetRepository");
    }

    async create(_planet) {
        throw new Error("To be implemented on PlanetRepository");
    }

    async update() {
        throw new Error("To be implemented on PlanetRepository");
    }

    async delete() {
        throw new Error("To be implemented on PlanetRepository");
    }
}

module.exports = PlanetRepository