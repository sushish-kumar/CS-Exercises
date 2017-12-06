function isMatch(text, pattern) {
  if(pattern.indexOf('.')<0 && pattern.indexOf('*')<0){
    return text===pattern;
  }
  return (text.match(pattern)) ? true:false;
}

//does not pass Test #5
// Input: "abbdbb", "ab*d"
// Expected: false
// Actual: true

console.log(isMatch('aa','a'));

// https://www.pramp.com/challenge/KvZ3aL35Ezc5K9Eq9Llp