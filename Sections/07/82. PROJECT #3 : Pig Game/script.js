'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0'); // Use Class - faster
const score1El = document.getElementById('score--1'); // Use ID
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
