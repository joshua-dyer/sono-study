
const diagramButton = document.getElementById("diagram-button");
const labelsButton = document.getElementById("labels-button");
const captureButton = document.getElementById("capture-button");

const currentlyDisplayedImage = document.getElementById("base-diagram-image");
const labelsElement = document.getElementById("labels-overlay-image");

// Set the initial path to images to the PLAX view
let pathToImages = "plax";






// functions to change between Diagram, Labels, and Capture
// These will be called when the cooresponding buttons are pressed
// on the main page.  

function switchToDiagram(){
    
    currentlyDisplayedImage.src = `./images/echo/${pathToImages}/diagram.png`;
}

function toggleLabels(){

    // Toggle the 'is-visible' class
    labelsElement.classList.toggle('is-visible');
    
}

function switchToCapture(){

    currentlyDisplayedImage.src = `./images/echo/${pathToImages}/capture.png`;
}


//  Function to adjust path to images when Select element changes
//  This will also set the Diagram view with no labels by default 
//  in order to reset the view.

function changePathToImages(){
    // set the new path
    pathToImages = document.getElementById("view-selector").value;
    // hide the labels

    // set new label path
    labelsElement.src = `./images/echo/${pathToImages}/labels.png`;
    // switch to diagram view
    switchToDiagram();

}