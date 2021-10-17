const validationInput = document.querySelector('#validation-input');
const validNumber = parseInt(validationInput.getAttribute('data-length'));

const handleInput = (event) => {
    const userRequest = event.target.value.trim().length;
    console.log(userRequest);

    if (userRequest !== validNumber) {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
        return
    }
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
};
validationInput.addEventListener('blur', handleInput);
