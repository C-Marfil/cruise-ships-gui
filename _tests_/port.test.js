const Port = require('../source/port');
const Ship = require('../source/cruiseShips');

describe('The constructor for Port', () => {
    it('makes sure Port class are instantiated objects', () => {
        expect(new Port('Lisbon')).toBeInstanceOf(Object);
    })
    it('makes sure Ports have names', () => {
        const lisbon = new Port('Lisbon');

        expect(lisbon.name).toBe('Lisbon');
    })
})