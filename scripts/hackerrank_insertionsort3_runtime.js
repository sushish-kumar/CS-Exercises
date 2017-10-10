function insertSort(arr){
  let insert=arr[0];
  let sorted=[arr[0]];
  let shifts=0;

  // if not sorted
  for(let i=1;i<arr.length;i++){
    sorted.push(0);
    sorted=sort(arr[i],sorted);
    // console.log(sorted.concat(arr.slice(sorted.length)));
  }
  console.log('total num shifts',shifts);

  function sort(insert,arr){
    // if sorted, just use this function
    let inserted=false;
    for(let i=arr.length-2;i>=0;i--){
      if(arr[i]>insert){
        arr[i+1]=arr[i];
        shifts++;
        if(i===0 && !inserted){
          arr[0]=insert;
        }
      }
      else{
        arr[i+1]=insert;
        inserted=true;
        break;
      }
    }
    return arr;
  }

}

let arr=[ 406,
  157,
  415,
  318,
  472,
  46,
  252,
  187,
  364,
  481,
  450,
  90,
  390,
  35,
  452,
  74,
  196,
  312,
  142,
  160,
  143,
  220,
  483,
  392,
  443,
  488,
  79,
  234,
  68,
  150,
  356,
  496,
  69,
  88,
  177,
  12,
  288,
  120,
  222,
  270,
  441,
  422,
  103,
  321,
  65,
  316,
  448,
  331,
  117,
  183,
  184,
  128,
  323,
  141,
  467,
  31,
  172,
  48,
  95,
  359,
  239,
  209,
  398,
  99,
  440,
  171,
  86,
  233,
  293,
  162,
  121,
  61,
  317,
  52,
  54,
  273,
  30,
  226,
  421,
  64,
  204,
  444,
  418,
  275,
  263,
  108,
  10,
  149,
  497,
  20,
  97,
  136,
  139,
  200,
  266,
  238,
  493,
  22,
  17,
  39 ];
insertSort(arr);

