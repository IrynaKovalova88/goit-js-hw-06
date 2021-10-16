const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function inputName() {
    if (input.value === "") {
        return span.textContent = "Anonymous";
    }
    return span.textContent = input.value;
}
input.addEventListener('input', inputName)