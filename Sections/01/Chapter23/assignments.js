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

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) {
    console.log(`${country} population is above average.`);
} else {
    console.log(`${country} population is below average.`);
}

population = 13;
if (population > 33) {
    console.log(`${country} population is above average.`);
} else {
    console.log(`${country} population is below average.`);
}

population = 130;
if (population > 33) {
    console.log(`${country} population is above average.`);
} else {
    console.log(`${country} population is below average.`);
}

//const numNeighbors = prompt('How many neighbor countries does your country have');
/*const numNeighbors = Number(prompt('How many neighbor countries does your country have'));

if (numNeighbors === 1)  {
    console.log("Only 1 border!");
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}*/

let isEnglishSpeaking = language === 'English';
let smallPopulation = population < 50;
let isIsland = false;

if (isEnglishSpeaking && smallPopulation && isIsland) {
    console.log('You should live in ' + country);
} else {
    console.log(country + ' does not meet your criteria.')
}