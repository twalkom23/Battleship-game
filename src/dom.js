

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

export function playerMoveCrosses (coord, hitOrNot) {
    let square = coord + 'm';
    const selectedSquare = document.querySelector(`.${square}`);
    selectedSquare.textContent = 'X';
    if (hitOrNot === false) {
        selectedSquare.classList.toggle('redCross', true);
    } else { 
        selectedSquare.classList.toggle('greenCross', true);
    }
}
