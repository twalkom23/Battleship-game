export let directionPlacement = null;
export let shipSelection = null;

import { playerGameBoard} from ".";

let count = 0;
let startGameButton = document.querySelector('.startGameButton');

//assigning event listeners to all of the squares
//playerBoard 


export function directionalButtons () { //sets the direction variable to horizontal or vertical depending on the button clicked
    const horizontalButton = document.querySelector('.horizontalButton');
    const verticalButton = document.querySelector('.verticalButton');

    horizontalButton.addEventListener('click', () => {
        directionPlacement = 'horizontal';
        horizontalButton.disabled = true;
        verticalButton.disabled = false;
        
    })
    verticalButton.addEventListener('click', () => {
        directionPlacement = 'vertical';  
        verticalButton.disabled = true;
        horizontalButton.disabled = false;
    })
}

export function shipSelectionButtons () { //assigns the variable based on the button clicked
    const airCraftCarrierSelection = document.querySelector('.airCraftCarrierPlace');
    const battleshipSelection = document.querySelector('.battleshipPlace');
    const submarineSelection = document.querySelector('.submarinePlace');
    const destroyerSelection = document.querySelector('.destroyerPlace');
    const patrolSelection = document.querySelector('.patrolPlace');

    airCraftCarrierSelection.addEventListener('click', () => {
        airCraftCarrierSelection.classList.toggle('highlightShipButtons', true); //These toggle the colours of the current ship being selected
        battleshipSelection.classList.toggle('highlightShipButtons', false);
        submarineSelection.classList.toggle('highlightShipButtons', false);
        destroyerSelection.classList.toggle('highlightShipButtons', false);
        patrolSelection.classList.toggle('highlightShipButtons', false);
        shipSelection = 'aircraftCarrier';
    });
    battleshipSelection.addEventListener('click', () => {
        airCraftCarrierSelection.classList.toggle('highlightShipButtons', false); //These toggle the colours of the current ship being selected
        battleshipSelection.classList.toggle('highlightShipButtons', true);
        submarineSelection.classList.toggle('highlightShipButtons', false);
        destroyerSelection.classList.toggle('highlightShipButtons', false);
        patrolSelection.classList.toggle('highlightShipButtons', false);
        shipSelection = 'battleship';
    });
    submarineSelection.addEventListener('click', () => {
        airCraftCarrierSelection.classList.toggle('highlightShipButtons', false); //These toggle the colours of the current ship being selected
        battleshipSelection.classList.toggle('highlightShipButtons', false);
        submarineSelection.classList.toggle('highlightShipButtons', true);
        destroyerSelection.classList.toggle('highlightShipButtons', false);
        patrolSelection.classList.toggle('highlightShipButtons', false);
        shipSelection = 'submarine';
    });
    destroyerSelection.addEventListener('click', () => {
        airCraftCarrierSelection.classList.toggle('highlightShipButtons', false); //These toggle the colours of the current ship being selected
        battleshipSelection.classList.toggle('highlightShipButtons', false);
        submarineSelection.classList.toggle('highlightShipButtons', false);
        destroyerSelection.classList.toggle('highlightShipButtons', true);
        patrolSelection.classList.toggle('highlightShipButtons', false);
        shipSelection = 'destroyer';
    });
    patrolSelection.addEventListener('click', () => {
        airCraftCarrierSelection.classList.toggle('highlightShipButtons', false); //These toggle the colours of the current ship being selected
        battleshipSelection.classList.toggle('highlightShipButtons', false);
        submarineSelection.classList.toggle('highlightShipButtons', false);
        destroyerSelection.classList.toggle('highlightShipButtons', false);
        patrolSelection.classList.toggle('highlightShipButtons', true);
        shipSelection = 'patrol';
    })
}


export function disableShipButtons() {
    const playerBoardContainer = document.querySelector('.playerBoard');
    playerBoardContainer.addEventListener('click', (event) => { //This runs to place a ship, it will check a couple of things first
        if (directionPlacement === null || shipSelection === null) {
            return
        }
        let square = event.target.classList.value;
        let practice = playerGameBoard.placeShips(square, shipSelection, directionPlacement, 'player');
        if (practice === undefined) { //this will disable the button if the location selection is successful
            switch (shipSelection) {
                case 'aircraftCarrier':
                    let airCraftCarrierPlace = document.querySelector('.airCraftCarrierPlace');
                    airCraftCarrierPlace.disabled = true;
                    airCraftCarrierPlace.classList.toggle('highlightShipButtons', false);
                    count++;
                    break;
                case 'battleship':
                    let battleshipPlace = document.querySelector('.battleshipPlace');
                    battleshipPlace.disabled = true;
                    battleshipPlace.classList.toggle('highlightShipButtons', false);
                    count++;
                    break;
                case 'submarine':
                    let submarinePlace = document.querySelector('.submarinePlace');
                    submarinePlace.disabled = true;
                    submarinePlace.classList.toggle('highlightShipButtons', false);
                    count++
                    break;
                case 'destroyer':
                    let destroyerPlace = document.querySelector('.destroyerPlace');
                    destroyerPlace.disabled = true;
                    destroyerPlace.classList.toggle('highlightShipButtons', false);
                    count++
                    break;
                case 'patrol':
                    let patrolPlace = document.querySelector('.patrolPlace');
                    patrolPlace.disabled = true;
                    patrolPlace.classList.toggle('highlightShipButtons', false);
                    count++;
                    break;
            }
            if (count === 5) {
                startGameButton.disabled = false;
            }
            

        }
        })
       
}
