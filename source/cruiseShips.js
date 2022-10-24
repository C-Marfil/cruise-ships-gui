const EMPTY_BOAT = 0;

class Ship {
    constructor(Port) {
        this.passengers = EMPTY_BOAT;
        this.startingPort = Port.name;
        this.currentPort = Port.name;
        this.sailing = false;
    }
    aboard(incoming) {
        if(this.sailing){
            throw('Passengers cannot aboard while sailing, dock() first!')
        }
        this.passengers += incoming;
    }
    setSail() {
        this.sailing = true;
        this.currentPort = false;
    }
    dock(Port) {
        this.sailing = false;
        this.currentPort = Port.name;
    }
};

class Port {
    constructor(name) {
        this.name = name;
    };
};
module.exports = { 
    Port, 
    Ship };