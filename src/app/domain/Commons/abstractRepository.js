class AbstractRepository {

    constructor(_db) {
        if (this.constructor == AbstractRepository) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async get(id, lang) {
        throw new Error("To be implemented");
    }

    async getAll() {
        throw new Error("To be implemented");
    }

    async create(entity) {
        throw new Error("To be implemented");
     }

    async update() {
        throw new Error("To be implemented");
    }

    async delete() {
        throw new Error("To be implemented");
    }
}

module.exports = AbstractRepository