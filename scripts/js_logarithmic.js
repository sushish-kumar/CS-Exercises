
// LOGARITHIMIC
// Function to recursively print the right half of a string
// opposite of exponential. halves

var right = function(str){
  var length = str.length;

  // Helper function
  var help = function(index){

    // Recursive Case: Print right half
    if( index < length ){
      // Prints characters from index until the end of the array
      console.log(str.substring(index, length));

      // Recursive Call: call help on right half
      help(Math.ceil(  (index+length)/2   ));

    }

    // Base Case: Do Nothing
  }

  help(0);
}

var word = "question";
right(word);


// CONSTANT TIME O(1)
// same amount of time regardless of num inputs
// return a random ele from this array
var array = ["P", "e", "a", "n", "u", "t", "s", "R", "o", "c", "k"];

var out = array[Math.floor(Math.random()*array.length-1)];
console.log(out);

// LINEAR O(n)
// constant amount of work for each input

// QUADRATIC O(n^2) squared O(n^3) cubed
// the amount of work does not depend on num inputs
// linear to num inputs
var quad=function(){
  var people = ["Alice", "Bob", "Carol", "Dave", "Ed"];
  var n = people.length;
  var i, j;

  for(i = 0; i < n; i++){
    // Print pairs containing people[i] that haven't been printed yet.
    for(j=i+1; j<n; j++){
      console.log(people[i] + ", " +  people[j] );
    }

  }

}


// EXPONENTIAL O(x^n)
// each increase by 1 in input increases the time by n
// x is constant


var binary = function(n){
  var helper = function(i, s){
    // If there are no characters left to print, then stop printing
    if(i < 1) return [s];

    // array1.concat(array2) is a new array containing the elements of array1 followed by those of array2
    return helper(i-1, "1"+s).concat(helper(i-1, "0"+s));
  }

  return helper(n, "");
}

console.log(binary(4));
console.log('O(2^n)');
console.log('exponential');



// Recursively find Xth Fibonacci number
var count = 0;
var fib = function(x){
  // Keeps track of the amount of work done computing a Fibonacci
  count++;

  // Base Case
  if(!x) return 0;
  if(x<3) return 1;

  // Recursive calls
  return fib( x -1 )  +  fib( x -2  );
}

var f = fib(10);
console.log("It took "+count+" calculations to find that the 10th fibonacci number is "+f+".");