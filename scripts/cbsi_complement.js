// given [2,3,4,5], target 9
// check if 2 numbers in arr add up to target val

function pairs(arr, tar){
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        let ele = arr[i];
        let diff = tar-ele;

        if(set.has(ele)) return true; //if curr ele being checked is in set, then it is a complement

        if(!set.has(diff)) set.add(diff);

        // console.log(set);
        
    }
}

let arr=[1,4,7,2,3,6], target=9;
console.log(pairs(arr, target));