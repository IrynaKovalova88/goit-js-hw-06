const buttonSub = document.querySelector("[data-action='increment']");
const buttonAdd = document.querySelector("[data-action='decrement']");
const buttonSpan = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
    buttonSpan.textContent = counterValue;
    console.log("Increment +1");
    console.log(`Value: ${ counterValue }`);
};

const decrement = () => {
  counterValue -= 1;
    buttonSpan.textContent = counterValue;
    console.log("Decrement -1");
    console.log(`Value: ${ counterValue }`);
};

buttonSub.addEventListener("click", increment);
buttonAdd.addEventListener("click", decrement);
