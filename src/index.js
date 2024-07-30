import _ from 'lodash';
import { Ships, Gameboard } from './ships';
import './style.css';


function gamePlay() {
//Creating all of the ships
const aircraftCarrier = new Ships(5);
const battleship = new Ships(4);
const submarine = new Ships(3);
const destroyer = new Ships(3);
const patrol = new Ships(2);

//creating the gameboards
const playerGameBoard = new Gameboard;
const compGameBoard = new Gameboard;

//placeShips
playerGameBoard.placeShips('a1', 'aircraftCarrier', 'vertical');
playerGameBoard.placeShips('g2', 'battleship', 'vertical');
playerGameBoard.placeShips('j1', 'submarine', 'horizontal');
playerGameBoard.placeShips('h3', 'destroyer', 'horizontal');
playerGameBoard.placeShips('e2', 'patrol', 'horizontal')

aircraftCarrier.hit();
console.log(aircraftCarrier);
}








