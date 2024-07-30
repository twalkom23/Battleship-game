//creating the ship class and then creating the actual ships

export class Ships{
    constructor(length) {
        this.hits = 0;
        this.sunk = false;
        this.length = length;
    }

    hit(){
        this.hits++;
        if(this.hits === this.length) {
            this.isSunk();
        }
    }

    isSunk(){
        this.sunk = true;
    }
}


export class Gameboard {
    constructor() {
        this.coordinates = {
            a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false, a10: false,
            b1: false, b2: false, b3: false, b4: false, b5: false, b6: false, b7: false, b8: false, b9: false, b10: false,
            c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false, c9: false, c10: false,
            d1: false, d2: false, d3: false, d4: false, d5: false, d6: false, d7: false, d8: false, d9: false, d10: false,
            e1: false, e2: false, e3: false, e4: false, e5: false, e6: false, e7: false, e8: false, e9: false, e10: false,
            f1: false, f2: false, f3: false, f4: false, f5: false, f6: false, f7: false, f8: false, f9: false, f10: false,
            g1: false, g2: false, g3: false, g4: false, g5: false, g6: false, g7: false, g8: false, g9: false, g10: false,
            h1: false, h2: false, h3: false, h4: false, h5: false, h6: false, h7: false, h8: false, h9: false, h10: false,
            i1: false, i2: false, i3: false, i4: false, i5: false, i6: false, i7: false, i8: false, i9: false, i10: false,
            j1: false, j2: false, j3: false, j4: false, j5: false, j6: false, j7: false, j8: false, j9: false, j10: false
        }
        this.shipPlacement = {
            a1: null, a2: null, a3: null, a4: null, a5: null, a6: null, a7: null, a8: null, a9: null, a10: null,
            b1: null, b2: null, b3: null, b4: null, b5: null, b6: null, b7: null, b8: null, b9: null, b10: null,
            c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null, c10: null,
            d1: null, d2: null, d3: null, d4: null, d5: null, d6: null, d7: null, d8: null, d9: null, d10: null,
            e1: null, e2: null, e3: null, e4: null, e5: null, e6: null, e7: null, e8: null, e9: null, e10: null,
            f1: null, f2: null, f3: null, f4: null, f5: null, f6: null, f7: null, f8: null, f9: null, f10: null,
            g1: null, g2: null, g3: null, g4: null, g5: null, g6: null, g7: null, g8: null, g9: null, g10: null,
            h1: null, h2: null, h3: null, h4: null, h5: null, h6: null, h7: null, h8: null, h9: null, h10: null,
            i1: null, i2: null, i3: null, i4: null, i5: null, i6: null, i7: null, i8: null, i9: null, i10: null,
            j1: null, j2: null, j3: null, j4: null, j5: null, j6: null, j7: null, j8: null, j9: null, j10: null
        }
    }
    
