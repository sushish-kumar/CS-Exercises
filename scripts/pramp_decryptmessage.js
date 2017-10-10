function decrypt(word) {
  var ary=[];
  var result=[];

  //fill ary with ascii codes
  for(let i=0;i<word.length;i++){
    ary.push(word.charCodeAt(i));
  }
  console.log('Step3',ary);

  //convert codes to Step2 codes
  for(let i=0;i<word.length;i++){
    if(i===0){
      result.push(word.charCodeAt(i)-1);
    }else{
      //console.log(word.charCodeAt(i), ary[i-1], word.charCodeAt(i)-ary[i-1]);
      result.push(check(word.charCodeAt(i)-ary[i-1]));
      ary[i]=result[result.length-1]+ary[i-1];
    }
  }
  console.log('Step2',ary);
  console.log('Step1',result);

  //convert final codes back to chars
  for(let i=0;i<word.length;i++){
    result[i]=String.fromCharCode(result[i]);
  }

  return result.join('');

  function check(aCode){
    if(aCode>=97 && aCode<=122){
      return aCode;
    }
    return check(aCode+26);
  }
}
console.log('My Solution ==>',decrypt('dnotq'));


// PRAMP SOLUTION
function decryptPramp(word){
  var secondStep = 1;
  var decryption = "";

  for(let i=0;i<word.length;i++){
    newLetterAscii = word.charCodeAt(i);
    newLetterAscii = newLetterAscii - secondStep;

    while (newLetterAscii < 'a'.charCodeAt(0)){
      newLetterAscii += 26;
    }
    decryption = decryption + String.fromCharCode(newLetterAscii);
    secondStep += newLetterAscii;
  }

  return decryption
}
console.log('Pramp Solution ==>',decryptPramp('dnotq'));
