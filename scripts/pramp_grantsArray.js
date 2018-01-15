function findGrantsCap(grantsArray, newBudget) {

	let divisor=grantsArray.length;
	let cap=newBudget/divisor;
	let tmpBudget=newBudget;
	let results=[];
	grantsArray.sort((a,b)=>b-a);

	// // let sumGrants=grantsArray.reduce((currVal,acc) => acc+currVal);

	return helper(grantsArray,tmpBudget);

	function helper(grantsArray,budget){
		// console.log(tmpBudget);
		for(var i=0; i<grantsArray.length; i++){
			if(grantsArray[i]<=cap){
				results.push(grantsArray[i]);
				tmpBudget=tmpBudget-grantsArray[i];
				divisor--;
			}else{
				results.push(cap);
				tmpBudget=tmpBudget-cap;
			}
		}
		// console.log(newBudget, Math.abs(tmpBudget), grantsArray, divisor, results, cap);

		// reset everything except cap should be able to recurse without a helper
		if(tmpBudget > 0){
			cap+=(tmpBudget/divisor);
			results=[];
			tmpBudget=newBudget;
			divisor=grantsArray.length;
			return helper(grantsArray,newBudget);
		}else{
			// need to do this to provide the right output format for result
			if(((cap%2).toFixed(1)-1)*10){
				return Number(cap.toFixed(1));
			}else{
				return Math.floor(cap);
			}
		}
	}
}

var grantsArray = [2, 100, 50, 120, 1000], newBudget = 190;
// var grantsArray = [2, 4], newBudget = 3;
// var grantsArray = [2,100,50,120,167], newBudget = 400;
// var grantsArray = [21,100,50,120,130,110], newBudget = 140;
console.log(findGrantsCap(grantsArray, newBudget, 0));

/*

Solution:

function findGrantsCap(grantsArray, newBudget) {
  var n = grantsArray.length;
  grantsArray.sort(function(a,b){
    return b-a;
  })
  grantsArray.push(0)
  var sum= grantsArray.reduce(function(sum, value){
    return sum + value;
  }, 0);
  var surplus =  sum - newBudget;

  if(surplus <=0){
    return grantsArray[0]
  }
  var i=0
  for(; i<n; i++){
    surplus = surplus - ((i+1) * (grantsArray[i] - grantsArray[i+1]));
    if(surplus<=0){
      break;
    }
  }
  return grantsArray[i+1] + (-surplus / (1.0*i+1))
}

/*
What we're trying to find: budget cap for all the grants
The method:
1. sort the array of grants from greatest to least
2. find the surplus gap between the sum of the grants and the newBudget
3. if the surplus gap is negative, that means the new budget is greater than the sum of the grants anyway, so just use the highest grant as the cap
4. Otherwise, loop through the array and check which smaller and smaller grant you can use as the lower bound estimate of the cap
5. once the gap is met or go past the gap, break out of the loop
6. taper off the found cap even further by finding the exact cap.
   this means subtract the mean of the gap over the checked grants so far from the grant that is immediately smaller before it.


*/
