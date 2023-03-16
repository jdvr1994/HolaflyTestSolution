const AbstractController = require('../../domain/Commons/abstractController.js')

class PlanetController extends AbstractController {
    repository;

    constructor(_repository){
        super(_repository)
        this.repository = _repository;
    }

    getEntity(id) {
        this.repository.get()
    }

    getAllEntities() {
        throw new Error("To be implemented on PlanetController");
    }

    createEntity(entity) {
        throw new Error("To be implemented on PlanetController");
     }

    updateEntity() {
        throw new Error("To be implemented on PlanetController");
    }

    deleteEntity() {
        throw new Error("To be implemented on PlanetController");
    }
}

module.exports = PlanetController