export function startButton () {
    const startButton = document.querySelector('.newGameButton');
    startButton.addEventListener('click', () => {
        console.log('Button Clicked');
    })
}
export function newGameSetUp() {
    console.log('hello');
    
    const instructionsContainer = document.querySelector('.instructionsContainer');
    
    const instructions = document.createElement('p');
    
    const airCraftCarrierPlaceButton = document.createElement('button');
    const battleShipPlaceButton = document.createElement('button');
    const submarinePlaceButton = document.createElement('button');
    const destroyerPlaceButton = document.createElement('button');
    const patrolPlaceButton = document.createElement('button');

    airCraftCarrierPlaceButton.classList.add('airCraftCarrierPlace');
    battleShipPlaceButton.classList.add('battleshipPlace');
    submarinePlaceButton.classList.add('submarinePlace');
    destroyerPlaceButton.classList.add('destroyerPlace');
    patrolPlaceButton.classList.add('patrolPlace');
    
    instructions.textContent = 'Place all ships by selecting a ship and a direction';
    airCraftCarrierPlaceButton.textContent = '5 - AirCraft Carrier';
    battleShipPlaceButton.textContent = '4 - BattleShip';
    submarinePlaceButton.textContent = '3 - Submarine';
    destroyerPlaceButton.textContent = '3 - Destroyer';
    patrolPlaceButton.textContent = '2 - Patrol';

    instructionsContainer.appendChild(instructions);
    instructionsContainer.appendChild(airCraftCarrierPlaceButton);
    instructionsContainer.appendChild(battleShipPlaceButton);
    instructionsContainer.appendChild(submarinePlaceButton);
    instructionsContainer.appendChild(destroyerPlaceButton);
    instructionsContainer.appendChild(patrolPlaceButton);
    
}