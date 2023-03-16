const AbstractPeople = require('./abstractPeople')
const WookieTranslator = require('../../../commons/wookieeTranslator')
const {swapi_base_url} = require('../../../commons/config')
//  Class to encapsulate the people model src/app/db/models/swPeopleModel.js
class WookieePeople extends AbstractPeople {
    constructor(_peopleData){
        super(_peopleData)

        this.id  = _peopleData.id
        this.name = WookieTranslator.getValueFromWookieeBody(_peopleData,"name")
        this.mass = _peopleData[WookieTranslator.to_wookie("mass")]
        this.height = _peopleData[WookieTranslator.to_wookie("height")]
        this.homeworldName = WookieTranslator.getValueFromWookieeBody(_peopleData,"homeworld_name")
        const splitted_homeworld_url = WookieTranslator.getValueFromWookieeBody(_peopleData,"homeworld")?.split(swapi_base_url)
        this.homeworldId = _peopleData[WookieTranslator.to_wookie("homeworld_id")]? _peopleData[WookieTranslator.to_wookie("homeworld_id")] : splitted_homeworld_url?.length > 1 ? splitted_homeworld_url[1].slice(0,-1) : null
    }   
}

module.exports = WookieePeople