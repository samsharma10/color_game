var numSquares =6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    
        //add click listener to the squares
        squares[i].addEventListener("click", function(){
            //grab color of the picked square
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent="Correct!";
                resetButton.textContent="Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor= clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay,textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons(){
    for(var i = 0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else{
                numSquares = 6;
            }
           
            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }
}


// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected"); 
//     numSquares = 3
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i =0; i <squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
        
//     }
// });

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6; 
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i =0; i <squares.length; i++){
        
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display="block";
        
//     }
// });


function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color fro array
    pickedColor = pickColor();
    //Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
        //change each color to mathc given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    
    for(var i = 0; i < num; i++){
        //add num random colors to the array
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random()*255);
    //------
    var g = Math.floor(Math.random()*255);
    //------
    var b = Math.floor(Math.random()*255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}