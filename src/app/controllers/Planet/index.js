const AbstractController = require('../../domain/Commons/abstractController');
const ApplicationException = require('../../domain/Commons/exceptions/application.exception');

class PlanetController extends AbstractController {
  repository;

  ext_repository;

  constructor(_repository, _extRepository) {
    super(_repository);
    this.repository = _repository;
    this.ext_repository = _extRepository;
  }

  async getEntity(id, lang) {
    if (!this.validateId(id)) throw new ApplicationException('invalid planetId');
    let planet = await this.repository.get(id, lang);
    if (!planet) {
      planet = await this.ext_repository.get(id, lang);
      planet = await this.repository.create(planet);
    }
    return planet;
  }

  async getAllEntities() {
    throw new Error('To be implemented on PlanetController');
  }

  async createEntity(_planet) {
    return await this.repository.create(_planet);
  }

  async updateEntity() {
    throw new Error('To be implemented on PlanetController');
  }

  async deleteEntity() {
    throw new Error('To be implemented on PlanetController');
  }

  validateId(id) {
    return id > 0;
  }
}

module.exports = PlanetController;
