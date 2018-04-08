// https://www.pramp.com/challenge/XdMZJgZoAnFXqwjJwnpZ

/*

Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

  In your solution, try to reduce the memory usage while maintaining time efficiency. Prove the correctness of your solution and analyze its time and space complexities.

  Note: the order of the pairs in the output array should maintain the order of the y element in the original array.

  Examples:

input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []

 */

function findPairsWithGivenDifference(arr, k) {
	let result=[];

	arr.sort();

	for(let x=0; x<arr.length; x++){
		for(let y=0; y<arr.length; y++){
			if(arr[x]-arr[y]===k){
				result.push([arr[x],arr[y]]);
			}
		}
	}

	console.log(result);
	return result;
}

// space complexity O(1) Constant Timed
// time complexity O(n^2) Nested Loop Quadratic Polynomial




let arr = [0, -1, -2, 2, 1], k = 1;  //=> [[1, 0], [0, -1], [-1, -2], [2, 1]]
// let arr= [4,1], k=3; //=> [[4,1]]
// let arr = [1, 7, 5, 3, 32, 17, 12], k = 17; //=> []


findPairsWithGivenDifference(arr,k);

function findPairsWithGivenDifference2(arr, k) {
	arr.sort(); //O(n log n)
	let first=0, last=1;
	let result=[];

	console.log(arr);
	while(first < arr.length && last < arr.length){
		console.log(arr[last],arr[first],arr[last] - arr[first]);
		if(first !== last && arr[last] - arr[first]===k){
			result.push([arr[last], arr[first]]);
			first++;
			last++;
		}else if(arr[last]-arr[first] < k){
			last++;
		}else if(arr[last]-arr[first] > k){
			first++;
		}
	}

	console.log(result);
	return result;
}

findPairsWithGivenDifference2(arr,k);


