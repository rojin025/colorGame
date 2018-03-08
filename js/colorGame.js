var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)"
]
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");//pulled top RGB section from HTML
var selectedWinColor = colors[2];//winning color

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
      alert("Win");
    } else {
      alert("Lose");      
    }
  });
};


 //

 // var colorDisplay = document.getElementById("colorDisplay");
