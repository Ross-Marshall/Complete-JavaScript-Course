'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Pre - ES6
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123', 2, 800);
createBooking('LM123', 2);
createBooking('LM123', 5);

createBooking('LM123', undefined, 1000);
createBooking('LM123', 0, 1000);
createBooking('LM123', false, 1000);


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23245535353,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23245535353) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // flightNum = flight;
// const passenger = jonas;
// const flightNum = flight;

//console.log(flight, passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 77728838832);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*

First Class Function - 

Higher Order Function - Function that receives another function.



const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time.
const high5 = function () {
  console.log('High five');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const obj = {
  name: 'Hayse',
  firstName: 'A Leeeeeecoln!',
};

console.log(obj);

console.log(obj.name.split('y'));

console.log(obj.firstName.toString('hello'));

*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greet2 = aGreet => aName => console.log(`${aGreet} ${aName}`);

greet2('Hola')('Jose');
