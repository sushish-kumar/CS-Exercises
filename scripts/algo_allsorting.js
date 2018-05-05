function bubbleSort(arr){ //O(n^2)
	// traverse the arr n times
	// each time compare adj eles [0],[1] etc, swap highest value to rightmost ele

	for(let i=0; i<=arr.length; i++){ //O(n)
		for(let j=0; j<arr.length; j++){ //O(n)
			if(arr[j]>arr[j+1]){
				let tmp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
			}
		}
	}

	return arr;
}

// partition sort
function quickSort(arr){ //O(n log n) ==> O(n^2)
	// choose a pivot point value
	// sort eles either to the left for less than or right for greater than
	// recurse with smaller and smaller arr slices

	if(arr.length<2){
		console.log(arr);
		return arr;
	}

	let pivot=arr.pop();
	let left=[], right=[];
	for(let i=0;i<arr.length;i++){
		if(arr[i]<pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}

	return [].concat(quickSort(left),pivot,quickSort(right));
}

function mergeSort(arr){
	
}

function countSort(arr){

}

function insertionSort(arr){
	// loop thru arr
	// compare i to the previous ele until it is less than
	// insert it here

	// loop thru arr
	// add ele to output arr to the left of next highest ele

    // [6,5,3,2,1,4]
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j>=0; j--){
			if(arr[j] < arr[j-1]){
				let tmp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = tmp;
			}
		}
	}

	return arr;
}

function heapSort(arr){
	
}

function pancakeSort(arr){

}

let arr=[5,3,2,1,4];
bubbleSort(arr);

arr=[6,5,3,2,1,4];
console.log('quick',quickSort(arr));
arr=[6,5,3,2,1,4];
console.log('ins',insertionSort(arr));
