// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// O(N) time
function maxChar(str) {
    let map = {};
    let strArr = str.split('');
    let maxChar = strArr.length > 0 ? strArr[0]: '';
    let maxCharCount = 0;
    
    strArr.forEach((val) => {
        if(map.hasOwnProperty(val)){
            map[val] = map[val]+ 1;
            if(maxCharCount < map[val] ){
                maxChar = val;
                maxCharCount = map[val];
            }
        } else {
            map[val] = 1;
        }
    });
    console.log(`In str: ${str} has ${maxChar} with count of ${maxCharCount}`);
    return maxChar;
}

module.exports = maxChar;
