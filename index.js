const graph = document.getElementById("graph");
let inputElement = document.getElementById("enterFunction");
let enteredValue;

function clearCanvas() {
    let graphtx = graph.getContext("2d");
    graphtx.clearRect(0, 0, 1000, 700);
    console.log("hello there welcome to it");
}

function graphFunction() {
    let inputElement = document.getElementById("enterFunction");
    enteredValue = parseFloat(inputElement.value);
    clearCanvas();
    let graphtx = graph.getContext("2d");
    let centerX = graph.width / 2;
    let centerY = graph.height / 2;
    graphtx.moveTo(centerX, centerY);
    graphtx.lineTo(enteredValue, 100);
    graphtx.stroke();
}

document.getElementById("btn").addEventListener("click", graphFunction);
