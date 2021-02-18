'use strict';
/*
console.log('Coding Challenge #2 - BMI Comparison');
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

let markBMI = weightMark / ( heightMark ** 2 );
let johnBMI = weightJohn / ( heightJohn ** 2 );
let markHigher = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigher);

if (markHigher) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Marks's ${markBMI}`)
}

weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

markBMI = weightMark / ( heightMark ** 2 );
johnBMI = weightJohn / ( heightJohn ** 2 );
markHigher = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigher);

if (markHigher) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Marks's ${markBMI}`)
}


const john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: '',
    weight: 92,
    height: 1.95,
    bmi: 0,
    calcBMI: function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    },
    setFullName: function () {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this;
    },
    bmiDisplay: function() {
        return `${this.fullName}'s BMI (${this.bmi}).`;
    }
}


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: '',
    weight: 78,
    height: 1.69,
    bmi: 0,
    calcBMI: function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    },
    setFullName: function (f) {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;
    },
    bmiDisplay: function() {
        return `${this.fullName}'s BMI (${this.bmi}).`;
    }
}


console.log(john, mark);

john.setFullName();
mark.setFullName();

john.calcBMI();
mark.calcBMI();

console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.bmiDisplay() + ', ' + mark.bmiDisplay());
} else {
    console.log(mark.bmiDisplay() + ', ' + john.bmiDisplay());
}

*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1200, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}

console.log(calcTip(100));
console.log(bills[0]);

for (let i = 0 ; i < bills.length ; i++ ) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

let arr = [12, 343, 1223, 11, 556, 334, 112, 55, 235];

function calcAve(a) {
    let total = 0
    for (let i=0; i < a.length ; i++) {
        total = total + a[i];
    }
    return total / a.length;
}

console.log(calcAve(arr));

let arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(calcAve(arr2));

arr2 = [1,2,3,4,5,6,7,8,9];
console.log(calcAve(arr2));

arr2 = [1001, 322323233233, 323, 34545454454,  77775775755, 3332234. -6333, 223233, 224678867, 656544, 44433, 11221, -100000000];
console.log(calcAve(arr2));
