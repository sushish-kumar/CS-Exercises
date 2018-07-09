// 4x4 equal
let arr=[
  [1,2,3,4],
  [5,6,7,8],
  [0,1,2,3],
  [4,5,6,7]
];
//==> 1,2,3,4,8,3,7,6,5,4,0,5,6,7,2,1

// 3x2 cols > rows
arr=[
    [4,5,6,1,2,3],
    [2,3,4,5,6,7],
    [2,3,4,9,6,5]
];
//==> 456123756943223456

// 3x4 rows > cols
arr=[
    [4,5,6],
    [2,3,4],
    [1,2,3],
    [9,8,7]
];
//==> 4,5,6,4,3,7,8,9,1,2,3,2

// Best Case Efficiency: changes pointers based on curr ele O(n) + O(m) = O(n)
// Worst Case:
// Time: O(n) * O(m) where n is the len of the arr, m is the len of sub-arr ?
// Space: O(1)
function spiralCopy(arr){ //O(n) * ( O(n) + O(m) ) = O(n) * O(m)
    let top = 0,
        bott = arr.length-1,
        left = 0, //0
        right = arr[0].length-1;
    let result = '';
    let dir = 'top';

    while((top <= bott) && (left <= right)){ //O(n)
        // top row
        if(dir==='top'){
            for(let i=left; i<=right; i++){ //O(n)
                let obj = arr[top][i];
                result += obj;
            }
            top++;
            dir='right';
            continue;
        }

        //right col
        if(dir==='right'){
            for(let i=top; i<=bott; i++){ //O(m)
                let obj = arr[i][right];
                result += obj;
            }
            right--;
            dir='bott';
            continue;
        }

        //bott row
        if(dir==='bott'){
            for(let i=right; i>=left; i--){ //O(n)
                let obj = arr[bott][i];
                console.log(result);
                result += obj;
            }
            bott--;
            dir='left';
            continue;
        }

        //left col
        if(dir==='left'){
            for(let i=bott; i>=top; i--){ //O(m)
                let obj = arr[i][left];
                result += obj;
            }
            left++;
            dir='top';
            continue;
        }

    }
    return result;
}

console.log(spiralCopy(arr));