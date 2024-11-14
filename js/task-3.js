const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleNameInput = (e) => {
  if(e.target.value.trim().length > 0) {
    output.textContent = e.target.value.trim();
  } else {
    output.textContent = 'Anonimous';
  }
}

input.addEventListener('input', handleNameInput)