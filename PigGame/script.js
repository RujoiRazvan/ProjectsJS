'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');

const dices = document.querySelector(".dice");

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let activePlayer, currentScore, scores, playing;

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    dices.classList.add('hidden');
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    currentScore1El.textContent = 0;
    currentScore0El.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();

const switchPlayer = function(){
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    document.getElementById('current--'+ activePlayer).textContent = 0;
    currentScore = 0;
    
    activePlayer = activePlayer === 0 ? 1 : 0;
}
// rolling the dice
btnRoll.addEventListener('click', function(){
    if(playing){
        //generating a random dice
        const dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        
        dices.classList.remove('hidden');
        dices.src = 'dice-' + dice + '.png';
        
        if(dice !== 1){
            currentScore += dice;
            document.getElementById('current--'+ activePlayer).textContent = currentScore;
            
        }else{
            switchPlayer();
    }
}

});

btnHold.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById('score--'+ activePlayer).textContent = scores[activePlayer];
    

    if(scores[activePlayer] >= 30){
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        playing = false;
    }else{
       switchPlayer();
    }
}

});


btnNew.addEventListener('click', function(){
    init();
});
