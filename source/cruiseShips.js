const EMPTY_BOAT = 0;

class Ship {
    constructor(Port) {
        this.passengers = EMPTY_BOAT;
        this.startingPort = Port.name;
        this.currentPort = Port.name;
        this.sailing = false;
        this.itinerary = [Port];
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
    addItinerary(Port) {
        this.itinerary.push(Port);
    }
    cancelItinerary(Port) {
        this.itinerary.pop(Port);
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