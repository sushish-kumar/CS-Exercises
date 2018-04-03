// https://www.pramp.com/challenge/wqNo9joKG6IJm67B6z34

// check for the shortest substr that contains all the letters in arr (any order)
// substr must be consecutive slices
// if arr=['x','y','z'] the following are valid substrs xyyz, zyyx, yzx



function getShortestUniqueSubstring(arr, str) {
  // check starting with shortest possible str length  (arr.length)
  // move down index taking slices of min len starting with 0 (0-2, 1-3)
  // if no matches at min len, move to search for min len +1
  // else return the first match (this will be the shortest match)
  // continue until one if found
  // if not return ''

  let min=arr.length;
  let max=str.length;
  let substr=true;

  while(min<=max){
    //str
    for(let i=0; i<str.length; i++){
      substr=true;

      //arr
      for(let x=0; x<arr.length; x++ ){
        if(str.slice(i,i+min).indexOf(arr[x])<0){
          substr=false;
          break;
        }
      }

      if(substr){
        return str.slice(i,i+min);
      }
    }

    min++;
  }

  return '';
}




function getShortest(arr,str) {
  let head=null;
  let tail=str.length-1;
  let map=new Map();

  // init map
  for(let item of arr){
    map.set(item,0);
  }

  // find head index
  for(let i=0; i<str.length; i++){
    if(map.has(str[i])){
      head=i;
      break;
    }
  }
  //if no match at all in entire str, stop here
  if(head<0) return '';

  // find tail index
  for(let i=tail; i>=head; i--){
    if(map.has(str[i])){
      tail=i;
      break;
    }
  }
  // if match len === arr len (min len) return match
  if(tail-head+1===map.size) return str.substring(head,tail+1);

  for(let i=head;i<=tail;i++){
    if(str.substring(i+1,tail+1)){

    }
  }

  // console.log(map);
}




function getShorty(arr,str){

  // to get strs- loop thru str check off at least one occurence of each until all are checked.
  // get begInd and endInd to get length
  // move to next char
  // save min count as min length, save str
  // restart currLen count and check
  // if currLen > minLen stop and move to next char
  // if currLen < minLen, save minCount, save str
  // shortest min len can always only be arr len

  // console.log({...arr}); //=> convert str to obj using destructuring

  let min=arr.length;
  let beg=0, end=0;
  let checker=Array(min).fill(0);
  let result='';
  
  let count=0;

  for(var i=0; i<str.length; i++){
	  beg=i;

	  for(var x=i; x<str.length; x++){
		  count++;

		  if(checker[arr.indexOf(str[x])] === 0){
			  checker[arr.indexOf(str[x])]=1;
		  }

		  // console.log(checker,'count',count);

		  // console.log(checker.indexOf(0));
		  if(checker.indexOf(0) === -1){
              return str.slice(beg,x+1);
		  }else{
		      if(count>=min){break;}
          }
      }

	  checker=Array(min).fill(0);
      count=0;
  }

  return result;
}



function getShortness(arr,str) {
    // shortest str will always be arr len <== INCORRECT
    // move down arr inc by each char
    // check for arr eles in each substr
    // if a char doesnt exist break and set to false

    let min=arr.length;
	let doesMatch=true;

    for(var i=0; i<str.length -min+1; i++){
      doesMatch=true;

      let substr=str.slice(i, i+min);

      for(var x=0; x<arr.length; x++){
          if(!substr.includes(arr[x])){
              doesMatch=false;
              break;
          }
      }

      if(doesMatch){return substr;}
    }
}

let arr = ['x','y','z'];
let str = "xyyzyzyx"; // zyx



console.log(

  // getShortestUniqueSubstring(arr, str),
  // getShortest(arr,str),
  // getShorty(arr,str),
  getShortness(arr,str)

);


