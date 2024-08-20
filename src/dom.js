import { state } from ".";

const startGameButton = document.querySelector('.startGameButton');



export function newGameSetUp() {
    startGameButton.disabled = true;
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
export function pressStartGameButton() {
    startGameButton.addEventListener('click', () => {
        startGameButton.disabled = true;  
        startGameButton.classList.toggle('highlightShipButtons', false);
        const enableBoard = document.querySelector('.movesBoard'); //This will make the moves board clickable
        enableBoard.classList.toggle('unclickable');
        htmlSetUpForGameIsReady(); //to add some basic html changes to the site
    })
}
function htmlSetUpForGameIsReady(){ //changing the HTML set up once the game is ready to play
    //Removing some of the HTML that is already there
    const startGameButton = document.querySelector('.startGameButton');
    const directionButtons = document.querySelector('.directionButtons');
    const instructionContainer = document.querySelector('.instructionsContainer');
    startGameButton.remove();
    directionButtons.remove();
    instructionContainer.remove();

    //Adding some new HTML
    //Adding The players score to the HTML
    const startGameInstructionsContainer = document.querySelector('.startOfGameInstructionsContainer');
    //creating divs etc to hold how many shots each ship has left
    const playerScoreHeading = document.createElement('p');
    const airCraftScore = document.createElement('p');
    const battleshipScore = document.createElement('p');
    const submarineScore = document.createElement('p');
    const destroyerScore = document.createElement('p');
    const patrolScore = document.createElement('p');
    //giving the ship scores a class name
    playerScoreHeading.classList.add('playerScoreHeading');
    airCraftScore.classList.add('airCraftScore');
    battleshipScore.classList.add('battleshipScore');
    submarineScore.classList.add('submarineScore');
    destroyerScore.classList.add('destroyerScore');
    patrolScore.classList.add('patrolScore');
    //Adding text 
    playerScoreHeading.textContent = 'PLAYER SCORE'
    airCraftScore.textContent = '5 - Aircraft Carrier';
    battleshipScore.textContent = '4 - BattleShip';
    submarineScore.textContent = '3 - Submarine';
    destroyerScore.textContent = '3 - Destroyer';
    patrolScore.textContent = '2 - Patrol';

    //appending the player Score information to the page
    startGameInstructionsContainer.appendChild(playerScoreHeading);
    startGameInstructionsContainer.appendChild(airCraftScore);
    startGameInstructionsContainer.appendChild(battleshipScore);
    startGameInstructionsContainer.appendChild(submarineScore);
    startGameInstructionsContainer.appendChild(destroyerScore);
    startGameInstructionsContainer.appendChild(patrolScore);
    
    //appending the computer score to the page
    const computerScoreContainer = document.querySelector('.computerScoreContainer');
     //creating divs etc to hold how many shots each ship has left
     const compScoreHeading = document.createElement('p');
     const airCraftScoreComp = document.createElement('p');
     const battleshipScoreComp = document.createElement('p');
     const submarineScoreComp = document.createElement('p');
     const destroyerScoreComp = document.createElement('p');
     const patrolScoreComp = document.createElement('p');
     //giving the ship scores a class name
     compScoreHeading.classList.add('compScoreHeading');
     airCraftScoreComp.classList.add('airCraftScoreComp');
     battleshipScoreComp.classList.add('battleshipScoreComp');
     submarineScoreComp.classList.add('submarineScoreComp');
     destroyerScoreComp.classList.add('destroyerScoreComp');
     patrolScoreComp.classList.add('patrolScoreComp');
     //Adding text 
     compScoreHeading.textContent = 'COMPUTER SCORE'
     airCraftScoreComp.textContent = '5 - Aircraft Carrier';
     battleshipScoreComp.textContent = '4 - BattleShip';
     submarineScoreComp.textContent = '3 - Submarine';
     destroyerScoreComp.textContent = '3 - Destroyer';
     patrolScoreComp.textContent = '2 - Patrol';
 
     //appending the player Score information to the page
     computerScoreContainer.appendChild(compScoreHeading);
     computerScoreContainer.appendChild(airCraftScoreComp);
     computerScoreContainer.appendChild(battleshipScoreComp);
     computerScoreContainer.appendChild(submarineScoreComp);
     computerScoreContainer.appendChild(destroyerScoreComp);
     computerScoreContainer.appendChild(patrolScoreComp);
}

export function playerMoveCrosses (coord, hitOrNot) {//This adds a cross for both the players turn and computers turn
    let square = coord;
    if (state.playerTurn === true) {
    square = coord + 'm';
    }
    const selectedSquare = document.querySelector(`.${square}`);
    selectedSquare.textContent = 'X';
    if (hitOrNot === false) {
        selectedSquare.classList.toggle('redCross', true);
    } else { 
        selectedSquare.classList.toggle('greenCross', true);
    }
}


export function scoreBoard(score, whosTurn, ship) { //This function will adjust the scoreboard when a ship is hit
    const airCraftCompScore = document.querySelector('.airCraftScoreComp');
    const battleshipCompScore = document.querySelector('.battleshipScoreComp');
    const submarineCompScore = document.querySelector('.submarineScoreComp');
    const destroyerCompScore = document.querySelector('.destroyerScoreComp');
    const patrolCompScore = document.querySelector('.patrolScoreComp');
    const airCraftPlayerScore = document.querySelector('.airCraftScore');
    const battleshipPlayerScore = document.querySelector('.battleshipScore');
    const submarinePlayerScore = document.querySelector('.submarineScore');
    const destroyerPlayerScore = document.querySelector('.destroyerScore');
    const patrolPlayerScore = document.querySelector('.patrolScore');
    if (ship === 'aircraftCarrier') { //adjusts the score if an aircraft carrier is hit
        if (whosTurn === true) {
            airCraftCompScore.textContent = `${score} - Aircraft Carrier`;
            if(score === 0) {airCraftCompScore.classList.add('lineThrough');}
        }
        else {
            airCraftPlayerScore.textContent = `${score} - Aircraft Carrier`;
            if (score === 0){airCraftPlayerScore.classList.add('lineThrough');}
        };

    } else if (ship === 'battleship') {//adjust the scores if a battleship is hit
        if (whosTurn === true) {
            battleshipCompScore.textContent = `${score} - BattleShip`;
            if (score === 0) {battleshipCompScore.classList.add('lineThrough');}
        }
        else {
            battleshipPlayerScore.textContent = `${score} - BattleShip`;
            if (score === 0) {battleshipPlayerScore.classList.add('lineThrough');}
        };

    } else if (ship === 'submarine'){ //adjusts the score if a submarine is hit
        if (whosTurn === true) {
            submarineCompScore.textContent = `${score} - Submarine`;
            if(score === 0) {submarineCompScore.classList.add('lineThrough');}
        }
        else {
            submarinePlayerScore.textContent = `${score} - Submarine`;
            if(score === 0) {submarinePlayerScore.classList.add('lineThrough');}
        };

    } else if (ship === 'destroyer'){ //adjusts the score if a destroyer is hit
        if(whosTurn === true) {
            destroyerCompScore.textContent = `${score} - Destroyer`;
            if(score === 0) {destroyerCompScore.classList.add('lineThrough');}
        }
        else {
            destroyerPlayerScore.textContent = `${score} - Destroyer`;
            if(score === 0) {destroyerPlayerScore.classList.add('lineThrough');}  
        };
    }
    else { //Adjust the score if patrol is hit
        if(whosTurn === true) {
            patrolCompScore.textContent = `${score} - Patrol`;
            if(score === 0) {patrolCompScore.classList.add('lineThrough');}
        }
        else {
            patrolPlayerScore.textContent = `${score} - Patrol`;
            if(score === 0){patrolPlayerScore.classList.add('lineThrough');}
        };

    }
}

export function endGame(winner) { //This will create the dom changes for when a game is over
    const body = document.querySelector('body');
    const newGameButton = document.getElementById('newGameButton');
    const winnerText = document.createElement('p');
    if (winner === 'playerWin') {//This will run if the player wins the game
        body.style.pointerEvents = 'none';
        newGameButton.style.pointerEvents = 'auto';
        winnerText.textContent = 'Player Wins!!!';
    } else {
        body.style.pointerEvents = 'none';
        newGameButton.style.pointerEvents = 'auto';
        winnerText.textContent = 'Computer Wins!!!';
    }
    winnerText.classList.add('fullScreenText');
    body.appendChild(winnerText);
    body.classList.add('blurBackground');
}

export function newGameButton() {//Runs when the new game button is clicked
    const newGameButton = document.getElementById('newGameButton');
    newGameButton.addEventListener('click', () => {
        location.reload();
    })
}
    