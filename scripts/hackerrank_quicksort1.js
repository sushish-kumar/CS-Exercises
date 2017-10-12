// partition sort

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
  return result.concat(less,pivot,more).join(' ');
}
quickSort([4,5,3,7,2]);