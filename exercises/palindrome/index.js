// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// O(N/2) N===> length of String
function palindrome(str) {
    let first = 0;
    let last = str.length -1;
    let palin = false;
    str = str.split('');
    if(first >= last) return true;

    while (first < last){
        if(str[first++] === str[last--] ){
            palin = true;
        } else {
            palin = false;
            break;
        }
    }
    return palin;
}

module.exports = palindrome;
