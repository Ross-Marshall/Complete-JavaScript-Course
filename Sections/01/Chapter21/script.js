// 5 falsy values 0, '', undefined, null, NaN - Converts to False when converted to a boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(8/0));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean('0x23dfg'));
console.log(Boolean('xFABC'));

const money = 100;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job.");
}

// let height;
// let height = `5'9"`;
let height = 0;
if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}