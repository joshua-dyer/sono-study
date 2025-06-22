
const diagramButton = document.getElementById("diagram-button");
const labelsButton = document.getElementById("labels-button");
const captureButton = document.getElementById("capture-button");

const currentlyDisplayedImage = document.getElementById("base-diagram-image");
const labelsElement = document.getElementById("labels-overlay-image");

let pathToImages = "plax";

// Set the initial visibility of labels
labelsElement.style.display = 'none';




// functions to change between Diagram, Labels, and Capture
// These will be called when the cooresponding buttons are pressed
// on the main page.  

function switchToDiagram(){
    
    currentlyDisplayedImage.src = `./images/echo/${pathToImages}/diagram.png`;
}

function switchToLabels(){

    if(labelsElement.style.display === 'none' || labelsElement.style.display === ""){
        labelsElement.style.display = 'block';
    } else{
        labelsElement.style.display = 'none';
    }
    
}

function switchToCapture(){

    currentlyDisplayedImage.src = `./images/echo/${pathToImages}/capture.png`;
}