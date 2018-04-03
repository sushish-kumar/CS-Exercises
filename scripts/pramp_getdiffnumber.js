function getDifferentNumber(arr) {
  arr.sort((a,b) => a-b);
  //arr=quickSort(arr);


  for(let i=0;i<=arr[arr.length-1];i++){
    if(arr[i]!==i){
      return i;
    }
  }
  return arr[arr.length-1]+1;
}

function quickSort(arr){
  if(arr.length<2){
    return arr;
  }

  let pivot=arr.shift(); //usually the rightmost ele is chosen
  let less=[], more=[];
  let result=[];

  for(let i=0;i<arr.length;i++){
    if(arr[i]<=pivot){
      less.push(arr[i]);
    }else{
      more.push(arr[i]);
    }
  }
  return result.concat(less,pivot,more);
}

//console.log(getDifferentNumber([1,2,0,3,4,5,6]));

// https://www.pramp.com/challenge/aK6V5GVZ9MSPqvG1vwQp

// Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.
//
//   Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.
//
// Your algorithm should be efficient, both from a time and a space complexity perspectives.
//
// Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.
//
//   Analyze the time and space complexities of your algorithm.
//
//   Example:
//
// input:  arr = [0, 1, 2, 3]
//
// output: 4

function getDiffNumber(arr){
  // sort
  // do a while loop inc count check if exists in arr. if not return
  arr.sort((a,b) => a-b);
  let count = arr[0];
  let max = arr[arr.length-1];

  while(count !== max){
    if(arr.indexOf(count) === -1){
      return count;
    }
    count++;
  }
  return max+1;
}


console.log(getDiffNumber([0,1,3,4,5]));

// big o O(n*m)