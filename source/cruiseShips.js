const EMPTY_BOAT = 0;

class Ship {
    constructor(startingPort) {
        this.passengers = EMPTY_BOAT;
        this.startingPort = startingPort;
        this.currentPort = startingPort;
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
    dock(destination) {
        this.sailing = false;
        this.currentPort = destination;
    }
};

module.exports = Ship;