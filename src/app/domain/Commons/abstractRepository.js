class AbstractRepository {
  // eslint-disable-next-line no-unused-vars
  constructor(_db) {
    if (this.constructor === AbstractRepository) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  // eslint-disable-next-line no-unused-vars
  async get(_id, _lang) {
    throw new Error('To be implemented');
  }

  async getAll() {
    throw new Error('To be implemented');
  }

  // eslint-disable-next-line no-unused-vars
  async create(_entity) {
    throw new Error('To be implemented');
  }

  async update() {
    throw new Error('To be implemented');
  }

  async delete() {
    throw new Error('To be implemented');
  }
}

module.exports = AbstractRepository;
