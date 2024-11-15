const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  if(input.value <= 100) {
    if(boxes.children.length) {
      cleanBoxes();
    }
    createBoxes(input.value);
    cleanInput();
  }
})

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let dimentionW = 30;
  let dimentionH = 30;
  for (let index = 0; index < amount; index++) {
    const div = document.createElement('div');
    div.style.width = `${dimentionW += 10}px`;
    div.style.height = `${dimentionH += 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function destroyBoxes() {
  cleanBoxes();
  cleanInput();
}

function cleanBoxes() {
  boxes.innerHTML = '';
}

function cleanInput() {
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
