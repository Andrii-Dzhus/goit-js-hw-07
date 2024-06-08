const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const updateName = () => {
    let name = nameInput.value.trim();
    if (name === ''){
        name = 'Anonymous';
    }
    nameOutput.textContent = name;
};

nameInput.addEventListener('input', updateName);