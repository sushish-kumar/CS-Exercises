// return the sum of a consecutive series of nums 1...n

function factorial(n) {
  let sum=0;
  for(let i=1; i<=n; i++){
    sum+=i;
  }
  return sum;
}

function factorial2(n) {
  if(n===1){
    return 1;
  }
  return n + factorial(n-1);
}

// factorial(5)
//   5 + factorial(4)
//     5 + 4 + factorial(3)
//       5 + 4 + 3 + factorial(2)
//         5 + 4 + 3 + 2 + factorial(1)
//           5 + 4 + 3 + 2 + 1

function factorial3(n){
  let sum=0;
  while(n>=1){
    sum+=n;
    n--;
  }
  return sum;
}

console.log(

  factorial(5),
  factorial2(5),
  factorial3(5)


);


