const player1Button = document.querySelector(".player-1-button");
const player2Button = document.querySelector(".player-2-button");
const resetButton = document.querySelector(".reset-button");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const winningScoreSelect = document.querySelector("#playto");


let player1Hits = 0;
let player2Hits = 0;
let winningScore = 3;
let GameOver = false;

player1Button.addEventListener('click', function () {
    if(!GameOver){
        player1Hits += 1;
        if(player1Hits === winningScore){
            GameOver = true;
            player1Score.classList.add('winner');
            player2Score.classList.add('loser');
        }
        player1Score.textContent = player1Hits;
    }
} )

player2Button.addEventListener('click', function () {
    if(!GameOver){
        player2Hits += 1;
        if(player2Hits === winningScore){
            GameOver = true;
            player2Score.classList.add('winner');
            player1Score.classList.add('loser');
        }
        player2Score.textContent = player2Hits;
    }
} )

winningScoreSelect.addEventListener('change', function() {
   winningScore = parseInt(this.value);
   reset();
})


resetButton.addEventListener('click', reset)

function reset() {
    GameOver = false;
    player1Hits = 0;
    player2Hits = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Score.classList.remove('winner', 'loser');
    player2Score.classList.remove('winner', 'loser');
}