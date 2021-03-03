'use strict';

let score = 20;
let guess = '';
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = getSecretNumber();

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🍕' + 'Correct Number ' + '❗');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😅  ' + 'Too High' : '🤭 ' + 'Too Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😠 ' + 'You lost the game.');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = getSecretNumber();
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});
