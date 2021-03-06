// Reverse Phrase (JS)
// Given an input string, reverse the string word by word.
//
// Given s = "the sky is blue",
// return "blue is sky the".
//
// A sequence of non-space characters constitutes a word.
// Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
// If there are multiple spaces between words, reduce them to a single space in the reversed string.


// #############################################################
// Solution I:
//     Loop through every element from end of str to beg.
//     If alpha-numeric, concat char to tmp str (to front of tmp str)
//     If space, concat tmp str to result var

// Runtime Complexity: O(n) + O(n) => O(n) => Linear (where n is the len of input str)
// Space Complexity: O(1) => Constant (where len of input does not matter)
// #############################################################

function reverse(str) {
    var result = "";                                                                // Space: O(1)
    var word = "";                                                                  // Space: O(1)

    for (var i = str.length-1; i >= 0; i--) {                                       // Runtime: O(n) Space: O(1)
        if(str[i] === " "){             //if ele is space                           // Runtime: O(1)
            if(word === "") continue;       //if prev ele was also space, skip ele  // Runtime: O(1)
            result += word + " ";           //else concat word + space to result    // Runtime: O(1)
            word = "";                      //clear word str                        // Runtime: O(1)
            continue;                       //continue to next element
        }
        word = str[i] + word;           //else at ele to from of word str           // Runtime: O(1)
    }

    return result.trim();                                                           // Runtime: O(n) ?
}

// #############################################################
// Solution II:
//     Is there a more optimal solution ?

// Runtime Complexity: ?
// Space Complexity: ?
// #############################################################

function reverseOptimal(str){

}


// Expected Case
let str = "the sky is blue";
console.log(reverse(str));

// Edge Cases
str = "sky ";               //one word, one space
console.log(reverse(str));

str = "";                   //empty str
console.log(reverse(str));

str = "the  sky  is  blue"; //double spaces
console.log(reverse(str));

str = " ";                  //single space
console.log(reverse(str));

str = " apple ";            //space in first pos and last pos
console.log(reverse(str));

// Questions

// What's the runtime of str.len?
// What's the runtime of str.trim()'?
// Does it matter?
// Can we leverage a data structure like a hash map? Like set or map in JS?

// (Worst Case for both is Linear O(n) because we can loop thru each ele and keep a count or check for space.)
// (Assume it's the most efficient possible given it was implemented by JS)
// (In most cases, it doesn't matter because we take the worst case runtime which would be O(n) + the default runtime is always most efficient possible.)
// (No, we cannot make use of a data structure to increase efficiency.)