// var colors = generateRandomColors(6);
// var squares = document.querySelectorAll(".square");
// var message = document.querySelector("#message");//try again msg
// var colorDisplay = document.getElementById("colorDisplay");//pulled top RGB section from HTML
// var selectedWinColor = randomColor();//winning random color
//
// colorDisplay.textContent = selectedWinColor;
//
// //Process
// for (var i = 0; i < squares.length; i++){
//   //added colors to squares
//   squares[i].style.backgroundColor = colors[i];
//   //adding event listener to select different selected squares
//   squares[i].addEventListener("click", function() {
//     //grab color from picked colors
//     var clickedColor = this.style.backgroundColor;
//     //compare color with winnig colors
//     if(clickedColor === selectedWinColor){
//       console.log( clickedColor , selectedWinColor);
//       message.textContent = "Correct";
//       changeColor(clickedColor);
//     } else {
//       this.style.backgroundColor = "#232323";
//       message.textContent = "Tryagain";
//     }
//   });
// };
//
// function changeColor(color) {
//   //loop through all squares
//   for(var i = 0; i < squares.length; i++){
//     //chage each color to match given color
//     squares[i].style.backgroundColor = color;
//   };
// };
//
// function randomColor() {
//   var random = Math.floor(Math.random() * 6 + 1);
//   return colors[random];
// };
//
// function generateRandomColors(num){
//   //make an array
//   var arr = [];
//   //add num random colors to array
//   for(var i = 0; i < num; i++){
//     //get random color and push into array
//     arr.push(randomColor());
//   }
//   //return that array
//   return arr;
// }
//
// function randomColor() {
//   //pick a "red" from 0 - 255
//   var r = Math.floor(Math.random() * 256);
//   var g = Math.floor(Math.random() * 256);
//   var b = Math.floor(Math.random() * 256);
//   return "rgb(" + r + ", " + g + ", " + b + ")";
// }

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colorDisplay
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor;
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
