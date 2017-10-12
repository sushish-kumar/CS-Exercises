// https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjzN4

// Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.
//
//   In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).


function root(x, n) {
  let min=1,max=x;
  let root=(max+min)/2;

  while(root-min>=0.001){
    if(Math.pow(root, n)>x){
      max=root;
      root=(min+max)/2;

    }else{
      min=root;
      root=(min+max)/2;

    }
  }
  console.log(min,max);
  return root.toFixed(3);;
}
console.log(root(7,3));
//console.log(1.913*1.913*1.913);