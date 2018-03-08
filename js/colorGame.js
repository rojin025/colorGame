var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");//try again msg
var colorDisplay = document.getElementById("colorDisplay");//pulled top RGB section from HTML
var selectedWinColor = randomColor();//winning random color

colorDisplay.textContent = selectedWinColor;
//Process
for (var i = 0; i < squares.length; i++){
  //added colors to squares
  squares[i].style.backgroundColor = colors[i];
  //adding event listener to select different selected squares
  squares[i].addEventListener("click", function() {
    //grab color from picked colors
    var clickedColor = this.style.backgroundColor;
    //compare color with winnig colors
    if(clickedColor === selectedWinColor){
      console.log( clickedColor , selectedWinColor);
      message.textContent = "Correct";
      changeColor(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Tryagain";
    }
  });
};

function changeColor(color) {
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  };
};

function randomColor() {
  var random = Math.floor(Math.random() * 6 + 1);
  return colors[random];
};

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
