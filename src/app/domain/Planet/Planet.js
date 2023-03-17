class Planet {
  constructor(_planetData) {
    this.id = parseInt(_planetData.id, 10);
    this.name = _planetData.name;
    this.gravity = _planetData.gravity;
  }

  getName() {
    return this.name;
  }

  getGravity() {
    return this.gravity;
  }
}

module.exports = Planet;
