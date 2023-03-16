const AbstractRepository = require('../../domain/Commons/abstractRepository')
const SwapiException = require('../../domain/Commons/exceptions/swapi.exception')
const Planet = require('../../domain/Planet').Planet
const {swapi_base_url} = require('../../../commons/config')

class PlanetRepository extends AbstractRepository {
    source;

    constructor(_source){
        super(_source)
        this.source = _source;
    }

    async get(id, lang) {
        const planetResponse = await this.source.genericRequest(`${swapi_base_url}planets/${id}`, 'GET', null, true);
        if(planetResponse.detail) throw new SwapiException('The planet was not found', planetResponse)
        planetResponse.id = id
        const gravity_value = parseFloat(planetResponse.gravity?.split(' ')[0])
        planetResponse.gravity = gravity_value? gravity_value : 0
        return planetResponse? new Planet(planetResponse) : planetResponse
    }

    async getAll() {
        throw new Error("To be implemented on PlanetRepository");
    }

    async create(_planet) {
        throw new Error("To be implemented on PlanetRepository");
    }

    async update() {
        throw new Error("To be implemented on PlanetRepository");
    }

    async delete() {
        throw new Error("To be implemented on PlanetRepository");
    }
}

module.exports = PlanetRepository