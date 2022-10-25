const Ship = require('../source/cruiseShips');
const Port = require('../source/port');
const Itinerary = require('../source/itinerary');

describe('The constructor for Ship', () => {
it('returns an object instance', () => {
        expect(new Ship(new Itinerary(new Port, new Port))).toBeInstanceOf(Object)
   
});  
    describe('Declare ports, itinerary and ship', () => {
        let MLG;
        let BCN;
        let NPL;
        let medLove;
        let laMalagueta;
        beforeEach(() => {
            MLG = new Port('Malaga');
            BCN = new Port('Barcelona');
            NPL = new Port('Napoli');
            medLove = new Itinerary([MLG, BCN, NPL]);;
            laMalagueta = new Ship(medLove);
        });
    it('has a starting port', () => {
        
            expect(laMalagueta.startingPort).toEqual(medLove.ports[0]);
        })
    it('is empty at the beginning of the journey', () => {

            expect(laMalagueta.passengers).toEqual(0);
        })
    it('checks the ship is docked/sailing', () =>{
        
        expect(laMalagueta.sailing).toBe(false);
        
        laMalagueta.setSail();
        
        expect(laMalagueta.sailing).toBe(true);

        laMalagueta.dock();

        expect(laMalagueta.sailing).toBe(false);
        })
    it('checks in passengers AND ONLY when docked', () =>{

        expect(laMalagueta.passengers).toEqual(0);
        
        laMalagueta.aboard(300);

        expect(laMalagueta.passengers).toEqual(300);

        laMalagueta.setSail();

        expect(() => laMalagueta.aboard(5)).toThrow('Passengers cannot aboard while sailing, dock() first!');
        })
    it('can set sail', () => {
        
        laMalagueta.setSail();
      
        expect(laMalagueta.currentPort).toBeFalsy();
        expect(laMalagueta.previousPort).toBe(medLove.ports[0]);
        });
    it('checks that you cannot sail past your last destination in itinerary', () => {

        laMalagueta.setSail();
        laMalagueta.dock();
        laMalagueta.setSail()
        laMalagueta.dock();

        expect(() => laMalagueta.setSail()).toThrowError('End of itinerary reached');
        })
    it('checks that you can dock in your destination port', () => {
        
        laMalagueta.setSail();
        laMalagueta.dock();
        
        expect(laMalagueta.currentPort).toBe(BCN);
        expect(laMalagueta.startingPort).toBe(MLG);
        })
    it('checks a ship gets added to port on instantiation', () => {

        laMalagueta.setSail();
        laMalagueta.dock();

        expect(laMalagueta.currentPort.ships).toContain(laMalagueta);
        })
    it('checks a ship can leave and dock on a different port', () => {

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
});

