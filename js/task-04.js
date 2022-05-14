const refs = {
    decrementButton: document.querySelector("[data-action='decrement']"),
    incrementButton: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector("span#value")
}

refs.decrementButton.addEventListener('click', onDecrementButtonClick);
refs.incrementButton.addEventListener('click', onIncrementButtonClick);
let value = Number(refs.counterValue.textContent);

function onDecrementButtonClick() {
    value -= 1;
    refs.counterValue.textContent = value;

}

function onIncrementButtonClick() {
    value += 1;
    refs.counterValue.textContent = value;
}

