const { swapiBaseUrl } = require('../../commons/config');

/*
const _isWookieeFormat = (req) => {
  if (req.query.format && req.query.format == 'wookiee') {
    return true;
  }
  return false;
};
*/

const applySwapiEndpoints = (server, app) => {
  server.get('/hfswapi/test', async (req, res) => {
    const data = await app.swapiFunctions.genericRequest(swapiBaseUrl, 'GET', null, false);
    res.send(data);
  });

  server.get('/hfswapi/getPeople/:id', async (req, res) => {
    const peopleId = req.params.id;
    const lang = req.query.format;
    try {
      const people = await app.controllers.peopleController.getEntity(peopleId, lang);
      res.send(people);
    } catch (error) {
      app.controllers.peopleController.handleException(error, res);
    }
  });

  server.get('/hfswapi/getPlanet/:id', async (req, res) => {
    const planetId = req.params.id;
    try {
      const planet = await app.controllers.planetController.getEntity(planetId, req.query.format);
      res.send(planet);
    } catch (error) {
      app.controllers.planetController.handleException(error, res);
    }
  });

  server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
    const lang = req.query.format;
    const randomPeopleId = Math.floor(Math.random() * 82) + 1;
    const randomPlanetId = Math.floor(Math.random() * 60) + 1;
    const peoplePromise = app.controllers.peopleController.getEntity(randomPeopleId, lang);
    const planetPromise = app.controllers.planetController.getEntity(randomPlanetId, lang);
    Promise.all([peoplePromise, planetPromise]).then(([people, planet]) => {
      people.validateAllowToWeighOnPlanet(planet.id);
      res.send({
        people,
        planet,
        weight: app.swapiFunctions.getWeightOnPlanet(people.getMass(), planet.getGravity()),
      });
    }).catch((e) => {
      app.controllers.planetController.handleException(e, res);
    });
  });

  server.get('/hfswapi/getLogs', async (req, res) => {
    try {
      const data = await app.controllers.logController.getAllEntities();
      res.send(data);
    } catch (error) {
      app.controllers.logController.handleException(error, res);
    }
  });
};

module.exports = applySwapiEndpoints;
