import _ from 'lodash';
import { Ships, Gameboard} from './ships';
import './style.css';
import { directionalButtons, shipSelectionButtons, disableShipButtons} from './boardSquares';
import { newGameSetUp, pressStartGameButton, htmlSetUpForGameIsReady} from './dom';

let practice = document.querySelector('.newGameButton');
let gameReady = false;



//Creating all of the ships
const playerAircraftCarrier = new Ships(5);
const playerBattleship = new Ships(4);
const playerSubmarine = new Ships(3);
const playerDestroyer = new Ships(3);
const playerPatrol = new Ships(2);

const compAircraftCarrier = new Ships(5);
const compBattleship = new Ships(4);
const compSubmarine = new Ships(3);
const compDestroyer = new Ships(3);
const compPatrol = new Ships(2);

//creating the gameboards
export const playerGameBoard = new Gameboard;
export const compGameBoard = new Gameboard;


newGameSetUp(); //refreshes the board when a new game is started


function playGame() {
    compGameBoard.randomiseCompShips(); //randomly places the computers ships in position
    directionalButtons();
    shipSelectionButtons();
    disableShipButtons();
    pressStartGameButton();

    
    
       
     }


playGame();








