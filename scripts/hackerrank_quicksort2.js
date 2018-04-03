function quickSort(arr){
  if(arr.length<2){
    return arr;
  }

  let pivot=arr.shift(); //usually the rightmost ele is chosen
  let less=[], more=[];
  let result=[];

  for(let i=0;i<arr.length;i++){
    if(arr[i]<=pivot){
      less.push(arr[i]);
    }else{
      more.push(arr[i]);
    }
  }
  // console.log(less,pivot,more);
  // console.log(result.concat(less,pivot,more).join(' '));
  return result.concat(quickSort(less),pivot,quickSort(more)).join(' ');
}
console.log(quickSort([ 5, 8, 1, 3, 7, 9, 2, 4, 6 ]));