const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9]+@gmail\.com$/;

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }
    gmailResult.innerHTML = ' NOT OK'
    gmailResult.style.color = 'red'
})

const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const moveChildBlock = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionY >= 448 && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    requestAnimationFrame(moveChildBlock);
};

moveChildBlock();