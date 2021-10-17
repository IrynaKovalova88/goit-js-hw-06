const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const inputName = (event) => {
    const userValue = event.target.value.trim();
    if (userValue === "") {
        return span.textContent = "Anonymous";
    }
    return span.textContent = userValue;
}
input.addEventListener('input', inputName)