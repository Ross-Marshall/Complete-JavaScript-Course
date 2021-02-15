/*
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
//const numNeighbors = Number(prompt('How many neighbor countries does your country have'));
let numNeighbors = 3

if (numNeighbors === 1)  {
    console.log("Only 1 border!");
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

let isEnglishSpeaking = language === 'English';
let smallPopulation = population < 50;
let isIsland = false;

if (isEnglishSpeaking && smallPopulation && isIsland) {
    console.log('You should live in ' + country);
} else {
    console.log(country + ' does not meet your criteria.')
}


language = 'arabic';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place number of native speakers');
        break;
    case 'english':
        console.log('3rd Place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
} 

population = .613;

// if (population > 33) {
//     above_or_below = 'above';
// } else {
//     above_or_below = 'below';
// }

console.log(`${country}'s popultion is ${population > 33 ? 'above' : 'below'} average.`);

const capital = 'Luxembourg City';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital is ${capitalCity}`;
}

const luxembourg = describeCountry(country, population, capital);
const togo = describeCountry('Togo', 8, 'Lorne');
const columbia = describeCountry('Columbia', 50, 'Bogota');

console.log(`${luxembourg}\n${togo}\n${columbia}`);

function percentageOfWorld1(population) {
    return(`${100 * (population/7900) }%`)
}

console.log(percentageOfWorld1(population));
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(330));

const percentageOfWorld2 = function (population) {
    return(`${100 * (population/7900) }%`)
}

console.log(percentageOfWorld2(population));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(330));

const percentageOfWorld3 = population => {
    return(`${100 * (population/7900) }%`)
}

console.log(percentageOfWorld3(population));
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(330));

function describePopulation(country, population) {
    return `${country} has ${population} million people which is ${percentageOfWorld1(population)}%  of the world`;
}

console.log(describePopulation(country, population));
console.log(describePopulation('Togo', 8));
console.log(describePopulation('Columbia', 50)); 

const populations = new Array(population, 8, 50, 1441);

console.log(populations.length === 4 ? true : false);

const percentages = new Array(percentageOfWorld3(population), percentageOfWorld3(8), percentageOfWorld3(50), percentageOfWorld3(1441));
console.log(percentages); 

const neighbors = ['Germany', 'France', 'Belgium'];
console.log(neighbors);

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop('Utopia');
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central Europen country.')
}

let change_index = neighbors.indexOf('France');
let change_country = neighbors[change_index];
neighbors[change_index] = 'Republic of ' + change_country;
console.log(neighbors);
*/
