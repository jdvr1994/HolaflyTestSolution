const swapi_base_url = 'https://swapi.dev/api/'

const _isWookieeFormat = (req) => {
    if(req.query.format && req.query.format == 'wookiee'){
        return true;
    }
    return false;
}


const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest(swapi_base_url, 'GET', null, true);
        res.send(data)
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {
        const peopleId = req.params.id
        const lang = req.query.format
        try {
            let people = await app.controllers.peopleController.getEntity(peopleId,lang)
            res.send(people);
        } catch (error) {
            app.controllers.peopleController.handleException(error,res)
        }
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const planetId = req.params.id
        try {
            let planet = await app.controllers.planetController.getEntity(planetId,req.query.format)
            res.send(planet);
        } catch (error) {
            app.controllers.planetController.handleException(error,res)
        }
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        try {
            const data = await app.controllers.logController.getAllEntities();
            res.send(data);
        } catch (error) {
            app.controllers.logController.handleException(error,res)
        }
    });

}

module.exports = applySwapiEndpoints;