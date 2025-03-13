const container = document.querySelector(".container");
const btn = document.querySelector(".setSize");
const randomColor = function(){
    return '#' + Math.floor(Math.random()*1677215).toString(16).padStart(6, '0')
}
let gridPixels = 0;
btn.addEventListener("click", () => {
    let pixel = prompt("How many rows and columns do you want on the grid?");
    gridPixels = Number(pixel);
    if (isNaN(gridPixels) == false && gridPixels > 0 && gridPixels <= 100){
        while (container.firstChild){
            container.removeChild(container.lastChild);
        }
        for (let i = 1 ; i <= gridPixels ; i++){
            let rowContainer = document.createElement("div");
            rowContainer.classList.add("rowContainer");
            container.appendChild(rowContainer);
            for (let i = 1; i <= gridPixels; i++){
                let colorDiv = document.createElement("div");
                colorDiv.classList.add("colorDiv");
                colorDiv.addEventListener("mouseenter", () => {
                    colorDiv.style.backgroundColor = randomColor;
                    let opacity = 0%;
                    if (opacity != 100%){
                        opacity += 10%;
                    }
                    colorDiv.style.opacity = opacity
                })
                colorDiv.addEventListener("mouseleave", () => {
                    colorDiv.style.backgroundColor = "white";
                })
                rowContainer.appendChild(colorDiv);
            }
        } 
    }
    else{
        alert ("Invalid input. Please enter a number between 1 and 100");
    }
})