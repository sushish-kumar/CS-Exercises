/*

https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjz04

Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.


input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.

return lowest index

*/

// linear version
function indexEqualsValueSearchLinear(arr) { //O(n)
	if(arr[0] > arr.length-1){
		return -1;
	}

	for(let i=arr[0]; i <arr.length; i++){
		if(arr[i] === i){
			return i;
		}
	}

	return -1;
}

let arr = [-8,0,2,5];
arr = [-1,0,1,6];
arr = [-8,-7,0,1,6];

console.log(indexEqualsValueSearchLinear(arr));

// binary search version
// if sorted, it depends on what the starting val in index 0 is.
// if it is greater than the length return -1

// check midpoint, if midpoint is less than index go right?

function indexEqualsValueSearchLinearBinary(arr) { //O(log n) binary search
	if(arr[0] > arr.length-1){
		return -1;
	}
	if(arr[0]===0){
		retur 0;
	}

	let start=0, end=arr.length-1;
	while(start <= end){
		let i=Math.round((end-start)/2);
		if(arr[i]===i){

		}
	}

}