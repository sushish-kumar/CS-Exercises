/*


INPUT
anagrams(['xxy', 'cab', 'bca', 'cab', 'bac', 'dash', 'shad'])

OUTPUT
[
  ['xxy'],
  ['cab', 'bca’, 'bac'],
  ['dash', 'shad']
]

Group strings that are anagram of each other into a list without duplicate.

‘cab’ is an example duplicates removed. There are 2 ‘cab’ in the input and only 1 ‘cab’ in the output.
You can think of anagram as two words that have the same count per letter. You should treat upper and lower case differently.
'xxy’ is by itself because it doesn’t have any other strings that are anagram with ’xxy’

Abc and abc are NOT anagrams
abcc and abc are NOT anagrams
abc and cab are anagrams because each of them has 1 a, 1 b, and 1 c

You can assume it’s 256 ASCII

You don’t need to compile the code, let me know when you’re done implementing the code. If you’re unsure about the syntax, just make it up.
 */

function anagram(arr){

	let map= {};
	arr=Array.from(new Set(arr)); //remove duplicates

	for(let item of arr){
		let key = item.split('').sort().join('');

		if(map.hasOwnProperty(key)){
			map[key].push(item);
		}else{
			map[key]=[item];
		}
	}

	return Object.values(map);

}
console.log(anagram(['xxy', 'cab', 'bca', 'cab', 'bac', 'dash', 'shad']));