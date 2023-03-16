class AbstractController {
    constructor(_repository){
        if (this.constructor == AbstractController) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getEntity(id) {
        throw new Error("To be implemented");
    }

    getAllEntities() {
        throw new Error("To be implemented");
    }

    createEntity() {
        throw new Error("To be implemented");
     }

    updateEntity() {
        throw new Error("To be implemented");
    }

    deleteEntity() {
        throw new Error("To be implemented");
    }
}

module.exports = AbstractController;