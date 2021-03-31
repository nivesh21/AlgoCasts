// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var first = 0;
    var last = str.length -1;
    str = str.split('');
    if(first >= last) return str;
    while(first < last){
        var tmp = str[first];
        str[first++] = str[last]; 
        str[last--] = tmp;
    }

    return str.join('');
}

module.exports = reverse;
