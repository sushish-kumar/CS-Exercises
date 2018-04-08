// find the number of braces needed to complete pairs

function bracketMatch(text) {
	let mismatchedOpen=0;
	let mismatchedClosed=0;

	for(let i=0; i<text.length; i++){
		if(text[i]==='('){
			mismatchedOpen++;
		} else {
			if(mismatchedOpen===0){
				mismatchedClosed++;
			}else{
				mismatchedOpen--;
			}
		}
	}

	bracesNeeded=mismatchedOpen+mismatchedClosed;
	console.log(bracesNeeded);
	return bracesNeeded;
}


//count how many braces needed to add to make whole pairs
// var text = '(()'; //=> 1
// var text = '(())'; //=> 0
var text = '())('; //=> 2
// var text = '(';

bracketMatch(text);


// official solution
// everytime the counter goes below zero there are more ) than (
// at end must add the diff