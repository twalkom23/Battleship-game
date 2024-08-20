import _ from 'lodash';
import { Ships, Gameboard} from './ships';
import './style.css';
import { directionalButtons, shipSelectionButtons, disableShipButtons, playerMove} from './boardSquares';
import { newGameSetUp, pressStartGameButton, newGameButton} from './dom';

const playerHit = document.querySelector('.movesBoard');
export const state = {
    playerTurn: true, 
};


//Creating all of the ships
export const playerAircraftCarrier = new Ships(5);
export const playerBattleship = new Ships(4);
export const playerSubmarine = new Ships(3);
export const playerDestroyer = new Ships(3);
export const playerPatrol = new Ships(2);

export const compAircraftCarrier = new Ships(5);
export const compBattleship = new Ships(4);
export const compSubmarine = new Ships(3);
export const compDestroyer = new Ships(3);
export const compPatrol = new Ships(2);

//creating the gameboards
export const playerGameBoard = new Gameboard;
export const compGameBoard = new Gameboard;


newGameSetUp(); //refreshes the board when a new game is started


function playGame() {
    newGameButton(); //refreshes the game when the new game button is clicked
    compGameBoard.randomiseCompShips(); //randomly places the computers ships in position
    directionalButtons(); //Waits for directional button clicks
    shipSelectionButtons(); //Waits for ship selection clicks
    disableShipButtons(); //Disables the ship button once ship has been placed
    pressStartGameButton(); //Runs the functions that need to happen once ships have been placed and game is ready to start
    playerMove(); //comp move also runs out of this. This all runs as soon as a player picks a square
     }


playGame();








