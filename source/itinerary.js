
(function exportItinerary() {
class Itinerary {
    constructor() {
        this.ports = [];
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
    } else {
     window.Itinerary = Itinerary;
    }
}());