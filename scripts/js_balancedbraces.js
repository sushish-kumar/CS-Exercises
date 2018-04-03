// Given a str of braces check if all are matching pairs
// https://www.hackerrank.com/challenges/balanced-brackets/problem

// braces must always have a pair
// string must always start with an open bracket and end with a close bracket

// begin by logging first char, must be open brace
// check if next char is equal, if not decrease count
// if count is less than 0 return false
// else return true

// for mixed brace styles check for open on count===0?

let str='{}{}{}'; //=> true
let str1='{{{}{}}}}{'; //=> false
let str2='[](){}{}'; //=> true
let str3='({()}(){}{}]'; //=> false
let str4='{([{}])}{}{}'; //=> true

// only works for single style brace
function braces(str){
	if(str.length%2){return false;}
	if(str[0]!=='(' && str[0]!=='{' && str[0]!=='['){return false;}
	
	let count=1;
	
	for(var i=1; i<str.length; i++){
		if(str[i]==='(' || str[i]==='{' || str[i]==='['){
			count++;
		}else{
			count--;
		}

		if(count<0){
			return false;
		}
	}

	return true;
}

console.log(braces(str));
console.log(braces(str1));
// console.log(braces(str2));
// console.log(braces(str3));
// console.log(braces(str4));

// if open brace, push to end of arr
// if close brace, check if the matching brace is at end of stack, if so remove
// if arr is empty return true
function stack(str) {
	if(str.length%2){return false;}
	if(str[0]!=='(' && str[0]!=='{' && str[0]!=='['){return false;}

	let bracket=[];
	let sets={
		'}':'{',
		']':'[',
		')':'('
	};
	for(var i=0; i<str.length; i++){
		if(str[i]==='(' || str[i]==='{' || str[i]==='['){
			bracket.push(str[i]);
		}else{
			// console.log(str[i], bracket.slice(-1)[0], sets[str[i]]);
			if(sets[str[i]] === bracket.slice(-1)[0]){
				bracket.pop(str[i]);
			}
		}
	}
	return (bracket.length)?false:true;
}
console.log(stack(str));
console.log(stack(str1));
console.log(stack(str2));
console.log(stack(str3));
console.log(stack(str4));



var str5="]({}{()}[}}[]{]([]{}({({(][})}{)[[(})][)})(){(}{){]][(}(][{[])(]]([[{{(]]{}([}]]){[[({]}[(}][(]){[]}])}{]])][([][([)]{[}()])}[{][]{{(]{[][){[)([}]}[{}(({{({)}()}}{{{{}[}]}){})[((}[[}[[}(";
console.log('str5',stack(str5));