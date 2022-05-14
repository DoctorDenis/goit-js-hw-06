const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

document.querySelector("#ingredients").append(
  ...ingredients.reduce((arr, element) => {
    const liElement = document.createElement("li");
    liElement.classList.add("item");
    liElement.textContent = element;
    arr.push(liElement);
    return arr;
  }, [])
);
