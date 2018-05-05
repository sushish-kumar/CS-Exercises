// https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5LM1

/*

Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array.
You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.

 */

// SOLUTION 1
function pancakeSort(arr) {
	if(arr.length<=0){
		return arr;
	}

	let ind=arr.indexOf(findMax(arr))+1;
	arr=flip(arr, ind); //flip to get max to first pos
	arr=flip(arr, arr.length); //flip again to put in last pos

	function flip(arr,k){
		//arr=[1,2,3,4,5,6] k=3
		let result=[];
		for(let i=0; i<arr.length; i++){
			if(i<k){
				result.unshift(arr[i]);
				continue;
			}
			result.push(arr[i]);
		}
		//console.log('flip',result);
		return result;

	}

	function findMax(arr){
		let max=arr[0], ind=0;

		for(var x=1; x<arr.length; x++){
			if(arr[x]>max) {
				max=arr[x];
				ind=x;
			}
		}
		return max;
	}

	return pancakeSort(arr.slice(0,arr.length-1)).concat(arr.slice(arr.length-1));
}

let arr=[1,2,3,4,5,6], k=3;
let arr2=[2, 1, 4, 3, 5];
let arr3=[1, 5, 4, 3, 2];
console.log(pancakeSort(arr3));



// SOLUTION 2
function pancakeSort2(arr) {
	for(let i=arr.length-1; i>=0; i--){
		let maxIndex=findMaxIndex(arr,i);
		arr=flip(arr, maxIndex); //flip to get max to first pos
		arr=flip(arr, i); //flip again to put in last pos
	}

	function flip(arr,k){
		//arr=[1,2,3,4,5,6] k=3

		let result=[];
		for(let i=0; i<arr.length; i++){
			if(i<=k){
				result.unshift(arr[i]);
				continue;
			}
			result.push(arr[i]);
		}
		return result;

	}

	function findMaxIndex(arr,index){
		let ind=0;
		for(var x=1; x<=index; x++){
			if(arr[x]>arr[ind]) {
				ind=x;
			}
		}
		return ind;
	}

	return arr;
}

console.log(pancakeSort2(arr3));



