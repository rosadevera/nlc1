var grid = 20;
var show = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorPicker = createColorPicker("#000000");
  colorPicker.position(40, 150);
  colorPicker.size(colorPicker.width, 28);
  saveButton = createButton("download");
  saveButton.position(40, 190);
  saveButton.size(100, 32);
  saveButton.mousePressed(download);
}

function draw() {
    if (mouseIsPressed) {
      var x = snap(mouseX);
      var y = snap(mouseY);
      if (!show) {
        noStroke();
      } else {
        stroke(150);
      }
      fill(colorPicker.color());
      square(x, y, grid);
    }
  }
  
  function snap(val) {
    return floor(val / grid) * grid;
  }

  function download() {
    saveCanvas("myPixelArt", "png");
  }