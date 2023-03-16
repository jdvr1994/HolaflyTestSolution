const AbstractController = require('../../domain/Commons/abstractController.js')
const ApplicationException = require('../../domain/Commons/exceptions/application.exception.js');

class PeopleController extends AbstractController {
    people_rep;
    people_ext_rep;
    planet_rep;
    planet_ext_rep;

    constructor(_people_rep, _people_ext_rep, _planet_rep, _planet_ext_rep){
        super(_people_rep,_people_ext_rep)
        this.people_rep = _people_rep;
        this.people_ext_rep = _people_ext_rep;
        this.planet_rep = _planet_rep;
        this.planet_ext_rep = _planet_ext_rep;
    }

    async getEntity(id, lang) {
        if(!this.validateId(id)) throw new ApplicationException("invalid peopleId");

        let people = await this.people_rep.get(id)
        if(!people){
            people = await this.people_ext_rep.get(id, lang)
            //TODO: make sure validation
            const planetId = people.getHomeworldId().split('planets/')[1]
            let planet = await this.planet_rep.get(planetId, lang)
            if(!planet){
                planet = await this.planet_ext_rep.get(planetId, lang)
                planet = await this.planet_rep.create(planet)
            }
            people.homeworldName = planet.getName()
            people = await this.createEntity(people)
        }
        return people
    }

    async createEntity(people) {
        return await this.people_rep.create(people)
    }

    async getAllEntities() {
        throw new Error("To be implemented on PeopleController");
    }

    async updateEntity() {
        throw new Error("To be implemented on PeopleController");
    }

    async deleteEntity() {
        throw new Error("To be implemented on PeopleController");
    }

    validateId(id) {
        return id>0;
    }
}

module.exports = PeopleController