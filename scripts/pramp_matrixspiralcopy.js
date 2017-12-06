// Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

// https://www.pramp.com/challenge/ml9AwEA42YHK735G3lq5

function spiralCopy(arr){
  // for(let item of arr) {
  //   console.log(item);
  // }

  // if item is first or last read entire item (backwards, if last) and remove
  // else take last item (or first if descending in the arr)
  // continue from start until arr is empty (recursive)
  // this solution alters the matrix. pramp advises against it

  let arrLen=arr.length;
  let output=[];

  for(let i=0;i<arr.length;i++){
    if(i===0){
      for(let item of arr[i]){
        output.push(item);
      }
      continue;
    }
    if(i===arr.length-1){
      for(let item of arr[i].reverse()){
        output.push(item);
      }
      continue;
    }
    output.push(arr[i].pop());
  }
  arr.pop();arr.shift();

  for (let i=arr.length-1;i>=0;i--) {
    output.push(arr[i].shift());
  }

  if(arrLen){
    return output.concat(spiralCopy(arr));
    // return [...output, ...spiralCopy(arr)];
  }else{
    return output;
  }
}

function spiralCopy2(arr) {
  // move thru arr from toprow, rightmost col, bottrow, leftmost col
  // by changing indices
  
  let maxRows=arr.length-1;
  let maxCols=arr[0].length-1;
  let row=0, col=0;
  let output=[];

  while(row<=maxRows && col<=maxCols){
    // toprow moves up cols
    for(let i=col; i<=maxCols; i++){
      output.push(arr[row][i]);
    }
    row++;

    // rightmost col moves down rows
    for (let i=row; i<=maxRows; i++) {
      output.push(arr[i][maxCols]);
    }
    maxCols--;

    // bottrow moves down cols
    for (let i=maxCols; i>=col; i--) {
      output.push(arr[maxRows][i]);

    }
    maxRows--;

    // leftmost col moves up rows
    for (let i=maxRows; i>=row; i--) {
      output.push(arr[i][col]);
    }
    col++;
  }
  
  return output;
}

console.log(


  spiralCopy( [ [1,    2,   3,  4,    5],
    [6,    7,   8,  9,   10],
    [11,  12,  13,  14,  15],
    [16,  17,  18,  19,  20] ]),

  spiralCopy2( [  [1,    2,   3,  4,    5],
                  [6,    7,   8,  9,   10],
                  [11,  12,  13,  14,  15],
                  [16,  17,  18,  19,  20] ])


);

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]




// PRAMP SOLUTION
// function spiralCopy(inputMatrix) {
//   let rows=inputMatrix.length;
//   let cols=inputMatrix[0].length;
//   let arr=[];
//
//   let top=0,right=cols-1,bottom=rows-1,left=0;
//
//   while(arr.length<rows*cols){
//     //top
//     for(let i=left;i<=right;i++){
//       arr.push(inputMatrix[top][i]);
//     }
//     top++;
//
//     //right
//     for(let i=top;i<=bottom;i++){
//       arr.push(inputMatrix[i][right]);
//     }
//     right--;
//
//     //bottom
//     if (arr.length<rows*cols) {
//       for(let i=right;i>=left;i--){
//         arr.push(inputMatrix[bottom][i]);
//       }
//       bottom--;
//     }
//
//
//     //left
//     if (arr.length<rows*cols) {
//       for(let i=bottom;i>=top;i--){
//         arr.push(inputMatrix[i][left]);
//       }
//       left++;
//     }
//
//   }
//
//
//   console.log(arr);
//   return arr;
// }