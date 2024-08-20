export let directionPlacement = null;
export let shipSelection = null;
import { compGameBoard, playerGameBoard, state, playerAircraftCarrier, playerBattleship, playerSubmarine, playerDestroyer, playerPatrol, compAircraftCarrier, compBattleship, compSubmarine, compDestroyer, compPatrol} from ".";
import { endGame } from "./dom";



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
                startGameButton.classList.toggle('highlightShipButtons', true);
            }
            

        }
        })
       
}

export function playerMove () { //all of the players moves will be run from this function
    const compBoard = document.querySelector('.movesBoard');
    compBoard.addEventListener('click', (event) => {
        let board = event.target.classList.value;
        let boardTarget = board.slice(0, -1);
        compGameBoard.checkForCompHit(boardTarget);
        if (checkForEndGame() === true) {
            return;
        }
        state.playerTurn = false;
        setTimeout(() => {
            compMove();
        }, 300);
    })
}

function compMove() { //This function will be where all the functions for the computers move will be run out of
    
    let attackPoint = compRandomAttack();
    playerGameBoard.checkForPlayerHit(attackPoint);
    checkForEndGame();
    state.playerTurn = true;

}

function compRandomAttack() { //Picks a square on the board at random and checks to see if it has already been hit
    const arrayOfSquares = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10',
    'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 
    'e7', 'e8', 'e9', 'e10', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'h1', 'h2',
    'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10'];
    const hit = false;
    while (hit === false) {
    const randomIndex = Math.floor(Math.random() * arrayOfSquares.length);
    const attackPoint = arrayOfSquares[randomIndex];
    if (playerGameBoard.coordinates[attackPoint] === false) { //checks to make sure it has not been hit yet
        playerGameBoard.coordinates[attackPoint] = true;
        return attackPoint;
    }
}
}
function checkForEndGame () {
    if(playerAircraftCarrier.sunk === true && playerBattleship.sunk === true && playerSubmarine.sunk === true && playerDestroyer.sunk === true && playerPatrol.sunk === true) {
        endGame('compWin');
    } else if (compAircraftCarrier.sunk === true && compBattleship.sunk === true && compSubmarine.sunk === true && compDestroyer.sunk === true && compPatrol.sunk === true) {
        endGame('playerWin');
        return true;
    }
}


