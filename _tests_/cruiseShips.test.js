const Ship = require('../source/cruiseShips');
const Port = require('../source/port');
const Itinerary = require('../source/itinerary');



describe('The constructor for Ship', () => {
    it('returns an object instance', () => {
        expect(new Ship(new Itinerary(new Port, new Port))).toBeInstanceOf(Object)
    })
    it('has a starting port', () => {
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const medLove = new Itinerary([MLG, BCN]);
        const laMalagueta = new Ship(medLove);

        expect(laMalagueta.startingPort).toEqual(medLove.ports[0]);
    })
    it('is empty at the beginning of the journey', () => {
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const medLove = new Itinerary([MLG, BCN]);
        const laMalagueta = new Ship(medLove);

        expect(laMalagueta.passengers).toEqual(0);
    })
});
describe('The sailing and aboard methods', () => {
    it('checks the ship is docked/sailing', () =>{
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const medLove = new Itinerary([MLG, BCN]);
        const laMalagueta = new Ship(medLove);
        
        expect(laMalagueta.sailing).toBe(false);
        
        laMalagueta.setSail();
        
        expect(laMalagueta.sailing).toBe(true);

        laMalagueta.dock();

        expect(laMalagueta.sailing).toBe(false);
    })
    it('checks in passengers AND ONLY when docked', () =>{
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const NPL = new Port('Naples');
        const medLove = new Itinerary([MLG, BCN, NPL]);
        const laMalagueta = new Ship(medLove);

        expect(laMalagueta.passengers).toEqual(0);
        
        laMalagueta.aboard(300);

        expect(laMalagueta.passengers).toEqual(300);

        laMalagueta.setSail();

        expect(() => laMalagueta.aboard(5)).toThrow('Passengers cannot aboard while sailing, dock() first!');
    })
    it('can set sail', () => {
        const port = new Port('Dover')
        const port2 = new Port('Lisbon');
        const dover = new Itinerary([port, port2]);
        const ship = new Ship(dover);
        
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover.ports[0]);
      });
    it('checks that you cannot sail past your last destination in itinerary', () => {
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const NPL = new Port('Napoles');
        const medLove = new Itinerary([MLG, BCN]);
        const laMalagueta = new Ship(medLove);

        laMalagueta.setSail();
        laMalagueta.dock();

        expect(() => laMalagueta.setSail()).toThrowError('End of itinerary reached');
    })
    it('checks that you can dock in your destination port', () => {
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const NPL = new Port('Napoles');
        const medLove = new Itinerary([MLG, BCN, NPL]);
        const laMalagueta = new Ship(medLove);
        
        laMalagueta.setSail();
        laMalagueta.dock();
        
        expect(laMalagueta.currentPort).toBe(BCN);
        expect(laMalagueta.startingPort).toBe(MLG);
    })
});
describe('The ships enter and leave ports', () => {
    it('checks a ship gets added to port on instantiation', () => {
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const medLove = new Itinerary([MLG, BCN]);
        const laMalagueta = new Ship(medLove);

        laMalagueta.setSail();
        laMalagueta.dock();

        expect(laMalagueta.currentPort.ships).toContain(laMalagueta);
    })
    it('checks a ship can leave and dock on a different port', () => {
        const MLG = new Port('Malaga');
        const BCN = new Port('Barcelona');
        const NPL = new Port('Napoli');
        const medLove = new Itinerary([MLG, BCN, NPL]);
        const laMalagueta = new Ship(medLove);

        laMalagueta.setSail();
        laMalagueta.dock();

        expect(laMalagueta.currentPort.ships).toContain(laMalagueta);
        expect(BCN.ships).toContain(laMalagueta);
        
        laMalagueta.setSail();
        laMalagueta.dock();

        expect(NPL.ships).toContain(laMalagueta);
        expect(BCN.ships).not.toContain(laMalagueta);
    })
})
