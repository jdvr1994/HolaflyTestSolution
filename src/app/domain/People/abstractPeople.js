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

    validateAllowToWeighOnPlanet(planetId){
        if(`planets/${planetId}` === this.homeworldId) throw new ApplicationException(`It is not posible calculate the weight in the character's homeworld: ${planetId}`)
    }

    validatePeopleInit() {
        if(!(this.id > 0)) throw new ApplicationException(`Invalid peopleId: ${this.id}`)
        if(!this.name) throw new ApplicationException(`Invalid people name (${this.name}) for User: ${this.id}`)
        if(!(this.mass > 0)) throw new ApplicationException(`Invalid people mass (${this.mass}) for User: ${this.id}`)
        if(!(this.height > 0)) throw new ApplicationException(`Invalid height mass (${this.height}) for User: ${this.id}`)
    }

    formatPeople() {
        this.id = parseInt(this.id)
        this.mass = parseInt(this.mass)
        this.height = parseInt(this.height)
    }


}

module.exports = AbstractPeople