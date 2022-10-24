const Ship = require('../source/cruiseShips');


describe('The constructor', () => {
    it('returns an object instance', () => {
        expect(new Ship('Malaga')).toBeInstanceOf(Object)
    });
})