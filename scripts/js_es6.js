// From http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/


// CLASSES
// Point
// Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor.
//
//   It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties.


class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	plus(obj){
		this.x+=obj.x;
		this.y+=obj.y;
		return this;
	}
}

console.log(new Point(1, 2).plus(new Point(2, 1)));


// Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. Speaker is a simple type that exposes a speak method which, when called, logs the given text along with the speaker's name. Shouter is a subtype of Speaker which shouts its text and makes it uppercase.

// Class Inheritance > Animal > Dog

function Speaker(name, verb) {
	this.name = name;
	this.verb = verb || "says";
}
Speaker.prototype.speak = function(text) {
	console.log(this.name + " " + this.verb + " '" + text + "'");
};

function Shouter(name) {
	Speaker.call(this, name, "shouts");
}
Shouter.prototype = Object.create(Speaker.prototype);
Shouter.prototype.speak = function(text) {
	Speaker.prototype.speak.call(this, text.toUpperCase())
};

console.log(new Shouter("Dr. Loudmouth").speak("hello there"));

class Speaker2{
	constructor(name,verb){
		this.name = name;
		this.verb = verb || "says";
	}
	speak(text){
		console.log(this.name + " " + this.verb + " '" + text + "'");
	}
}

class Shouter2 extends Speaker2{
	constructor(name){
		super(name,'shouts'); //set in parent
		// super.speak('text');
	}

	speak(text) {
		super.speak(text.toUpperCase());
		// console.log(`Would you look at that -- ${this.name} has no fat!`);
	}
}

console.log(new Shouter2("Dr. Loudmouth2").speak("hello there"));

// getters

class Speaker3 {
	constructor(name, verb) {
		this.name = name
		this._verb = verb || "says"
	}
	speak(text) {
		console.log(this.name + " " + this.verb + " '" + text + "'")
	}

	get verb(){
		return this._verb;
	}
}

class Shouter3 extends Speaker3 {
	constructor(name) {
		super(name, "shouts")
	}
	speak(text) {
		super.speak(text.toUpperCase())
	}
}

new Shouter3("Dr. Loudmouth3").speak("hello there");



// OBJECT LITERALS

// Use a single object literal to create an object that is indistinguishable from a Point instance, without calling the Point constructor.

class SPoint {
	constructor(x, y) {
		this.x = x, this.y = y
	}
	add(other) {
		return new SPoint(this.x + other.x, this.y + other.y)
	}
}

var fakePoint = {x:1,y:1};
console.log(fakePoint instanceof SPoint); //do not want it to be an instance so false


// Configurable property
// Fill in the startNode function using a single object literal. The function should return an object with type and value properties containing the value of the arguments by those names, and a third property, named by the sourceProperty option, set to the value of the sourceValue option.

function startNode(type, value, options) {
	return {type,value,[options.sourceProperty]:options.sourceValue}
}

console.log(startNode("Identifier", "foo", {
	sourceProperty: "src",
	sourceValue: "bar.js"
}));
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}


// Object literals.3:
// Singleton
// Add a get method to the ids object, which returns the next id and increments its next counter. Use the short method syntax.

var ids = {
	next: 0,
	get: function() {this.next++; return this.next-1; }
};

console.log(ids.get());
// → 0
console.log(ids.get());
// → 1



// BLOCK SCOPE
// Closing over Scope
// ES5
var callbacks = [];
function creator(i){
	return function() { console.log(i) };
}
for (var i = 0; i < 10; i++) {
	callbacks.push(creator(i));
}
callbacks[2]();

// // ES6 or just use Let!!!
var callbacks = [];
for (let i = 0; i < 10; i++) {
	callbacks.push(function() { console.log(i) });
}
callbacks[2]();

// Block scope.2:
// Constant non-constance
// Does the fact that account is constant mean that we can't update password? Why, or why not? And if not, how could we make it so that we can't?

const account = {
	username: "marijn",
	password: "xyzzy"
};
account.password = "s3cret";
console.log(account.password);

// No because an object literal is mutable. But if it were a primitive data type like str or num it would not be updatable.



// Block scope.3:
// Hoist the class
// This code produces an error. So apparently, unlike functions, classes are not hoisted to the top of their scope. (They are block-scoped.)
//
// What could be the reason for this?

// let s = new Something()
// class Something {};

// The declaration runs before the class is defined.



// ARROW FUNCTIONS
// Arrow functions.1:
// Accounting
// Write an expression using higher-order array methods (say, filter and reduce) to compute the total value of the machines in the inventory array.

