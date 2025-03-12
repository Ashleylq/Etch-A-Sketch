let btn = document.querySelector(".setSize");
let gridPixels = 0;
btn.addEventListener("click", () => {
    let pixel = prompt("How many pixels do you want on the sketchboard?");
    gridPixels = Math.round(Number(pixel));
    if (isNaN(gridPixels) === true || gridPixels < 1 || gridPixels > 100){
        alert("Invalid input. Please enter a number between 1 to 100")
    }
})
