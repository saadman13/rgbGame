var numBlocks = 6;
var colors = [];
var selectedColor;
var numTries = 0; // needs to try atleast once and thats 100% if user gets right
var gameOver = false;


//Select 
var blocks = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var solutionButton = document.querySelector("#solution");
var performanceButton = document.querySelector("#performance");


start();
function start(){
  //calls function to set up mode buttons
  setUpModeButtons();
  setUpBlocks();
  reset();
}// init

solutionButton.addEventListener("click", function(){
  solutionButton.style.backgroundColor = selectedColor;
  solutionButton.style.color = "white";
  solutionButton.textContent = "solution";
  resetButton.textContent = "Play Again?"

});//solutionButton- addEventListener

performanceButton.addEventListener("click",function(){
  var percentage = 100;
  if(gameOver){
    console.log(numTries);
    if(numTries === 1){
      percentage = 100;
    }else{
      var scorePerc = Math.floor(numTries/numBlocks * 100);
      percentage =  percentage - scorePerc;
    }// else 

    performanceButton.textContent = percentage +"%";
    performanceButton.style.backgroundColor = "green";
    performanceButton.style.color = "white";
  }// if 
  else{
    alert("Finish the game to see your performance");
  }//
});

function setUpModeButtons(){
  for(var i = 0; i <modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        //removing the style "selected"
        modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    modeButtons[2].classList.remove("selected");
    //adding the style to only the clicked button
    this.classList.add("selected");

    if(this.textContent === "Easy"){
      numBlocks = 3;
    }else if(this.textContent === "Medium"){

      numBlocks= 6;
    }// elseif
    else{
      numBlocks = 9;
    }// else

    reset();
  });

}// for 

}// setUpModeButtons

function setUpBlocks(){
  for(var i = 0; i < blocks.length;i++){
    blocks[i].addEventListener("click",function(){

    var clickedColor = this.style.backgroundColor;
    if(clickedColor === selectedColor){
    message.textContent = "Correct!";
    resetButton.textContent="PLAY AGAIN?"
    changeColor(clickedColor);
    h1.style.backgroundColor = clickedColor;
    gameOver = true;
    numTries++;
    }else{
    numTries++;
    this.style.backgroundColor="#232323";
    message.textContent = "Try Again";
    }// else
    });
  }// for loop
}// setUpBlocks


function reset(){
  gameOver = false;
  numTries = 0;
  console.log("after reset numTries " + numTries);
  colors = generateRandomColors(numBlocks);
  selectedColor = getSelectedColor();
  colorDisplay.textContent = selectedColor;
  solutionButton.style.color = "steelBlue";
  solutionButton.style.backgroundColor= "transparent";
  solutionButton.textContent = "Click For Quick Solution";
  performanceButton.style.color = "steelBlue";
  performanceButton.style.backgroundColor= "transparent";
  performanceButton.textContent = "Performance";
  for(var i = 0; i < blocks.length;i++){
    // add initial coolors to blocks
    if(colors[i]){
      blocks[i].style.display = "block";
      blocks[i].style.backgroundColor = colors[i];

    }else{
      blocks[i].style.display = "none";
    }

  }
  h1.style.backgroundColor= "steelBlue";
  message.textContent ="";
  resetButton.textContent = "New Colors";

}// reset



resetButton.addEventListener("click", function(){
  reset();
});

for(var i = 0; i < squares.length;i++){

blocks[i].addEventListener("click",function(){
var clickedColor = this.style.backgroundColor;

if(clickedColor === selectedColor){
message.textContent = "Correct!";
resetButton.textContent="PLAY AGAIN?"
changeColor(clickedColor);
h1.style.backgroundColor = clickedColor;

}else{
this.style.backgroundColor="#232323";
message.textContent = "Try Again";
}// else
});

}// for loop

function changeColor(color){
  for(var i = 0; i < blocks.length;i++){

    blocks[i].style.backgroundColor = color;
  }// for loop
}//changeColor

function getSelectedColor(){
  var random= Math.floor(Math.random() *colors.length);
  return colors[random];

}// getSelectedColor 



function generateRandomColors(num){
  var arr = [];
  while(num!== 0){
    var randomR = Math.floor(Math.random() * 256);
    var randomG = Math.floor(Math.random() * 256);
    var randomB = Math.floor(Math.random() * 256);

    var str = makeString(randomR,randomG,randomB);
    arr.push(str);
    num--;
  }// while
  return arr;
}//generateRandomColors

function makeString(r,g,b){
  return ("rgb(" + r + ", " + g+ ", " + b +")");
}//makeString

