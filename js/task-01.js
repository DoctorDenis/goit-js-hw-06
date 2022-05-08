const ulElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulElements.length}\n\n`);

ulElements.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}\n\n`);
})