var font;
var vehicles = [];
var name;

function preload(){
  font = loadFont('http://127.0.0.1:8887/AvenirNextLTPro-Demi.otf');
}
function setup() {
  createCanvas(850, 400);
  background(255);
  // textFont(font);
  // textSize(172);
  // fill(255);
  // noStroke();
  // text('Nature',30,200);
  var inp = createInput('');
  inp.input(myInputEvent);

  function myInputEvent(){
    name = this.value();
    console.log('you are typing: ', this.value());
  }
  setValue(name);
}

var setValue = function(name) {
  var points = font.textToPoints(name,30,230,272);
  // console.log(points);

  for(var i=0; i<points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x,pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(6);
    // point(pt.x,pt.y);
  }
}
function mousePressed(){
  a=120;
  b=10;
}

function draw() {
 background(255);

 for(var i=0; i<vehicles.length;i++){
   var v = vehicles[i];
   v.behaviors();
   v.update();
   v.show();
 }

}
