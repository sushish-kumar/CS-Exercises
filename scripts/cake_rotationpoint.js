// Interview Cake - Find Rotation Point - Binary Search
// https://www.interviewcake.com/question/python/find-rotation-point?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email

function rotationPoint(arr) {
  // split the arr in half
  // then start checking each item to left and right simultaenously
  // move midpoint until the prev str is < midpoint
  // this is where the rotation point is
  // convert all strs to lowercase


  let mid=Math.ceil((arr.length-1)/2);
  let midPoint=arr[mid];

  // this solution breaks if it's too close to 0th ind
  // it also wont return the index (promises?)
  // does not handle if the point is 0th or last ind

  function helper(ind,str) {
    let mid=ind, midPoint=str;

    for(let i=1; i<arr.length; i++){
      // console.log(arr[mid-i], midPoint, arr[mid+i]);

      if(midPoint < arr[mid-i]){
        return mid;
      }

      if(midPoint < arr[mid+i]){
        mid--;
      }else{
        mid++;
      }

      break;
    }

    helper(mid,arr[mid]);

  }

  return helper(mid,midPoint);
}

function rotationPoint2(arr){
  // same approach as above written w while loop
  let mid=Math.ceil((arr.length-1)/2);
  let midPoint=arr[mid];

  while(mid !== 0 || mid !== arr.length-1){

    if(midPoint < arr[mid-1]){
      return mid;
    }

    if(midPoint < arr[mid+1]){
      mid--; //go left
    }else{
      mid++; //go right
    }

    midPoint=arr[mid];

    if(midPoint===0 || midPoint===arr.length-1){
      return mid;
    }

  }
}

// FINAL RIGHT ANSWER
function rotationPoint3(arr){
  let head=0;
  let tail=arr.length-1;
  let mid=Math.round((arr.length-1)/2);

  if(arr[head] < arr[tail]){
    return head;
  }

  while(head < tail){
    if(arr[head]<arr[mid]){
      head=mid;
    }else{
      tail=mid;
    }

    mid=head + Math.floor((tail-head+1)/2);

    if(mid===tail){
      return tail;
    }
  }
}

let words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  //# <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];


console.log(

  // rotationPoint(words),
  // rotationPoint2(words),
  rotationPoint3(words),

);

