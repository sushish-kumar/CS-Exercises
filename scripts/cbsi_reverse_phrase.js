// Reverse Phrase

// Given an input string, reverse the string word by word.
//
// Given s = "the sky is blue",
// return "blue is sky the".
//
// A sequence of non-space characters constitutes a word.
// Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
// If there are multiple spaces between words, reduce them to a single space in the reversed string.


// Solution I:
//     Loop through every element from end of str to beg.
//     If alpha-numeric, concat char to tmp str (to front)
//     If space, concat tmp str to result var


function reverse(str) { // O(n)
    var result = "";
    var word = "";

    for (var i = str.length-1; i >= 0; i--) { // O(n)
        if(str[i] === " "){
            result += word + " ";
            word = "";
            continue;
        }
        word = str[i] + word;
    }

    return result.trim(); // O(n) ?

}

const str = "the sky is blue";
console.log(reverse(str));


// examples