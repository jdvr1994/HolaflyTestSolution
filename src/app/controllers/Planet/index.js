const AbstractController = require('../../domain/Commons/abstractController.js')

class PlanetController extends AbstractController {
    repository;
    ext_repository;

    constructor(_repository, _ext_repository){
        super(_repository)
        this.repository = _repository;
        this.ext_repository = _ext_repository;
    }

    async getEntity(id, lang) {
        if(!this.validateId(id)) throw new ApplicationException("invalid peopleId");
        let planet = await this.repository.get(id, lang)
        if(!planet){
            planet = await this.ext_repository.get(id, lang)
            planet = await this.repository.create(planet)
        }
        return planet
    }

    async getAllEntities() {
        throw new Error("To be implemented on PlanetController");
    }

    async createEntity(_planet) {
        planet = await this.repository.create(_planet)
     }

    async updateEntity() {
        throw new Error("To be implemented on PlanetController");
    }

    async deleteEntity() {
        throw new Error("To be implemented on PlanetController");
    }

    validateId(id) {
        return id>0;
    }
}

module.exports = PlanetController