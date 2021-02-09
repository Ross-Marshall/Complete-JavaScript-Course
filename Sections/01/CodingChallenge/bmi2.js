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

// 