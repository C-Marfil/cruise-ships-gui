const portName = document.querySelector('#portName');
const addPort = document.querySelector('#newPort');
const newIti = document.querySelector('#newIti');
const error = document.querySelector('#nope');
const form = document.querySelector('#form');
const itinerary = new Itinerary([]);

form.addEventListener("submit", (event) => {
    const newPort = new Port(portName.value);
    console.log(newPort);
    itinerary.ports.push(newPort);
    console.log(itinerary);

    event.preventDefault();
});

newIti.addEventListener('click', (event) => {
    if (itinerary.ports < 2) {
        setTimeout(() =>{error.innerHTML('Please add more ports!');
    }, 3000);
    } else {
        const ship = new Ship(itinerary);
        const controller = new Controller(ship);
        controller.renderPorts(itinerary.ports);
        controller.renderShip();
        controller.headsUp();
    }
});

