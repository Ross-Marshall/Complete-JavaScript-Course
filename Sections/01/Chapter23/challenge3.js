// let dolphins1 = 96;
// let dolphins2 = 108;
// let dolphins3 = 89;

// let koalas1 = 88;
// let koalas2 = 91;
// let koalas3 = 110;

let dolphins1 = 97; 
let dolphins2 = 112; 
let dolphins3 = 101; 

let koalas1 = 109;
let koalas2 = 95;
let koalas3 = 123;

// let dolphins1 = 97; 
// let dolphins2 = 112; 
// let dolphins3 = 101; 

// let koalas1 = 109;
// let koalas2 = 95;
// let koalas3 = 106;

// let dolphins1 = 97; 
// let dolphins2 = 108; 
// let dolphins3 = 91; 

// let koalas1 = 109;
// let koalas2 = 95;
// let koalas3 = 96;

let teamScore1AtLeast100 = (dolphins1 > 100) || (koalas1 > 100);
let teamScore2AtLeast100 = (dolphins2 > 100) || (koalas2 > 100);
let teamScore3AtLeast100 = (dolphins3 > 100) || (koalas3 > 100);


let dolphinsAverage;
let koalasAverage;

let dolphinCount = 0;
let dolphinTotal = 0;
if (teamScore1AtLeast100) {
    dolphinCount += 1;
    dolphinTotal = dolphinTotal + dolphins1;
} 

if (teamScore2AtLeast100) {
    dolphinCount += 1;
    dolphinTotal = dolphinTotal + dolphins2;
} 

if (teamScore3AtLeast100) {
    dolphinCount += 1;
    dolphinTotal = dolphinTotal + dolphins3;
} 

console.log('Dolphins total: ' + dolphinTotal);
console.log('Dolphins count: ' + dolphinCount);

dolphinsAverage = Math.floor(dolphinTotal / dolphinCount); 

let koalasCount = 0;
let koalasTotal = 0;
if (teamScore1AtLeast100) {
    koalasCount += 1;
    koalasTotal = koalasTotal + koalas1;
} 

if (teamScore2AtLeast100) {
    koalasCount += 1;
    koalasTotal = koalasTotal + koalas2;
} 

if (teamScore3AtLeast100) {
    koalasCount += 1;
    koalasTotal = koalasTotal + koalas3;
} 

console.log('Koalas total: ' + koalasTotal);
console.log('Koalas count: ' + koalasCount);

koalasAverage = Math.floor(koalasTotal / koalasCount);

if ( dolphinsAverage > koalasAverage ) {
    console.log('Dolphins win ' + dolphinsAverage + ' - ' + koalasAverage)
} else if ( dolphinsAverage < koalasAverage ) {
    console.log('Koalas win ' + koalasAverage + ' - ' + dolphinsAverage)
} else {
    console.log('Tie match ' + koalasAverage + ' - ' + dolphinsAverage)
}

console.log(typeof Infinity);