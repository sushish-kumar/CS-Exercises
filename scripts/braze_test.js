// Write a class IntegerTracker with these methods:
//
// track(int) - Receives an integer for tracking.
// get_max() - Returns the max (int) of all integers seen so far.
// get_min() - Returns the min (int) of all integers seen so far.
// get_mean() - Returns the mean (float) of all integers seen so far.
// get_mode() - Returns the mode (most frequent) (int) of all integers seen so far.
//
// Ensure each method, including track, runs in constant time (O(1) time complexity). You may assume track will be called at least once. State any other assumptions you make in your solution.
//
// For example, in ruby:
// integer_tracker = IntegerTracker.new()
// integer_tracker.track(1)
// integer_tracker.track(0)
// integer_tracker.get_max() # => 1
// integer_tracker.get_min() # => 0
// integer_tracker.get_mean() # => 0.5
// integer_tracker.get_mode() # => 1 (1 or 0 is acceptable)
// integer_tracker.track(3)
// integer_tracker.track(1)
// integer_tracker.get_max() # => 3
// integer_tracker.get_min() # => 0
// integer_tracker.get_mean() # => 1.25
// integer_tracker.get_mode() # => 1

function IntegerTracker(){
	this.integers=[];
	this.mode={count:0,int:0};
	// this.integers={};
}

IntegerTracker.prototype.track=function(int){
	this.integers.push(int);
	this.integers=quickSort(this.integers);
	// can also check for next biggest ele slice and place into arr
	// arr should be already sorted
};

IntegerTracker.prototype.get_max=function(int){
	return this.integers[this.integers.length-1];
};

IntegerTracker.prototype.get_min=function(int){
	return this.integers[0];
};

IntegerTracker.prototype.get_mean=function(){
	return this.integers.reduce((acc,currVal) => acc+currVal)/this.integers.length;
};

IntegerTracker.prototype.get_mode=function(int){
	let resultObj={};
	// loop through arr to create obj for keys and count
	// check against max modeCount
	for(var i=0; i<this.integers.length; i++){
		if(resultObj.hasOwnProperty(this.integers[i])){
			resultObj[this.integers[i]]++;
		}else{
			resultObj[this.integers[i]]=1;
		}

		if(resultObj[this.integers[i]]>=this.mode.count){
			this.mode.count=resultObj[this.integers[i]];
			this.mode.int=this.integers[i];
		}
	}

	return this.mode.int;

};

function quickSort(arr){
	// choose rightmost ele as pivot, arrange by more or less
	// recurse until only 2 items left in arr

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
	return result.concat(quickSort(less),pivot,quickSort(more));
}

let myInt=new IntegerTracker();
console.log('myInt =',myInt);

// myInt.track(6);
// myInt.track(6);
// myInt.track(4);
// myInt.track(5);

// console.log('myInt =',myInt);
// console.log('myInt_min =',myInt.get_min());
// console.log('myInt_max =',myInt.get_max());
// console.log('myInt_mean =',myInt.get_mean());
// console.log('myInt-mode =',myInt.get_mode());

console.log(myInt.track(1));
console.log(myInt.track(0));
console.log(myInt.get_max()); //# => 1
console.log(myInt.gzet_min()); //# => 0
console.log(myInt.get_mean()); //# => 0.5
console.log(myInt.get_mode()); //# => 1 (1 or 0 is acceptable)
console.log(myInt.track(3));
console.log(myInt.track(1));
console.log(myInt.get_max()); //# => 3
console.log(myInt.get_min()); //# => 0
console.log(myInt.get_mean()); //# => 1.25
console.log(myInt.get_mode()); //# => 1