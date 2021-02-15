'use strict';

let bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

bill = 100;

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}

console.log(calcTip(100));

const bills = new Array(125, 555, 44);

console.log(bills);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) );
console.log(tips);

const totals = new Array( bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2] );
console.log(totals);