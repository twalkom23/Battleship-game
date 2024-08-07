import _ from 'lodash';
import { Ships, Gameboard} from './ships';
import './style.css';
import { playerBoardSquares, directionalButtons, directionPlacement, shipSelection, shipSelectionButtons } from './boardSquares';
import { newGameSetUp, startButton } from './dom';


let praticeButton = document.querySelector('.newGameButton');

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
const playerGameBoard = new Gameboard;
const compGameBoard = new Gameboard;
newGameSetUp(); //refreshes the board when a new game is started


function playGame() {
    directionalButtons();
    shipSelectionButtons();
    praticeButton.addEventListener('click', () => {
        console.log(shipSelection);
    })
}

playGame();








