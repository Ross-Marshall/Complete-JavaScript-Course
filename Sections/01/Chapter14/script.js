
// Math Operators

const now = 2027;
const ageJonas = now - 1971;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
console.log(firstName +  ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;  // x = x + 10 = 25
x *= 4;   // x = x * 4 = 100
x++;      // x = x + 1
x--;      // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2020);
