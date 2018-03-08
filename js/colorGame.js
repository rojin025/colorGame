var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");//try again msg
var colorDisplay = document.getElementById("colorDisplay");//pulled top RGB section from HTML
var selectedWinColor = randomColor();//winning random color

colorDisplay.textContent = selectedWinColor;
for (var i = 0; i < squares.length; i++){
  //added colors to squares
  squares[i].style.backgroundColor = colors[i];
  //adding event listener to select different selected squares
  squares[i].addEventListener("click", function() {
    //grab color from picked colors
    var clickedColor = this.style.backgroundColor;
    //compare color with winnig colors
    if(clickedColor === selectedWinColor){
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
