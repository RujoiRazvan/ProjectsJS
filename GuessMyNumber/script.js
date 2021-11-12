'use strict';

let secretNumber = Math.floor(Math.random()*20+1);
//console.log(secretNumber);

let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
        document.querySelector('.message').textContent = "No number!😋";
    }
    if(guess == secretNumber){
        document.querySelector(".message").textContent = "Correct Number🎉";
        score++;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector(".number").textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }else if(guess != secretNumber){
        document.querySelector(".message").textContent = guess > secretNumber ? "Too high 📈" : "Too low 📉";
        if(score > 0)
            score = score - 1;
        document.querySelector(".score").textContent = score;
    }

    if(score == 0){
        document.querySelector(".message").textContent = "You lost 👎";
        
        document.querySelector(".score").textContent = score;
    }
});

document.querySelector(".again").addEventListener('click', function(){
    score = 20;
    secretNumber = Math.floor(Math.random()*20+1);

    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = '';
    document.querySelector(".number").textContent = "?";
    
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';
});
