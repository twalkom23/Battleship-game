export let directionPlacement = '';

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
    })
    verticalButton.addEventListener('click', () => {
        directionPlacement = 'vertical';  
    })
}
