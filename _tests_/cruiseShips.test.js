const Ship = require('../source/cruiseShips');

describe('The constructor', () => {
    it('returns an object instance', () => {
        expect(new Ship('Malaga')).toBeInstanceOf(Object)
    })
    it('has a starting port', () => {
        const malaga = new Ship('Malaga');
        expect(malaga.startingPort).toBe('Malaga');
    })
    it('is empty at the beginning of the journey', () => {
        const malaga = new Ship('Malaga');
        expect(malaga.passengers).toEqual(0);
    })
});
describe('The sailing and aboard methods', () =>{
    it('checks the ship is docked/sailing', () =>{
        const malaga = new Ship('Malaga');
        
        expect(malaga.sailing).toBe(false);
        
        malaga.setSail();
        
        expect(malaga.sailing).toBe(true);

        malaga.dock();

        expect(malaga.sailing).toBe(false);
    })
    it('checks in passengers AND ONLY when docked', () =>{
        const malaga = new Ship('Malaga');

        expect(malaga.passengers).toEqual(0);
        
        malaga.aboard(300);

        expect(malaga.passengers).toEqual(300);

        malaga.setSail();

        expect(() => malaga.aboard(5)).toThrow('Passengers cannot aboard while sailing, dock() first!');
    })
    it('checks current port goes false after setting sail', () => {
        const malaga = new Ship('Malaga');

        malaga.setSail();

        expect(malaga.currentPort).toBe(false);
    })
    it('checks that you can dock in your destination port', () => {
        const malaga = new Ship('Malaga');
        
        malaga.setSail();

        malaga.dock('Lisbon');
        
        expect(malaga.currentPort).toBe('Lisbon');
        expect(malaga.startingPort).toBe('Malaga');
    })
});