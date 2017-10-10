function insertSort(arr) {
  // list is already sorted
  // start at rightmost cell
  // last item is the ele to be inserted
  let insert=arr.slice(-1)[0];
  let inserted=false;
  for(let i=arr.length-2;i>=0;i--){
    if(arr[i]>insert){
      arr[i+1]=arr[i];
    }
    else{
      arr[i+1]=insert;
      inserted=true;
    }
    console.log(arr.join(' '));
    if(inserted){
      break;
    }
  }
  if(!inserted){
    arr[0]=insert;
    console.log(arr.join(' '));
  }
}
insertSort([2,4,6,8,3]);