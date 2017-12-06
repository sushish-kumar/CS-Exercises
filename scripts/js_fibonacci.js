// fibonacci
// find the nth fibonacci number by adding the previous 2 numbers in the series


// while loop with push/shift
function fib(n){
  if(n<2) return n;

  let count=0;
  let arr=[0,1]; // let arr=[0,1,1,2,3,5,8,13,21];

  while(count <= n-2){
    arr.push(arr[0]+arr[1]);
    arr.shift();
    count++;
  }

  return arr[1];
}

// recursive
function fib2(n){
  if(!n) return 0;
  if(n<3) return 1;
  return fib2(n-1) + fib2(n-2);
}

// fib(5)
//   fib(4) + fib(3)
//     fib(3) + fib(2) + fib(2) + fib(1)
//       fib(2) + 1  +  2 + 1
//         1

// standard iterative w arr
function fib3(n) {
  if(n<2) return n;

  let arr=[0,1];
  for(let i=2; i<=n; i++){
    arr[i]= arr[i-1] + arr[i-2];
  }

  return arr.slice(-1)[0];
}

console.log(
  
  fib(8),
  fib2(5),
  fib3(9)

);


