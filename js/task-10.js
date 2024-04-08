function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = ''; 
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = document.querySelector('input[type="number"]').value;
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  destroyBoxes();
});