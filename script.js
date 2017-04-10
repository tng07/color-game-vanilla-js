var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



// update the color rbg
colorDisplay.textContent = pickedColor;

// loop through the square and apply the color
for (var i = 0; i < squares.length; i++) {

  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listener to squares
  squares[i].addEventListener('click', function() {

    // grab color of picked square
    var clickedColor = this.style.backgroundColor;

    // then compare clicked color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetBtn.textContent = "Play Again";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

// reset button
resetBtn.addEventListener("click", function() {

  // generate all new colors
  colors = generateRandomColors(numSquares);

  // pick a new random color from array
  pickedColor = pickColor();

  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor;

  // change color of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

  // reset the text button
  resetBtn.textContent = "New Colors";

  // reset the h1 background color
  h1.style.backgroundColor = "steelblue";

  // reset messageDisplay
  messageDisplay.textContent = "";

})

// easy button
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");

  // reset messageDisplay
  messageDisplay.textContent = "";

  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// hard button
hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");

  // reset messageDisplay
  messageDisplay.textContent = "";

  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
});


// FUNCTIONS

function changeColor(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }

}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {

  // make an array
  var arr = [];

  // add num colors to an array
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }



  return arr;
}

function randomColor() {
  // pick a red from 0 to 255
  var red = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  var green = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
