(function exportController() {
function Controller () {
    this.initialiseSea();
};

Controller.prototype.initialiseSea = function initialiseSea() {
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
    
Controller.prototype.renderPorts = function renderPorts(ports) {
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
    })
};

}; // End of Constructor
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  };
}()); // End of export