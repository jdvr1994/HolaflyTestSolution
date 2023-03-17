const AbstractRepository = require('../../domain/Commons/abstractRepository');
const { Log } = require('../../domain/Log');

class LogRepository extends AbstractRepository {
  source;

  constructor(_source) {
    super(_source);
    this.source = _source;
  }

  async getAll() {
    const logs = await this.source.logging.findAll();
    const response = [];
    for (const log of logs) {
      response.push(new Log(log));
    }
    return response;
  }

  async create(_log) {
    const logResponse = (await this.source.logging.create(_log)).toJSON();
    return await new Log(logResponse);
  }
}

module.exports = LogRepository;
