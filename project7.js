var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var draw = false;
var line = false;
var rainbowColor = 0;



// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
    var newsquare = document.createElementNS(namespace, "rect")
  newsquare.setAttribute("x", x)
  newsquare.setAttribute("y", y)
  newsquare.setAttribute("width", size)
  newsquare.setAttribute("height", size)
  newsquare.setAttribute("fill", color)
  screen.appendChild(newsquare)
}

function clearBoard() {
  location.reload();
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("fill", color)
  newcircle.setAttribute("r", size)
  screen.appendChild(newcircle)
}

function drawTriangle(x, y, size, color) {
  var pts = x + "," + y + " " + (x - (2*size)) + "," + (y + size) + " " + (x - size) + "," + (y - (1.5*size));
  console.log("x" + x)
  console.log("size" + size)
  console.log("pts " + pts)
  var triangle = document.createElementNS(namespace, "polygon")
  triangle.setAttribute("points", pts)
  triangle.setAttribute("fill", color)
  screen.appendChild(triangle)
}


document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e, screen)
    draw = true

      var selectedShape = document.getElementById("shapeSelect").value;
      var selectedColor = document.getElementById("colorSelect").value;
      var selectedSize = document.getElementById("sizeSelect").value;

        var pt = transformPoint(e, screen)
        if(draw == true){
          if(selectedColor == "rainbow"){
  selectedColor = 'hsl('+(rainbowColor += 1)+', 100%, 50%)';
}

if(selectedShape == "t"){
  if(line == true) {
    var s3 = Math.round(pt.x);
    var s4 = pt.y;

    for(var amount = s1; amount<s3; amount++) {
      drawSquare(amount-(0.5*selectedSize),pt.y-(0.5*selectedSize),selectedSize, selectedColor);
console.log("1")
    }
    line = false;
  }
  else {
    var s1 = pt.x;
var s2 = pt.y;
drawSquare(pt.x-(0.5*selectedSize),pt.y-(0.5*selectedSize),selectedSize, selectedColor);

console.log("2")
line = true;
}
}
        if(selectedShape == "square"){
      drawSquare(pt.x-(0.5*selectedSize),pt.y-(0.5*selectedSize),selectedSize, selectedColor);
        }
        else if(selectedShape == "circle"){
      drawCircle(pt.x,pt.y,selectedSize, selectedColor);
        }
        else if(selectedShape == "triangle") {

      drawTriangle(pt.x+(1*selectedSize),pt.y+(0.5*selectedSize),selectedSize, selectedColor);


    }
  }
})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e, screen)
  draw = false
})


/
document.addEventListener("mousemove", function(e) {

  var selectedShape = document.getElementById("shapeSelect").value;
  var selectedColor = document.getElementById("colorSelect").value;
  var selectedSize = document.getElementById("sizeSelect").value;

    var pt = transformPoint(e, screen)

    if(draw == true){
      if(selectedColor == "rainbow"){
  selectedColor = 'hsl('+(rainbowColor += 1)+', 100%, 50%)';
}
    if(selectedShape == "square"){
      drawSquare(pt.x-(0.5*selectedSize),pt.y-(0.5*selectedSize),selectedSize, selectedColor);
    }
    else if(selectedShape == "circle"){
  drawCircle(pt.x,pt.y,selectedSize, selectedColor);
    }
    else if(selectedShape == "triangle") {

      drawTriangle(pt.x+(1*selectedSize),pt.y+(0.5*selectedSize),selectedSize, selectedColor);

  }
}})
