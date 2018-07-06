// given [2,3,4,5], target 9
// check if 2 numbers in arr add up to target val

// Worst Case Efficiency: nested loop O(n) * O(n) = O(n^2)
// Best Case:
// Time: O(n) where n is size of arr
// Space: O(1)
function pairs(arr, tar){
    let set = new Set();
    for(let i=0; i<arr.length; i++){ //O(n)
        let ele = arr[i];
        let diff = tar-ele;

        if(set.has(ele)) return true; //if curr ele being checked is in set, then it is a complement //O(1) because it uses an efficient hash

        if(!set.has(diff)) set.add(diff); //O(1) because it uses an efficient hash

        // console.log(set);
        
    }
    return false;
}

let arr=[1,4,7,2,3,6], target=9;
console.log(pairs(arr, target));