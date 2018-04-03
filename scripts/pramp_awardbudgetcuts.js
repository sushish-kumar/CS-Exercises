// https://www.pramp.com/challenge/r1Kw0vwG6OhK9AEGAyWV

// find average
// find those below average
// add the difference back across remaining grants until total equals budget

function findGrantsCap(arr,budget){
	let divisor=arr.length;
	let cap=budget/arr.length;
	let tmpBudget=0;
	
	arr=arr.sort((a,b) => a-b);

	while(tmpBudget<budget){
		tmpBudget=0;
		divisor=arr.length;
		arr.forEach(ele => {
			if(ele <= cap){
				tmpBudget+=ele;
				divisor--;
			}else{
				tmpBudget+=cap;
			}
		});

		if(tmpBudget===budget){
			return Number(cap.toFixed(1)); //must be 1 decimal place and no decimal if 0
		}else{
			cap+=(budget-tmpBudget)/divisor;
		}
	}
}



// var grantsArray = [2, 100, 50, 120, 1000], newBudget = 190; // => 47
var grantsArray = [2,100,50,120,167], newBudget = 400; // => 128

console.log(findGrantsCap(grantsArray, newBudget));