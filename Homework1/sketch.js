var canvas;
var bgcolor;
var button;
var input;
var nameP;
var slider;
var buttonTwo;

function setup() {
 canvas = createCanvas(200, 200);
 bgcolor = color(200);
 nameP = createP('your name')
nameP.style("color","blue")
 button = createButton("go go go go");
 buttonTwo = createButton("Submit")
 slider = createSlider(10, 100, 44);
 input = createInput("what's your name")

 button.mousePressed(changeColor);


 nameP.mouseOver(overpara);
 nameP.mouseOut(outpara);
 input.changed(updateText);


}

function updateText() {

 nameP.html(input.value())
}

function overpara() {
 nameP.html('your mouse is over me!')
  // nameP.html.textStyle(BOLD);


}


function outpara() {
 nameP.html('your mouse is out!')

}

function changeColor() {
 bgcolor = color(random(255));
}



function draw() {

 background(bgcolor);
 fill(255, 0, 0);
 //nameP.html(input.value());
 ellipse(100, 100, slider.value(), slider.value());
 text(input.value(), 10, 20)

}