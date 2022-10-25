class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    }
    addShip(Ship) {
        this.ships.push(Ship);
    }
    removeShip(Ship) {
        this.ships.pop(Ship);
    }
};

module.exports = Port;