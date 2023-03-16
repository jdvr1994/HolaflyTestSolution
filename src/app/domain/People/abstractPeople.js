const ApplicationException = require('../../domain/Commons/exceptions/application.exception.js');
class AbstractPeople {

    constructor(_peopleData) {
        if (this.constructor == AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    async init(){
        this.validatePeopleInit()
        this.formatPeople()
    }

    getId() {
       return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworldId() {
        return this.homeworldId;
    }

    getWeightOnPlanet(planetId){
        throw new Error('To be implemented');
    }

    validatePeopleInit() {
        if(!(this.id > 0)) throw new ApplicationException(`invalid peopleId: ${this.id}`)
        if(!this.name) throw new ApplicationException(`invalid people name: ${this.name}`)
        if(!(this.mass > 0)) throw new ApplicationException(`invalid people mass: ${this.mass}`)
        if(!(this.height > 0)) throw new ApplicationException(`invalid people height: ${this.height}`)
    }

    formatPeople() {
        this.id = parseInt(this.id)
        this.mass = parseInt(this.mass)
        this.height = parseInt(this.height)
    }
}

module.exports = AbstractPeople