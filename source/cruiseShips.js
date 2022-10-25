const EMPTY_BOAT = 0;
let STARTING_PORT = 0;
let PORTN = 0;
class Ship {
    constructor(Itinerary) {
        this.itinerary = Itinerary;
        this.passengers = EMPTY_BOAT;
        this.startingPort = Itinerary.ports[STARTING_PORT];
        this.previousPort = Itinerary.ports[PORTN];
        this.currentPort = Itinerary.ports[PORTN];
        this.sailing = false;
    }
    aboard(incoming) {
        if(this.sailing){
            throw('Passengers cannot aboard while sailing, dock() first!')
        }
        this.passengers += incoming;
    }
    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error('End of itinerary reached');
        }

        this.sailing = true;
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }
    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.sailing = false;
        return `Passengers, welcome to ${this.currentPort}`;
    }
};


module.exports = Ship;