'use strict';

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.friends);

console.log(jonas.lastName);
console.log(jonas['lastName']);
const lastName = 'lastName'
console.log(jonas[lastName]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//jonas.'first'+nameKey;

const interestedIn = 'age' //prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');
console.log(interestedIn);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request.'); 
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and is best friend is named ${jonas.friends[0]}.`);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    age: 0,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function() {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function() {
            return `${this.firstName} is a ${this.age} year old ${this.job} and he ${this.hasDriversLicense ? 'has' : 'does not have'} a drivers license.`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//console.log(jonas['calcAge'](1991));


console.log(jonas.getSummery())

*/

// for loop keeps running while condition is true.
for (let rep = 1 ; rep <= 10 ; rep++ ) {
    console.log(`Lifting weights repetition ${rep}`);
}
