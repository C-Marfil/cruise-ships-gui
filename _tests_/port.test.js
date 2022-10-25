const Port = require('../source/port');
const Ship = require('../source/cruiseShips');
const Itinerary = require('../source/itinerary');

describe('The constructor for Port', () => {
    it('makes sure Port class are instantiated objects', () => {
        expect(new Port('Lisbon')).toBeInstanceOf(Object);
    })
    it('makes sure Ports have names', () => {
        const lisbon = new Port('Lisbon');

        expect(lisbon.name).toBe('Lisbon');
    })
})
describe('The add ships methods', () => {
    it('checks a ship gets added to an array of ships', () =>{
        const NPL = new Port('Napoli');
        const italy = new Itinerary([NPL]);
        const laMalagueta = new Ship(italy);

        expect(NPL.ships).toEqual([]);
        NPL.addShip(laMalagueta);
        expect(NPL.ships.length).toEqual(1);
    })
    it('checks a ship gets removed from an array of ships', () =>{
        const NPL = new Port('Napoli');
        const italy = new Itinerary([NPL]);
        const laMalagueta = new Ship(italy);

        expect(NPL.ships).toEqual([]);
        NPL.addShip(laMalagueta);
        expect(NPL.ships.length).toEqual(1);
        NPL.removeShip(laMalagueta);
        expect(NPL.ships).toEqual([]);
    })
})