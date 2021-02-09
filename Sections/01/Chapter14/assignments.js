let country = "Luxembourg";
let continent = "Europe";
let population = 0.613;
let language = 'French'

console.log("Country    : " + country);
console.log("Continent  : " + continent);

console.log('Each half = ' + population / 2 + ' million');
population = population + 0.000001;
console.log(population);

let findlandPopulation = 6;
console.log(findlandPopulation < population);

let averagePopulation = 33;
console.log(averagePopulation > population);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);