const inventory = [
	{type:   "machine", value: 5000},
	{type:   "machine", value:  650},
	{type:      "duck", value:   10},
	{type: "furniture", value: 1200},
	{type:   "machine", value:   77}
];

let totalMachineValue = inventory.reduce((acc,currVal,ind,arr) => { return acc+currVal.value }, 0);

console.log(totalMachineValue);

// Arrow functions.2:
// Sorted array
// The code for this exercise implements a wrapper for working with sorted arrays. Its constructor takes a comparison function that compares two elements and returns a number, negative if the first is less than the second, zero when they are equal, and positive otherwise (similar to what the sort method on arrays expects).
//
// Rewrite the code to use an ES6 class. Then, rewrite the loop to use the ES6 array method findIndex, which is like indexOf, but takes a function instead of an element as argument, and returns the index of the first element for which that function returns true (or returns -1 if no such element was found). For example [1, 2, 3].findIndex(x => x > 1) yields 1. Use arrow functions for all function expressions.

function SortedArrayES5(compare) {
	this.compare = compare;
	this.content = [];
}
SortedArrayES5.prototype.findPos = function(elt) {
	for (var i = 0; i < this.content.length; i++) {
		if (this.compare(elt, this.content[i]) < 0) break
	}
	return i;
};
SortedArrayES5.prototype.insert = function(elt) {
	this.content.splice(this.findPos(elt), 0, elt);
};


// ES6
class SortedArray{
	constructor(compare){
		this.compare=compare;
		this.content=[];
	}

	findPos(elt){
		return this.content.findIndex((ele,ind) => {
			return this.compare(ele, this.content[ind]);
		});
	}

	insert(elt){
		this.content.splice(this.findPos(elt), 0, elt);
	}
}

var sorted = new SortedArray(function(a, b) { return a - b });
sorted.insert(5);
sorted.insert(1);
sorted.insert(2);
sorted.insert(4);
sorted.insert(3);
console.log("array:", sorted.content);

// Arrow functions.3:
// Precedence
// Where does an arrow function end? At a closing bracket or semicolon, of course. But does a comma denote the end? Is the body of the function in this example x + y, 0, or just x + y?
//
//   Is there anything else that will end an arrow function body? Experiment.

console.log([1, 2, 3].reduce((x, y) => x + y, 0));

// It's x+y only because the argument after the comma is actually a new parameter that the reduce higher order array method accepts
// If the function body only has one line with no brackets it ends it by default
// Parens will also end a function body in arrow functions

var funcTest=(x,y) => ({x,y}); //wrapping an arrow function's function body in parens does an implicit return for the body
console.log(funcTest(1,2));

// DESTRUCTURING
// Destructuring.1:
// Avoiding disaster
// This function uses destructuring for argument parsing. But it has a problem: it crashes when the caller passes an option object without an enable property. Since all options have defaults, we'd like to not crash in this case. Can you think of a clean way to fix this problem?
//
// If you also want to allow not passing in an option object at all, how would you solve that?

function go(options) {
	let {speed = 4,
		enable: {hyperdrive = false,
			frobnifier = true}} = options;
	console.log("speed=", speed,
	  "hyperdrive:", hyperdrive,
	  "frobnifier:", frobnifier)
}

go({speed: 5});


function go(options={}) {
	console.log({...{speed :4,
	  enable: {hyperdrive :false,
	  frobnifier :true}}, ...options});
	let {speed = 4,
		enable: {hyperdrive = false,
			frobnifier = true}} = {...{speed:4,enable:{hyperdrive:false,frobnifier:true}},...options};
	console.log("speed=", speed,
	  "hyperdrive:", hyperdrive,
	  "frobnifier:", frobnifier)
}

go({speed:5});

//the let destructures the object into a string of variables for that scope. while setting it to the options obj at the same time.
// but because options does not have an enable property, it breaks
// must set default enable properties if none exist or destructure together somehow



// Destructuring.2:
// Default argument
// It would be nice to be able to call our `lastIndexOf` function without providing the third argument, and have it default to starting at the end of the array. It would be even nicer if we could express this with an ES6 default argument value. Can we?
//
//   In which scope are default arguments evaluated? (Experiment to find out.)
function lastIndexOf(arr, elt, start=arr.length-1) {
	console.log(start);
	for (let i = start; i >= 0; i--)
		if (arr[i] === elt) return i;
	return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));



// Destructuring.3:
// Improve this code
// The detectCollision function searches through an array of rectangles and returns the first rectangle that the given point is inside of.
//
//   Use destructuring and a higher-order function to make this code cleaner. You might want to use the new array method find, which takes a function as argument, and returns the first element in the array (the element, not its index) for which the function returns true.

