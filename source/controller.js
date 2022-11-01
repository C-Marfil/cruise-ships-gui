(function exportController() {
    function Controller (ship) {
        this.ship = ship;
        this.initialiseSea();

        document.querySelector('#sailbutton').addEventListener('click', () => {
            this.setSail();
    });
};

Controller.prototype = {
    initialiseSea() {
        const backgrounds = [
            'images/water0.png',
            'images/water1.png',
        ];

        let backgroundIndex = 0;

        window.setInterval(() => {
            console.log('Hello');
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;
        }, 1000);
    },
    renderPorts(ports) {
        const portsElement = document.querySelector('#ports');
        portsElement.style.width = '0px';

        ports.forEach((port, index) => {
            const newPortElement = document.createElement('div');
            newPortElement.className = 'port';

            newPortElement.dataset.portName = port.name;
            newPortElement.dataset.portIndex = index;

            portsElement.appendChild(newPortElement);
        
            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 256}px`;
        });
    },
    setSail() {
        const ship = this.ship;
        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortElement = document.querySelector(`[data-port-index='${currentPortIndex + 1}']`);
        
        if (!nextPortElement) {
            return this.renderMessage(`This is the end, hope you had a great journey`);
        }

        this.renderMessage(`Now departing ${ship.currentPort.name}`);

        const shipElement = document.querySelector('#ship');
        const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                ship.setSail();
                ship.dock();
                this.renderMessage(`Now arrived at ${ship.currentPort.name}`);

                clearInterval(sailInterval);
            }
        shipElement.style.left = `${shipLeft + 1}px`;
        }, 20);
    },
    renderShip() {
        const ship = this.ship;
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
        const shipElement = document.querySelector('#ship');
    
        shipElement.style.top = `${portElement.offsetTop + 23}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    },
    renderMessage(message) {
        const newMessageElement = document.createElement('div');
        const divMessage = document.querySelector('#divMessage');
        newMessageElement.id = 'message';
        newMessageElement.innerHTML = message;

        divMessage.appendChild(newMessageElement);
        setTimeout(() => {
            divMessage.removeChild(newMessageElement);
        }, 3000);
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  };
}()); // End of export