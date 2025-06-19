
const diagramButton = document.getElementById("diagram-button");
const labelsButton = document.getElementById("labels-button");
const captureButton = document.getElementById("capture-button");

const currentlyDisplayedImage = document.getElementById("base-diagram-image");
const labelsElement = document.getElementById("labels-overlay-image");



function switchToDiagram(){
    
    currentlyDisplayedImage.src = "./images/echo/plax/diagram.png"
}

function switchToLabels(){

    if(labelsElement.style.display === 'none'){
        labelsElement.style.display = 'block';
    } else{
        labelsElement.style.display = 'none';
    }
    
}

function switchToCapture(){

    currentlyDisplayedImage.src = "./images/echo/plax/capture.png"
}