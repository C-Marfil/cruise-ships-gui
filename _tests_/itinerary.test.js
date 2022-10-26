const Itinerary = require('../source/itinerary');
const Ship = require('../source/cruiseShips');
const Port = require('../source/port');

describe('Itineraries class', () => {
    it('checks itineraries are instances of Objects', () => {
        expect(new Itinerary('Romantic Mediterranean')).toBeInstanceOf(Object);

        })
    it('checks itineraries have a port property', () => {
        const MLG = new Port('Malaga');
        const LSB = new Port('Lisbon');

        const med = new Itinerary([MLG, LSB]);

        expect(med.ports).toEqual([MLG, LSB]);
    });
});
