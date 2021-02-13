'use strict';

let teamScore = (score1, score2, score3) => (score1 + score2 + score3)/3;

function checkWinner(hiAve, loAve) {
    if (hiAve >= (2*loAve)) {
        return true;
    } else {
        return false;
    }
}

let aveDolphins = teamScore(44, 23, 71);
let aveKoalas = teamScore(65, 54, 49);

console.log(aveDolphins, aveKoalas);

function showResults(team1, score1, team2, score2) {
    if (score1 > score2) {
        if (checkWinner(score1, score2)) {
            console.log(`${team1} win (${score1} vs. ${score2})`);
        } else {
            console.log('No winner')
        }
    } else {
        if (checkWinner(score2, score1)) {
            console.log(`${team2} win (${score2} vs. ${score1})`);
        } else {
            console.log('No winner')
        }
    }
}

showResults('Dolphins', aveDolphins, 'Koalas', aveKoalas);

aveDolphins = teamScore(85,54,41);
aveKoalas = teamScore(23,34,27);
console.log(aveDolphins, aveKoalas);
showResults('Dolphins', aveDolphins, 'Koalas', aveKoalas);