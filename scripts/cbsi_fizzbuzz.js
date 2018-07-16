// Fizz Buzz
//
// Given a positive integer N, print all the integers from 1 to N.
// But for multiples of 3 print “Fizz” instead of the number and for the multiples of 5 print “Buzz”.
// Also for number which are multiple of 3 and 5, prints “FizzBuzz”.
//
// N = 5
// Return: [1 2 Fizz 4 Buzz]


// Solution I:
// Loop through 1 to N elements
// If divisible by 3 evenly, log Fizz
// If divisible by 5 evenly, log Buzz
// If divisible by 3 and 5 evenly, log FizzBuzz
// Else, print num

// Runtime: O(n) => Linear (where n is num)
// Space: O(1) => Constant (where input len does not matter)

function fizz(num) {

    for (var i = 1; i <= num; i++) {        // Runtime: O(n) Space: O(1)
        if((i%3 < 1) && (i%5 < 1)){         // Runtime: O(1)
            console.log('FizzBuzz');        // Runtime: O(1)
            continue;
        }

        if(i%3 < 1){                        // Runtime: O(1)
           console.log('Fizz');             // Runtime: O(1)
           continue;
        }

        if(i%5 < 1){                        // Runtime: O(1)
            console.log('Buzz');            // Runtime: O(1)
            continue;
        }

        console.log(i);                     // Runtime: O(1)
    }

}

// Expected Case
let num = 5;
fizz(num);

// Edge Cases
// Assume only integers are passed in (if !Number.isInteger(num), return false)
// Assume not empty argument (if num or num < 1, return false)