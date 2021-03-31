/* Reversing a string*/

function reverse(str){
	return str.split('').reverse().join('');
}

function reverse(str){
	let reversed = '';

	for(let character of str){
		reversed = character + reversed;
	}
	return reversed;
}


function reverse(str){
	return str.split('').reduce((reversed, character) => {
		return  character + reversed;
	}, '');
}


/* Palindrome */

function palindrome(str){
	let start = 0;
	let last = str.length -1;
	const arr = str.split('');
	while(start <= last){
		if(arr[start++] != arr[last--]){
			return false;
		}
	}
	return true;
}


function palindrome(str){
	let reversed = str.split('').reverse().join('');
	return str === reversed;
}


/* Reverse an integer */

function reverseInt(n){
	let strNumber = Math.abs(n).toString();
	strNumber = strNumber.split('').reverse().join('');

	return (n < 0 ) ? parseInt(strNumber) * -1: parseInt(strNumber);
}

/* Max Chars  */
/* Same character as anagram */
/* Repeated characters */
/* Most common characters */

function maxChars(str){
	if(str === undefined  || str.length === 0 ){
		return '';
	}

	let charMap = {};
	let maxCharCount = 0;
	let maxChar = str.split('')[0];

	for(let char of str){
		if(charMap.hasOwnProperty(char)){
			charMap[char] += charMap[char] ;
			if(maxCharCount < charMap[char]){
				maxCharCount = charMap[char];
				maxChar = char;
			}
		} else {
			charMap[char] = 1;
		}
	}

	return maxChar;	
}

/* FIZZBUZZ*/

function fizzBuzz(n){
	for(let i=1; i <= n; i++){
		if((i%3 === 0) && (i%5 === 0) ){
			console.log("fizzBuzz");
		} else if (i%3  == 0) {
			console.log("fizz");
		} else if(i%5 == 0) {
			console.log("buzz");
		} else {
			console.log(i);
		}
	}
}

/* Array Chunk */

/*
([1,2,3,4,5], 2) ----> [[1,2],[3,4], [5]]

*/

function chunk(array, size){
	let chunked = [];
	for(let element of array){
		let last = chunked[chunked.length - 1] ;
		if(!last || last.length === size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}

	return chunked;
}


function chunk(array, size){
	let chunked = [];
	let index = 0;

	while (index < array.length){
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}

function anagrams(stringA, stringB){
	let cleanedStringA = strginA.replace(/[^\w]/g, "").toLowerCase();
	let cleanedStringB = strginB.replace(/[^\w]/g, "").toLowerCase();
	let stringAMap = {};
	let stringBMap = {};
	for(let char in stringA){
		if(stringAMap.hasOwnProperty(char)){
			stringAMap[char] = stringAMap[char] + 1;
		} else {
			stringAMap[char] = 1;
		}
	}

	for(let char in stringB){
		if(stringBMap.hasOwnProperty(char)){
			stringBMap[char] = stringBMap[char] + 1;
		} else {
			stringBMap[char] = 1;
		}
	}

	if(cleanedStringA.length !== cleanedStringB.length || Object.keys(stringAMap) !== Object.keys(stringBMap){
		return false;
	}

	for(let char of stringAMap){
		if(stringAMap[char]  !== stringBMap[char]){
			return false;
		}
	}

	return true;
}


function capitalize(str){
	let strArray = str.split(' ');
	let result = [];

	for(let word of strArray){
		result.push(word[0].toUpperCase() + word.slice(1));
	}
	return result.join(' ');
}

function capitalize(str){

	let result = "";
	if(str.length === 0 ){
		return '';
	}

	result += str[0].toUpperCase();
	for(let i=1; i < str.length ; i++){
		if( str[i - 1] == ' ' ) {
			result += str[i].toUpperCase();
			
		} else {
			result += str[i];
		}

	}

	return result;
}

// Find the vowels
function vowels(str){
	const vowelMap = {"a","e","i","o","u"};
	let count = 0;
	let checker = ["a", "e", "i", "o", "u"];
	for(let char in str.toLowerCase()){
		// if(vowelMap.hasOwnProperty(char)){
		// 	count = count+1;
		// }
		if(checker.includes(char)){
			count++;
		}
	}

	return count;
}


function vowels(str){
	const matches = str.match(/[aeiou]/gi);

	return matches ? matches.length : 0;
}

function fib(n){
	const results = [0, 1];


	for (let i = 2; i <=n; i++){
		const a = results[i-1];
		const b = results[i-2];

		results.push(a+b);
	}

	return results[n];
}

function fib(n){
	if(n<2) {
		return n;
	}

	return fib(n-1) + fib(n-2);
}

// Fib with memoization

function memoize(fn){
	const cache = {};

	return function( ...args){
		if(cache[args]){
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	}
}

fib = fib(n);

function fib(n){
	if(n<2) {
		return n;
	}

	return fib(n-1) + fib(n-2);
}


class Queue{
	constructor(){
		this.data = [];
	}

	add(val){
		this.data.unshift(val);
	}

	remove(){
		return this.data.pop();
	}

	peek(){
		let temp = this.data.pop();
		this.data.push(temp);
		return temp;
	}
}
