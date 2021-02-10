'use strict';

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
 console.log(fruitProcessor(6,3));

 const appleOrangeJuice = fruitProcessor(2,4);
 console.log(appleOrangeJuice);

 console.log(typeof logger());