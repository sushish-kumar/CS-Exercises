// Suppose a circularly sorted array is rotated at some pivot unknown to you beforehand. The array will not contain duplicates.

// Find the index of the smallest element (the number of rotations)

// Examples
// [1, 3, 4, 6, 7, 9, 10, 11, 13] - 0 rotations
// index = 0 // Output/Solution

// [11, 13, 1, 3, 4, 6, 7, 9, 10] - 2 rotations
// index = 2 // Output/Solution

// [10, 11, 13, 1, 3, 4, 6, 7, 9] - 3 rotations
// index = 3 // Output/Solution

//3,4 => cant pivot

function getPivot(arr){ //Time: O(n) Space: O(1)
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    if(arr[0] <= arr[arr.length-1]){ return 0; }

    while(low <= high){ //O(n)
        mid = low + Math.round((high-low)/2);
        console.log('mid',mid);

        if(arr[mid] < arr[mid-1]){ return mid; }

        if(arr[mid] < arr[low]){
            high = mid;
        }else{
            low = mid;
        }
    }
    return mid;
}

let arr = [7,1];
arr = [8];
arr = [4,5,1];//2
arr = [1,2,5]; //0
arr = [8,4,5,6,7]; //1
arr = [4,5,6,1,2,3]; //3
arr = [4,5,6,7,1,2,3]; //4

console.log(getPivot(arr));