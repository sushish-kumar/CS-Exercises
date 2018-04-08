/*
The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
  We cannot get the same string from both strings by deleting 2 letters or fewer.
  Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.
 */

// input:  str1 = "dog", str2 = "frog"
// output: 3
//
// input:  str1 = "some", str2 = "some"
// output: 0
//
// input:  str1 = "some", str2 = "thing"
// output: 9
//
// input:  str1 = "", str2 = ""
// output: 0
// let str1 = "ab", str2 = "ba";
// output: 2


function deletionDistance(str1, str2) {
	let count=0;
	let minStr,maxStr;
	if(str1.length > str2.length){
		maxStr=str1;
		minStr=str2;
	}else{
		maxStr=str2;
		minStr=str1;
	}
	maxStr=maxStr.split('');
	minStr=minStr.split('');

	if(str1===str2){return 0}

	if(str1==='' || str2===''){
		return str1.length || str2.length;
	}

	for(let i=0; i<=maxStr.length; i++){
		if(minStr.includes(maxStr[i])){
			count++;

		}
	}
	console.log('count',count);

	return (str1.length-count) + (str2.length-count);
}

//above solution assumes order of letters doesnt matter


function deletionDistance2(str1,str2){
	let count=0;

	if(str1===str2){return 0}

	if(str1==='' || str2===''){
		return str1.length || str2.length;
	}

	while(str1 !== str2){
		if(str1[0] !== str2[0]){
			count++;
		}
		str1=str1.slice(1);
		str2=str2.slice(1);
		console.log(str1,str2);
	}
	

}

// let str1 = "dog", str2 = "frog";
// let str1 = "some", str2 = "some";
// let str1 = "some", str2 = "thing";
// let str1 = "", str2 = "";
// let str1 = "hot", str2 = "not";
let str1 = "ab", str2 = "ba";

console.log(deletionDistance(str1,str2));
// console.log(deletionDistance2(str1,str2));
