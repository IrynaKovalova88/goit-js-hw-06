const buttonIncrement = document.querySelector("[data-action='increment']");
const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonSpan = document.querySelector("#value");

let counterValue = 0;
const onIncrement = () => {
    buttonSpan.textContent = counterValue += 1;
    console.log("Increment +1");
    console.log(`Value: ${ counterValue }`);
};

const onDecrement = () => {
    buttonSpan.textContent = counterValue -= 1;
    console.log("Decrement -1");
    console.log(`Value: ${ counterValue }`);
};

buttonIncrement.addEventListener("click", onIncrement);
buttonDecrement.addEventListener("click", onDecrement);