    placeShips(headLocation, ship, direction) {
        //vertical placement
        if (direction === 'vertical') { // checks to see if the ship is placed vertically or horizontaly
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //Will be used to place the ship in all of the locations
        let startLetter = headLocation.charAt(0);
        let startIndex = letters.indexOf(startLetter);
        let numInLocation = headLocation.charAt(1);
        
        //Aircraft Carrier Vertical
        if (ship === 'aircraftCarrier') {
            let lengthOfAircraftCarrier = 5;
            let preDefinedLetters = ['g', 'h', 'i', 'j']; //Checking to see if the placement of the head would make the ship hang off the board.
            for(let i = startIndex; i < startIndex + lengthOfAircraftCarrier; i++) { //checks to make there is no overlap in ships
                let shipLocation = letters[i] + numInLocation;
                if (this.shipPlacement[shipLocation] !== null) {
                    return
                }
            }
            if (preDefinedLetters.includes(headLocation[0])) {
                return 'Cant fit here';
            } else {
                for (let i = startIndex; i < startIndex + lengthOfAircraftCarrier; i++) {
                    let shipLocation = letters[i] + numInLocation;
                    this.shipPlacement[shipLocation] = 'aircraftCarrier';
                }
            }

            //Battleship Vertical
        } else if (ship === 'battleship') { //vertical placement of battleship
            let lengthOfBattleShip = 4;
            let preDefinedLetters = ['h', 'i', 'j'];

            for(let i = startIndex; i < startIndex + lengthOfBattleShip; i++) { //checks for clashes of ships
                let shipLocation = letters[i] + numInLocation;
                if(this.shipPlacement[shipLocation] !== null) {
                    return
                }
            } 
            if(preDefinedLetters.includes(headLocation[0])) { //Places ship locations down
                return 'cant fit here';
            } else {
                for (let i = startIndex; i < startIndex + lengthOfBattleShip; i++) {
                    let shipLocation = letters[i] + numInLocation;
                    this.shipPlacement[shipLocation] = 'BattleShip';
                }
            }

            //Submarine Vertical
        } else if (ship === 'submarine' ) { //vertical placement of submarine
            let lengthOfSubmarine = 3;
            let preDefinedLetters = ['i', 'j'];

            for(let i = startIndex; i < startIndex + lengthOfSubmarine; i++) { //checks for clashes of ships
                let shipLocation = letters[i] + numInLocation;
                if(this.shipPlacement[shipLocation] !== null) {
                    return
                }

            if(preDefinedLetters.includes(headLocation[0])) {
                return 'cant fit here';
            } else {
                for (let i = startIndex; i < startIndex + lengthOfSubmarine; i++) {
                    let shipLocation = letters[i] + numInLocation;
                    this.shipPlacement[shipLocation] = 'Submarine';
                }
            }
        }
        } else if(ship === 'destroyer') { //vertical placement of destroyer
            let lengthOfDestroyer = 3;
            let preDefinedLetters = ['i', 'j'];

            for(let i = startIndex; i < startIndex + lengthOfDestroyer; i++) { //checks for clashes of ships
                let shipLocation = letters[i] + numInLocation;
                if(this.shipPlacement[shipLocation] !== null) {
                    return
                }
            }
            if(preDefinedLetters.includes(headLocation[0])) {
                return 'cant fit here';
            } else {
                for (let i = startIndex; i < startIndex + lengthOfDestroyer; i++) {
                    let shipLocation = letters[i] + numInLocation;
                    this.shipPlacement[shipLocation] = 'Destroyer';
                }
            }

        } else if (ship === 'patrol') { //vertical placement of patrol
            let lengthOfPatrol = 2;
            let preDefinedLetters = ['j'];
            for(let i = startIndex; i < startIndex + lengthOfPatrol; i++) { //checks for clashes of ships
                let shipLocation = letters[i] + numInLocation;
                if(this.shipPlacement[shipLocation] !== null) {
                    return
                }
            }
            if(preDefinedLetters.includes(headLocation[0])) {
                return 'cant fit here';
            } else {
                for (let i = startIndex; i < startIndex + lengthOfPatrol; i++) {
                    let shipLocation = letters[i] + numInLocation;
                    this.shipPlacement[shipLocation] = 'Patrol';
                }
            }
        } else {
            return "Not a valid ship";
        }

    } else if (direction === 'horizontal') { //Horizontal Placement
        let startNum = 0;
     
        if (headLocation.length === 3) { //This is just to deal with the number 10 as it is 2 numbers long
            startNum = 10;
        } else {
            startNum = headLocation.charAt(1);
        }
       
        let num = Number(startNum); //turning the string above in to an integer
        let letterInLocation = headLocation.charAt(0);

        //Horizontal AircraftCarrier
        if (ship === 'aircraftCarrier') { 
            let lengthOfAircraftCarrier = 5;
            for (let i = num; i < num + lengthOfAircraftCarrier; i++) { //Checks for clashes
                let shipLocation = letterInLocation + i;
                if(this.shipPlacement[shipLocation] !== null) {
                    return;
                }
            }
            if((lengthOfAircraftCarrier - 1 + num) > 10) {
                return 'cant fit here';
            } else {
                for (let i = num; i < num + lengthOfAircraftCarrier; i++) {
                    let shipLocation = letterInLocation + i;
                    this.shipPlacement[shipLocation] = 'AircraftCarrier';
                }
            }
            //Horizontal BattleShip
        } else if (ship === 'battleship') { 
            let lengthOfBattleShip = 4;
            for (let i = num; i < num + lengthOfBattleShip; i++) { //Checks for clashes
                let shipLocation = letterInLocation + i;
                if(this.shipPlacement[shipLocation] !== null) {
                    return;
                }
            }
            if((lengthOfBattleShip - 1 + num) > 10) { //Places battleship in position
                return 'cant fit here';
            } else {
                for(let i = num; i < num + lengthOfBattleShip; i++) {
                    let shipLocation = letterInLocation + i;
                    this.shipPlacement[shipLocation] = 'BattleShip';
                }
            }
        }
        //Horizontal placement of submarine
        else if (ship === 'submarine') { 
            let lengthOfSubmarine = 3;
            for (let i = num; i < num + lengthOfSubmarine; i++) { //Checks for clashes
                let shipLocation = letterInLocation + i;
                if(this.shipPlacement[shipLocation] !== null) {
                    return;
                }
            }
            if((lengthOfSubmarine - 1 + num) > 10) {
                return 'cant fit here';
            } else {
                for (let i = num; i < num + lengthOfSubmarine; i++) {
                    let shipLocation = letterInLocation + i;
                    this.shipPlacement[shipLocation] = 'Submarine';
                }
            }
            //Horizontal Placement of Destroyer
        } else if (ship === 'destroyer') {
            let lengthOfDestroyer = 3;
            for (let i = num; i < num + lengthOfDestroyer; i++) { //Checks for clashes
                let shipLocation = letterInLocation + i;
                if(this.shipPlacement[shipLocation] !== null) {
                    return;
                }
            }
            if((lengthOfDestroyer - 1 + num) > 10) {
                return 'cant fit here';
            } else {
                for (let i = num; i < num + lengthOfDestroyer; i++) {
                    let shipLocation = letterInLocation + i;
                    this.shipPlacement[shipLocation] = 'Destroyer';
                }
            }
            //Horizontal Placement of Patrol
        } else if(ship === 'patrol') {
            let lengthOfPatrol = 2;
            for (let i = num; i < num + lengthOfPatrol; i++) { //Checks for clashes
                let shipLocation = letterInLocation + i;
                if(this.shipPlacement[shipLocation] !== null) {
                    return;
                }
            }
            if((lengthOfPatrol - 1 + num) > 10) {
                return 'cant fit here';
            } else {
                for (let i = num; i < num + lengthOfPatrol; i++) {
                    let shipLocation = letterInLocation + i;
                    this.shipPlacement[shipLocation] = 'Patrol';
                }
            }
        }
    }
    }

    recieveAttack(location) {
        if (this.coordinates[location] === false) {
            this.coordinates[location] = true;
            if (this.shipPlacement[location] !== null) {
                let shipHit = this.shipPlacement[location];
                return shipHit;
            }
        } else { 
            return 'Location already hit';
        }
    }
    }



