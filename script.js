var gameOver = false;
var maxScore = 5;

var player1Score = 0;
var player2Score = 0;

var maxDisplay = document.getElementById("maxDisplay");

var input = document.querySelector("input");

var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")

var player1Button = document.getElementById("player1");
var player2Button = document.getElementById("player2");
var resetButton = document.getElementById("reset");

input.addEventListener("change", function () {
    maxScore = Number(this.value) ;
    maxDisplay.textContent = maxScore;
    reset();


});

player1Button.addEventListener("click", function () {
    if (!gameOver) {
        player1Score++;
        console.log(player1Score,maxScore);
        if (player1Score == maxScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = player1Score;
    }
});


player2Button.addEventListener("click", function () {
    if (!gameOver) {
        player2Score++;
        console.log(player2Score, maxScore);
        if (player2Score == maxScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = player2Score;
    }
});

resetButton.addEventListener("click",reset);


function reset() {
    gameOver = false;
    player1Score = 0;
    player2Score = 0;
    p1Display.textContent = player1Score;
    p2Display.textContent = player2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

//there is 301 different events..more informations on MDN

