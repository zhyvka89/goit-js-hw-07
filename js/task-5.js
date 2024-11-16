function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('span');
const btn = document.querySelector('.change-color');

const handleClick = (e) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}

btn.addEventListener('click', handleClick);