
(function exportItinerary() {
class Itinerary {
    constructor(Ports) {
        this.ports = Ports;
    }
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
    } else {
     window.Itinerary = Itinerary;
    }
}());