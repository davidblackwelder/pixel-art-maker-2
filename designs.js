// Select color input
let pixelColor = document.getElementById("colorPicker");
// Select size input
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");

let reset = document.querySelector('input[value="Clear"]');
reset.disabled = true;

// When size is submitted by the user, call makeGrid()
let size = document.querySelector('input[type="submit"]');

size.addEventListener('click', function makeGrid(event) {
    event.preventDefault(); // prevent page from reloading
    this.disabled = true;
    document.querySelector('input[value="Clear"]').disabled = false;

    for (let r = 0; r < gridHeight.value; r++) {
        let canvas = document.getElementById("pixelCanvas");
        let newRow = canvas.insertRow(r);
        for (let w = 0; w < gridWidth.value; w ++) {
            newRow.insertCell(w);
        }
    }

    document.getElementById("pixelCanvas").addEventListener('click', function(evt) {
        if (evt.target.nodeName.toLowerCase() === 'td') {
            evt.target.style.backgroundColor = pixelColor.value;
        } 
    });
});