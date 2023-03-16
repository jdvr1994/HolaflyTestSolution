const AbstractController = require('../../domain/Commons/abstractController.js')

class PeopleController extends AbstractController {
    repository;

    constructor(_repository){
        super(_repository)
        this.repository = _repository;
    }

    getEntity(id) {
        this.repository.get()
    }

    getAllEntities() {
        throw new Error("To be implemented on PeopleController");
    }

    createEntity(entity) {
        throw new Error("To be implemented on PeopleController");
     }

    updateEntity() {
        throw new Error("To be implemented on PeopleController");
    }

    deleteEntity() {
        throw new Error("To be implemented on PeopleController");
    }
}

module.exports = PeopleController