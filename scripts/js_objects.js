var obj= {a: 1, b: 2, c: 3};

// loop
for(var key in obj) {
	console.log(key, obj[key], obj.hasOwnProperty(key));
}

// keys/values
console.log('Object.keys()',Object.keys(obj));
console.log('Object.values()', Object.values(obj));

// compare objs to check for pass by value or pass by reference
var obj1={a: 1, b: 2, c: 3};
var obj2={a: 1, b: 2, c: 3};
console.log('Object.is()',Object.is(obj1, obj2));

var str1='test';
var str2='test';
console.log('Object.is()',Object.is(str1, str2));

// shorthand loop
let iterable = [10, 20, 30];

for (let value of iterable) {
	value += 1;
	console.log(value);
}

// spread/rest
const odds=[1,3,5];
const nums=[2,4,6,...odds]; //==> [ 2, 4, 6, 1, 3, 5 ]
console.log('spread',nums);

const objFoo1={foo:'bar', x:1};
const objFoo2={foo:'baz', y:1};
const objFoos={...objFoo1, ...objFoo2};
console.log('spread',objFoos);

const {a,b, ...z} = { a: 1, b: 2, c: 3, d: 4 };
console.log('spread + destructuring', a,b,z);

function sum(x,y,z){
	return x+y+z;
}

var sumIt=[2,4,6];
console.log('spread + params',sum(...sumIt)); //==>sum.apply(null, sumIt);

// custom hashtable
function HashTable(obj){
	this.length=0;
	this.items={};
	for(let key in obj){
		this.items[key]=obj[key];
		this.length++;
	}
}

var objToHash={a: 1, b: 2, c: 3};
var myHash=new HashTable(objToHash);
console.log('myHash',myHash);


// JS Shorthand
// if/else
var x=9;
var answer='';
if(x<10){
	answer='less than 10';
}else{
	answer='greater than 10';
}
console.log(answer);

answer=(x<10) ? 'less than 10' : 'greater than 10';
console.log(answer);

answer=(x<10) ? x : 'greater than 10';
console.log(answer);

// declarations
let q,r,s=3;