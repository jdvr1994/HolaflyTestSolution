const AbstractController = require('../../domain/Commons/abstractController');

class LogController extends AbstractController {
  repository;

  ext_repository;

  constructor(_repository, _extRepository) {
    super(_repository);
    this.repository = _repository;
    this.ext_repository = _extRepository;
  }

  async getEntity() {
    throw new Error('To be implemented on LogController');
  }

  async getAllEntities() {
    return await this.repository.getAll();
  }

  async createEntity(log) {
    return await this.repository.create(log);
  }

  async updateEntity() {
    throw new Error('To be implemented on LogController');
  }

  async deleteEntity() {
    throw new Error('To be implemented on LogController');
  }
}

module.exports = LogController;
