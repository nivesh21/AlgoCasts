// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let cleanStringA = stringA.replace(/[^\w]/g,'').toLowerCase();
    let cleanStringB = stringB.replace(/[^\w]/g,'').toLowerCase();

    let charMapA = buildMapOfString(stringA);
    let charMapB = buildMapOfString(stringB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length ) {
        return false;
    }

    for(let key in charMapA){
        if(charMapA[key] !== charMapB[key] ){
            return false;
        }
    }

    return true;
}


function buildMapOfString(str){

    let map = {};
    for(let char of str){
        if(map.hasOwnProperty(char)){
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }
    }

    return map;
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     let cleanStringA = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
//     let cleanStringB = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');

//     return cleanStringA === cleanStringB;
// }