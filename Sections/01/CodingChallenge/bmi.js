console.log('Coding Challenge #1 - BMI Comparison');
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

let markBMI = weightMark / ( heightMark ** 2 );
let johnBMI = weightJohn / ( heightJohn ** 2 );
let markHigher = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigher);

weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

markBMI = weightMark / ( heightMark ** 2 );
johnBMI = weightJohn / ( heightJohn ** 2 );
markHigher = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigher); 