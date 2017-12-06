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

let arr = ['x','y','z'];
let str = "xyyzyzyx"; // zyx

console.log(

  getShortestUniqueSubstring(arr, str),
  getShortest(arr,str)

);


