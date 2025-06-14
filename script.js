
const diagramButton = document.getElementById("diagram-button");
const labelsButton = document.getElementById("labels-button");
const captureButton = document.getElementById("capture-button");

const currentlyDisplayedImage = document.getElementById("currently-displayed-image");



function switchToDiagram(){
    
    currentlyDisplayedImage.src = "./images/echo/plax/Diagram.png"
}

function switchToLabels(){

    currentlyDisplayedImage.src = "./images/echo/plax/Labels.png"
}

function switchToCapture(){

    currentlyDisplayedImage.src = "./images/echo/plax/Capture.png"
}