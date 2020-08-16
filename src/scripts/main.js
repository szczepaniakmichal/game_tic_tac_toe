const gameItems = [...document.querySelectorAll('.game__item')];
const gameValues = ['', '', '', '', '', '', '', '', ''];
let activePlayer = 'x';

gameItems.forEach(field => {
    field.addEventListener('click', e => {
        const {position} = e.target.dataset;
        if (gameValues[position] === '') {
            gameValues[position] = activePlayer;
            e.target.classList.add(`game__item--${activePlayer}`)
            activePlayer = activePlayer === 'x' ? 'o' : 'x';
        }
    })
})


