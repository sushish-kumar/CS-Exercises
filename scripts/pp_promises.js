//--------------------------------------
// Overview:
//
// You may find it useful to reference Promise documentation for this exercise:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Also, feel free to ask questions!


//--------------------------------------
// Part 1:
// Implement a method `delay(ms, value)` that returns a promise that resolves in
// `ms` milliseconds with the value `value`


function delay(ms, value) {
	// Part 1 TODO: add your implementation here
	var promise1=new Promise((res,rej) => {
		setTimeout(res, ms, value);
	});
	return promise1;
}

// Such that "hi" gets logged out after 1 second:
// delay(1000, "hi").then(message => console.log("[Part 1]:" , message));



//--------------------------------------
// Part 2:
// Write a method that behaves similarly to the way `Promise.all` works
// For arguments, it takes a list of promises
// Its return value is a promise that resolves with an Array of the resolved values of all
// the promises passed in once they have all resolved


function all(list) {
	let result=[];
	let count=0;
	let newPromise=new Promise((res,rej) => {
		for(let i=0; i<list.length; i++){
			list[i].then(msg => {
				count++;
				result[i]=msg;
				if(count===list.length){res(result)};
			});
		}

		// ideally `res(['it', 'works'])`
		return result;
	});

	console.log(result);

	// Part 2 TODO: add your implementation here
	return newPromise;
}

// Such that "it works" gets logged out after 2 seconds

all([delay(2000, 'it'), delay(1000, 'works')])
.then(values => {
	console.log("[Part 2]:", values.join(' ')); // Note: `values` here is the array ['it', 'works']
});