function detectCollisionES5(objects, point) {
	for (let i = 0; i < objects.length; i++) {
		let object = objects[i];
		if (point.x >= object.x && point.x <= object.x + object.width &&
		  point.y >= object.y && point.y <= object.y + object.height)
			return object
	}
}

const myObjects = [
	{x:  10, y: 20, width: 30, height: 30},
	{x: -40, y: 20, width: 30, height: 30},
	{x:   0, y:  0, width: 10, height:  5}
];

function detectCollision(objects, point) {
	return objects.find((object,i) => {
		if (point.x >= object.x &&
			point.x <= object.x + object.width &&
			point.y >= object.y &&
			point.y <= object.y + object.height){
			return object;
		}
	});
}

console.log('dCollision',detectCollision(myObjects, {x: 4, y: 2}));


// SPREAD
// Spread.1:
// Spread out
// Simplify these three functions by using the spread syntax.
//
//   The first one, replace, replaces part of an array with elements from another array.
//
//   The second one, copyReplace, does the same, but creates a new array rather than modifying its argument.
//
//   The third one is used to record a birdwatcher's sightings. It takes first a timestamp (say, a Date), and then any number of strings naming birds. It then stores these in the birdsSeen array.


//ES6
function replace(array, from, to, elements) {
	// array.splice.apply(array, [from, to - from].concat(elements)); //ES5
	testArray=[...array.slice(0,from), ...elements, ...array.slice(to)];
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]); //=> [1, 2, 3, 4, 5, 6]
console.log('testArray',testArray);

function copyReplace(array, from, to, elements) {
	// return array.slice(0, from).concat(elements).concat(array.slice(to)) //ES5
	return [...array.slice(0,from), ...elements, ...array.slice(to)];
}

console.log('copyReplace',copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));

let birdsSeen = [];
function recordBirds(time) {
	// birdsSeen.push({time, birds: Array.prototype.slice.call(arguments, 1)}); //ES5
	birdsSeen=[ ...birdsSeen, {time}, {birds: [...arguments].slice(1)} ];
}

recordBirds(new Date, "sparrow", "robin", "pterodactyl"); //=> [{time:	Wed Jan 31 2018 13:38:05 GMT-0500 (EST), birds:	["sparrow", "robin", "pterodactyl"]
console.log('recordBirds',birdsSeen);


// TEMPLATE STRINGS
// Template strings.1:
// The tooling team
// Given the data in the starting code, use a template string to produce the following string. Make sure the numbers, names, and team name actually come from the data.
//
//   There are 4 people on the tooling team.
//   Their names are Jennie, Ronald, Martin, Anneli.
// 2 of them have a senior role.

const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
	{name: "Ronald", role: "junior"},
	{name: "Martin", role: "senior"},
	{name: "Anneli", role: "junior"}];

let message = `There are ${people.length} people on the ${teamName} team.\n Their names are${people.map(i => ' '+i.name)}.\n${people.filter(ele => ele.role==='senior').length} of them have a senior role.`;

console.log(message);


// Template strings.2:
// HTML templating
// Write a function html that can be used as a template string tag, and produces a string in which all the interpolated pieces are escaped as HTML. Use the supplied escapeHTML function to do the escaping.
//
//   Remember that a tag function gets an array of in-between strings as its first argument, and then the interpolated values as further arguments.
function html() {
	// Your code here
}

const mustEscape = '<>&"'
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`)

function escapeHTML(string) {
	return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
	.replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}


// MAPS & SETS
// Map & Set.1:
// Graph traversal
// The code for this exercise generates a random graph—an array of nodes, each of which has a value and an array of edges to other nodes.
//
//   Your task is to implement the function connectedValue which, starting at a node, traces through the graph by following edges, summing up the total value of all nodes connected to the start node (including the start node itself).
//
// The recursive exploring is the tricky part. You can use either a worklist (an array of nodes that have to be explored) or a recursive function. Use a Set object to track the nodes that you've already visited (to avoid going around in circles endlessly when the graph contains a cycle).
//
// The Set methods you'll need for that are .add(value) and .has(value).

// Generate a random graph
const graph = [];
for (let i = 0; i < 50; i++)
	graph.push({value: Math.random(), edges: []})
for (let i = 0; i < 100; i++) {
	let from = graph[Math.floor(Math.random() * graph.length)];
	let to   = graph[Math.floor(Math.random() * graph.length)];
	if (from.edges.indexOf(to) != -1) continue;
	from.edges.push(to);
}

function connectedValue(node) {
	// Your code here
}