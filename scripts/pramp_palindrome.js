function checkPalindrome(inputString) {
  // loop thru str backwards, compare if strs equal OR
  // loop thru str, compare first/last, second/second last etc. if make it to middle, return true

  for(let i=0;i<Math.trunc(inputString.length/2);i++){
    if(inputString[i] !== inputString[inputString.length-1-i]){return false;}
  }
  return true;
}
console.log(checkPalindrome('hlbeeykoqqqokyeeblh'));