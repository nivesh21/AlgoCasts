// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign ===> Provides 1 or -1 for sign;

function reverseInt(n) {
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;

// function reverseInt(n) {
//     var str = n.toString();
//     var sign;
//     if(str.startsWith('-')){
//         sign = str.split('-');
//         return parseInt(str.slice(0,1) + sign[1].split('').reverse().join(''));
//     }else {
//         return parseInt(str.split('').reverse().join(''));
//     }
// }