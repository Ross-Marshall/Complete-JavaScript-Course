const hasDriversLicense = true // A
const hasGoodVision = true     // B

console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to driver');
// } else {
//     console.log('Someone else should drive.')
// }

const isTired = false // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log('Sarah is able to driver');
} else {
    console.log('Someone else should drive.');
}
