// https://www.hackerrank.com/challenges/picking-numbers
// INTERPRETATION 1
// return length of longest set of eles (in order) that are 0 or 1 abs difference

function multiset(arr){
  let sets=[];
  let tmp=[];
  let result={len:0,set:0};

  for (let i = 0; i < arr.length; i++) { //check thru arr
    for (let j = i+1; j < arr.length; j++) { //check from arr[i] on
      tmp=[arr[i]];
      for (let k = j; k < arr.length; k++) { //check every combo from arr[i] on
        if (Math.abs(tmp[tmp.length-1]-arr[k])<2) {
          tmp.push(arr[k]);
        }
      }

      if (tmp.length>result.len) {
        sets.push(tmp);
        result.len=tmp.length;
        result.set=sets.length-1;
      }
    }
  }

  console.log(result,sets);
  return result.len;
}


// https://www.hackerrank.com/challenges/picking-numbers
// INTERPRETATION 2
// return length of longest set of eles that are 0 or 1 abs difference
// each ele in the set must be only +/-1 or zero subtraction
function multiset(arr){
  let sets=[];
  let tmp=[];
  let result={len:0,set:0};

  for (let i = 0; i < arr.length; i++) { //check thru arr
    tmp=[arr[i]];
    for (let j = 0; j < arr.length; j++) { //find the next inc num
      if(i===j){continue;}
      if (Math.abs(arr[i]-arr[j]) < 2) {
        tmp.push(arr[j]);
        break;
      }
    }
    for (let j = 0; j < arr.length; j++) { //find all occurences of that number
      if(tmp.indexOf(arr[j])>=0){
        tmp.push(arr[j])
      }
    }
    if (tmp.length>result.len) {
      sets.push(tmp);
      result.len=tmp.length;
      result.set=sets.length-1;
    }
  }

  // console.log(result,sets);
  return result.len-2;
}

// let arr= [ 4, 6, 5, 3, 3, 1 ];
// let arr= [ 1, 2, 2, 3, 1, 2 ];
let arr=[ 84,
  43,
  11,
  41,
  2,
  99,
  31,
  32,
  56,
  53,
  42,
  14,
  98,
  27,
  64,
  57,
  16,
  33,
  48,
  21,
  46,
  61,
  87,
  90,
  28,
  12,
  62,
  49,
  29,
  77,
  82,
  70,
  80,
  89,
  95,
  52,
  13,
  19,
  9,
  79,
  35,
  67,
  51,
  39,
  7,
  1,
  66,
  8,
  17,
  85,
  71,
  97,
  34,
  73,
  75,
  6,
  91,
  40,
  96,
  65,
  37,
  74,
  20,
  68,
  23,
  47,
  76,
  55,
  24,
  3,
  30,
  22,
  55,
  5,
  69,
  86,
  54,
  50,
  10,
  59,
  15,
  4,
  36,
  38,
  83,
  60,
  72,
  63,
  78,
  58,
  88,
  93,
  45,
  18,
  94,
  44,
  92,
  81,
  25,
  26 ];

multiset(arr);