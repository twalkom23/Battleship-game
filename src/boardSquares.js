//assigning event listeners to all of the squares
//playerBoard 
export function playerBoardSquares () {
   const playerBoardContainer = document.querySelector('.playerBoard');
    
   playerBoardContainer.addEventListener('click', (event) => {
    let square = event.target.classList.value;
    return square;
   })
}

export function directionalButtons () {
    const horizontalButton = document.querySelector('.horizontalButton');
    const verticalButton = document.querySelector('.verticalButton');

    horizontalButton.addEventListener('click', () => {
        console.log('horizontal Button clicked');
    })
    verticalButton.addEventListener('click', () => {
        console.log('vertical button clicked');
    })
}
