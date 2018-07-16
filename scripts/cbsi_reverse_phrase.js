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
//     If alpha-numeric, concat char to tmp str (to front)
//     If space, concat tmp str to result var

// Runtime Complexity: O(n) + O(n) => O(n) => Linear (where n is the len of input str)
// Space Complexity: O(1) => Constant (where len of input does not matter)
// #############################################################

function reverse(str) {
    var result = ""; // O(1)
    var word = ""; // O(1)

    for (var i = str.length-1; i >= 0; i--) { // O(n)
    if(str[i] === " "){             //if ele is space
            if(word === "") continue;   //if prev ele was also space, skip ele
            result += word + " ";       //else concat word + space to result
            word = "";                  //clear word str
            continue;                   //continue to next element
        }
        word = str[i] + word;       //else at ele to from of word str
    }

    return result.trim(); // O(n) ?
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