const container = document.querySelector(".container");
const btn = document.querySelector(".setSize");
let gridPixels = 0;
btn.addEventListener("click", () => {
    let pixel = prompt("How many pixels do you want on the sketchboard?");
    gridPixels = Math.round(Number(pixel));
    if (isNaN(gridPixels) === true || gridPixels < 1 || gridPixels > 100){
        alert("Invalid input. Please enter a number between 1 to 100")
        return;
    }
    if(container.firstChild){
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
    }
    for (let i = 1; i <= gridPixels; i++){
        let rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer"
        container.appendChild(rowContainer);
        for(let i = 1; i <= gridPixels; i++){
            let sketchDiv = document.createElement("div");
            sketchDiv.className = "sketchDiv";
            rowContainer.appendChild("sketchDiv");
        }
    }
})
