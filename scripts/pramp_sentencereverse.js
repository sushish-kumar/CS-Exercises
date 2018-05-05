// https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4
function reverseWords(arr){
	// separate eles into words divided by space
	// push into front of new arr
	let tmp='', output=[];
	for(let i=0; i<arr.length; i++){
		if(arr[i] !== '  '){
			tmp+=arr[i];
		}else{
			output.unshift(tmp);
			output.unshift(arr[i]);
			tmp='';
		}
		if(i===arr.length-1){
			output.unshift(tmp); tmp='';
		}
	}
	tmp=[];
	for(let i=0; i<output.length; i++){
		if(output[i]=== '  '){
			tmp.push(output[i]);
		}else{
			tmp=tmp.concat(output[i].split(''));
		}

	}
	return output
}

function reverseArr2(arr){

}

let arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
	 'm', 'a', 'k', 'e', 's', '  ',
	 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ];

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
	//  'm', 'a', 'k', 'e', 's', '  ',
	//  'p', 'e', 'r', 'f', 'e', 'c', 't' ];

// console.log(arr.join(''));
 
reverseWords(arr);