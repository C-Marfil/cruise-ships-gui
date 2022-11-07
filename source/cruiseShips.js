(function exportShip() {

class Ship {
    constructor(Itinerary) {
        this.itinerary = Itinerary;
        this.passengers = 0;
        this.startingPort = Itinerary.ports[0];
        this.previousPort = Itinerary.ports[0];
        this.currentPort = Itinerary.ports[0];
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
        this.currentPort.removeShip(this);
        this.sailing = true;
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }
    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.sailing = false;
        this.currentPort.addShip(this);

        return `Passengers, welcome to ${this.currentPort}`;
    }
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
    } else {
     window.Ship = Ship;
    }
}());
