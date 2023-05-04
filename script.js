const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

function init(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.innerText = 0;
    score1El.innerText = 0;
    current0El.innerHTML = 0;
    current1El.innerHTML = 0;

    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();
function switchPlayer()
{
    document.getElementById(`current--${activePlayer}`).innerText = 0;
    currentScore = 0;

    activePlayer = activePlayer == 0 ? 1 : 0;
    // умова ? якщо правда(true):якщо не правда(false)
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
btnRoll.addEventListener('click', () =>{
    if(playing)
    {
      const dice = Math.trunc(Math.random()*6 +1);
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;
      if(dice !=1)
      {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).innerText = currentScore;
      }
      else
      {
        switchPlayer();
      }
    }
});

btnHold.addEventListener('click', () =>{
    if(playing)
    {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).innerText = scores [activePlayer];
        if(scores[activePlayer] >= 100)
        {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else{
            switchPlayer ();
        }
    }
});

btnNew.addEventListener('click', init);
