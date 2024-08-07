export let directionPlacement = '';
export let shipSelection = '';

//assigning event listeners to all of the squares
//playerBoard 
export function playerBoardSquares () {
   const playerBoardContainer = document.querySelector('.playerBoard');
    
   playerBoardContainer.addEventListener('click', (event) => {
    let square = event.target.classList.value;
    return square;
   })
}

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
        airCraftCarrierSelection.disabled = true;
        battleshipSelection.disabled = false;
        submarineSelection.disabled = false;
        destroyerSelection.disabled = false;
        patrolSelection.disabled = false;
        shipSelection = 'aircraftCarrier';
    });
    battleshipSelection.addEventListener('click', () => {
        airCraftCarrierSelection.disabled = false;
        battleshipSelection.disabled = true;
        submarineSelection.disabled = false;
        destroyerSelection.disabled = false;
        patrolSelection.disabled = false;
        shipSelection = 'battleship';
    });
    submarineSelection.addEventListener('click', () => {
        airCraftCarrierSelection.disabled = false;
        battleshipSelection.disabled = false;
        submarineSelection.disabled = true;
        destroyerSelection.disabled = false;
        patrolSelection.disabled = false;
        shipSelection = 'submarine';
    });
    destroyerSelection.addEventListener('click', () => {
        airCraftCarrierSelection.disabled = false;
        battleshipSelection.disabled = false;
        submarineSelection.disabled = false;
        destroyerSelection.disabled = true;
        patrolSelection.disabled = false;
        shipSelection = 'destroyer';
    });
    patrolSelection.addEventListener('click', () => {
        airCraftCarrierSelection.disabled = false;
        battleshipSelection.disabled = false;
        submarineSelection.disabled = false;
        destroyerSelection.disabled = false;
        patrolSelection.disabled = true;
        shipSelection = 'patrol';
    })
}
