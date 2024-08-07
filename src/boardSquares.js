export let directionPlacement = null;
export let shipSelection = null;

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
