const WookieePeople = require('./wookieePeople');
const CommonPeople = require('./commonPeople');

const peopleFactory = async (_peopleData, lang) => {
  let people = null;
  if (lang === 'wookiee') {
    people = new WookieePeople(_peopleData);
  } else {
    people = new CommonPeople(_peopleData);
  }
  await people.init();
  return people;
};

module.exports = { peopleFactory };
