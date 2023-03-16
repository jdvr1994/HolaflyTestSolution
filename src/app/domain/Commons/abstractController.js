const ApplicationException = require('./exceptions/application.exception');
const DateBaseException = require('./exceptions/db.exception');
class AbstractController {
    constructor(_repository, _ext_repository){
        if (this.constructor == AbstractController) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async getEntity(id, lang) {
        throw new Error("To be implemented");
    }

    async getAllEntities() {
        throw new Error("To be implemented");
    }

    async createEntity() {
        throw new Error("To be implemented");
     }

    async updateEntity() {
        throw new Error("To be implemented");
    }

    async deleteEntity() {
        throw new Error("To be implemented");
    }

    handleException(err, res){
        if(err instanceof ApplicationException){
            res.status(400);
            res.send(err.message);
        }else if(err instanceof DateBaseException){
            res.status(err.code);
            res.send(err.message);
        }else{
            console.log("Unexpected Error",{Errormessage: err})
            throw new Error();
        }
    }
}

module.exports = AbstractController;