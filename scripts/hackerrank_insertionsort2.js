function insertSort(arr){

  let insert=arr[0];
  let sorted=[arr[0]];

  for(let i=1;i<arr.length;i++){
    sorted.push(0);
    sort(arr[i]);
    console.log(sorted.concat(arr.slice(sorted.length)).join(' '));
  }

  function sort(insert){
    let inserted=false;
    for(let i=sorted.length-2;i>=0;i--){
      if(sorted[i]>insert){
        sorted[i+1]=sorted[i];

        if(i===0 && !inserted){
          sorted[0]=insert;
        }
      }
      else{
        sorted[i+1]=insert;
        inserted=true;
        break;
      }
    }
  }

}
insertSort([3,2,5,6,2,9,4,2,1]);