'use strict';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

let years = new Array(1991, 1984, 2008, 2020)
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

years = [1990, 1967, 2002, 2010, 2018 ];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[0]), calcAge(years[years.length-1])];

console.log(ages);