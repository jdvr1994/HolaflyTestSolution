const AbstractPeople = require('./abstractPeople')
const {swapi_base_url} = require('../../../commons/config')
//  Class to encapsulate the people model src/app/db/models/swPeopleModel.js
class CommonPeople extends AbstractPeople {
    constructor(_peopleData){
        super(_peopleData)
        this.id  = _peopleData.id
        this.name = _peopleData.name
        this.mass = _peopleData.mass
        this.height = _peopleData.height
        this.homeworldName = _peopleData.homeworld_name
        const splitted_homeworld_url = _peopleData.homeworld?.split(swapi_base_url)
        this.homeworldId = _peopleData.homeworld_id? _peopleData.homeworld_id : splitted_homeworld_url?.length > 1 ? splitted_homeworld_url[1].slice(0,-1) : null
    }
}

module.exports = CommonPeople