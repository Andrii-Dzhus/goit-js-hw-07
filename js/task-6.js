function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const amountInput = document.querySelector('#controls input');
const boxesDiv = document.querySelector('#boxes');

function createBoxes(amount) {

    destroyBoxes();

    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = '10px';
        boxesDiv.appendChild(box);
        size += 10;
    }
}

function destroyBoxes(){
	boxesDiv.innerHTML = '';
}

    createButton.addEventListener('click', function() {
        const amount = parseInt(amountInput.value.trim(), 10);

        if (isNaN(amount) || amount < 1 || amount > 100) {
            alert('Please enter a number between 1 and 100.');
            return;
        }

        createBoxes(amount);
        amountInput.value = ''; // Очищаємо значення введення
    });

    destroyButton.addEventListener('click', function() {
        destroyBoxes();
    });

