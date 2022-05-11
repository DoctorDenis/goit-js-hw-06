const refs = {
    decrementButton: document.querySelector("[data-action='decrement']"),
    incrementButton: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector("span#value")
}

refs.decrementButton.addEventListener('click', onDecrementButtonClick);
refs.incrementButton.addEventListener('click', onIncrementButtonClick);
refs.counterValue.textContent = 0;

function onDecrementButtonClick() {
    refs.counterValue.textContent = Number(refs.counterValue.textContent) - 1;
}

function onIncrementButtonClick() {
    refs.counterValue.textContent = Number(refs.counterValue.textContent) + 1;
}

