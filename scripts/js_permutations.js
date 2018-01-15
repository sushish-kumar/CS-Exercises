// find all unique permutations of [1,2,3]

function perms(arr) {
  let result=[];

  let ele=arr.slice(0,1);
  let slice=arr.slice(1);
  console.log(ele,slice);

  if(slice.length>2){
      return ele.concat(perms(slice));
  }

  result.push(ele.concat(slice[0]).concat(slice[1]));
  result.push(ele.concat(slice[1]).concat(slice[0]));
  return result;

  // for(let i=0; i< arr.length; i++){
  //   let ele=arr[i];
  //   let slice=arr.slice(0,i).concat(arr.slice(i+1));
  //
  //   console.log(slice.length);
  //
  //   if(slice.length>2){
  //     return perms(slice);
  //   }else{
  //     result.push([ele].concat(slice[0]).concat(slice[1]));
  //     result.push([ele].concat(slice[1]).concat(slice[0]));
  //   }
  //
  //   console.log(result);
  // }
}

// console.log(perms([1,2,3,4]));

function getAllPermutations(string) {
	var results = [];
	// console.log('str',string);

	if (string.length === 1) {
		results.push(string);
		return results;
	}

	for (var i = 0; i < string.length; i++) {
		var firstChar = string[i];
		var charsLeft = string.substring(0, i) + string.substring(i + 1);
		var innerPermutations = getAllPermutations(charsLeft);
		for (var j = 0; j < innerPermutations.length; j++) {
			results.push(firstChar + innerPermutations[j]);
		}
	}
	return results;
}
console.log(getAllPermutations('abcd'));