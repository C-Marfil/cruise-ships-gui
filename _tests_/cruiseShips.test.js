const {
    Port, 
    Ship }  = require('../source/cruiseShips');

describe('The constructor for Ship', () => {
    it('returns an object instance', () => {
        expect(new Ship(Port)).toBeInstanceOf(Object)
    })
    it('has a starting port', () => {
        const MLG = new Port('Malaga')
        const malaga = new Ship(MLG);
        
        expect(malaga.startingPort).toBe(MLG.name);
    })
    it('is empty at the beginning of the journey', () => {
        const MLG = new Port('Malaga')
        const malaga = new Ship(MLG);
        expect(malaga.passengers).toEqual(0);
    })
});
describe('The constructor for Port', () => {
    it('makes sure Port class are instantiated objects', () => {
        expect(new Port('Lisbon')).toBeInstanceOf(Object);
    })
    it('makes sure Ports have names', () => {
        const lisbon = new Port('Lisbon');

        expect(lisbon.name).toBe('Lisbon');
    })
})
describe('The sailing and aboard methods', () =>{
    it('checks the ship is docked/sailing', () =>{
        const MLG = new Port('Malaga');
        const LSB = new Port('Lisbon');
        const malaga = new Ship(MLG);
        
        expect(malaga.sailing).toBe(false);
        
        malaga.setSail();
        
        expect(malaga.sailing).toBe(true);

        malaga.dock(LSB);

        expect(malaga.sailing).toBe(false);
    })
    it('checks in passengers AND ONLY when docked', () =>{
        const MLG = new Port('Malaga')
        const malaga = new Ship(MLG);

        expect(malaga.passengers).toEqual(0);
        
        malaga.aboard(300);

        expect(malaga.passengers).toEqual(300);

        malaga.setSail();

        expect(() => malaga.aboard(5)).toThrow('Passengers cannot aboard while sailing, dock() first!');
    })
    it('checks current port goes false after setting sail', () => {
        const MLG = new Port('Malaga')
        const malaga = new Ship(MLG);

        malaga.setSail();

        expect(malaga.currentPort).toBe(false);
    })
    it('checks that you can dock in your destination port', () => {
        const MLG = new Port('Malaga')
        const LSB = new Port('Lisbon')
        const malaga = new Ship(MLG);
        
        malaga.setSail();
        malaga.dock(LSB);
        
        expect(malaga.currentPort).toBe(LSB.name);
        expect(malaga.startingPort).toBe(MLG.name);
    })
});
