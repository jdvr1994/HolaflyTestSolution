class Planet {
    constructor(_planetData){
        this.id  = parseInt(_planetData.id)
        this.name = _planetData.name
        this.gravity = _planetData.gravity
    }

    async init(){
        throw new Error('To be implemented');
    }

    getName() {
        return this.name;
    }

    getGravity() {
        return this.gravity;
    }
}

module.exports = Planet