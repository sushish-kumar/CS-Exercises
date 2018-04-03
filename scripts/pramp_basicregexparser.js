function isMatchOrig(text, pattern) {
  if(pattern.indexOf('.')<0 && pattern.indexOf('*')<0){
    return text===pattern;
  }
  return (text.match(pattern)) ? true:false;
}

//does not pass Test #5, otherwise the above works
// Input: "abbdbb", "ab*d"
// Expected: false
// Actual: true
// . is a single char wildcard
// * zero or more of prev character e.g.b* => bbb or no b


// https://www.pramp.com/challenge/KvZ3aL35Ezc5K9Eq9Llp

function isMatch(text,pattern){
  // check if str len matches, if no special chars
  if(pattern.indexOf('.')<0 && pattern.indexOf('*')<0 && text.length != pattern.length){
    return false
  }

  if(pattern===text){
    return true;
  }
  
  for(let i=0; i<pattern.length; i++){
	  if(pattern.indexOf('.') > -1){
		  pattern=pattern.slice(0,pattern.indexOf('.'))
            +text[pattern.indexOf('.')]
            +pattern.slice(pattern.indexOf('.')+1);
		  console.log('sliced',pattern);
	  }
  }
  
  // loop through all letters
  //   if . it will always equal
  //   if * it can equal if it is 0 or many
    
    let len=(text.length > pattern.length)? text.length:pattern.length;
    let flag=true;
    for(let i=0; i<len; i++){
      if(text[i] !== pattern[i]){
	    if(pattern[i] !== '.'){
          // check for *
            if(pattern[i+1]==='*'){

            }
          // else return false
        }
      }
    }

}

console.log('a.c.d'.indexOf('.'));
console.log(isMatch('aa','a')); //=> false
console.log(isMatch('aa','aa')); //=> true
console.log(isMatch('abc','a.c')); //=> true
console.log(isMatch('abbb','ab*')); //=> true
console.log(isMatch('acd','ab*c.')); //=> true
console.log(isMatch('abbdbb','ab*d.')); //=> false

