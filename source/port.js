(function exportPort() {
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
    
    if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
    } else {
     window.Port = Port;
    }
}());