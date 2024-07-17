import _ from 'lodash';
import { Ships } from './ships';
import { Gameboard } from './gameboard';

//Creating all of the ships
const aircraftCarrier = new Ships(5);
const battleship = new Ships(4);
const submarine = new Ships(3);
const destroyer = new Ships(3);
const patrol = new Ships(2);

//creating the gameboards
const playerGameBoard = new Gameboard;
const compGameBoard = new Gameboard;








