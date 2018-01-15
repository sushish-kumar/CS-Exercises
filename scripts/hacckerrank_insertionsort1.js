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

function insertionSort(){
	let insert=arr.slice(-1)[0];

	for(var i=arr.length-2; i>=0; i--){
		if(arr[i]>insert){
			arr[i+1]=arr[i];
			console.log(arr.join(' '));
		}else{
			arr[i+1]=insert;
			console.log(arr.join(' '));
			break;
		}
		if(i===0){
			arr[i]=insert;
			console.log(arr.join(' '));
		}
	}

    //let pop=arr.pop();
    //let ind=arr.findIndex(ele => ele > pop);
    //console.log( arr.slice(0,ind).concat(pop).concat(arr.slice(ind)).join(' ') );
}
