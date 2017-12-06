
console.log('Practice makes Perfect!');

function drawHTree(x,y,len,depth){
  if(depth===0){
    return null;
  }

  let ave=len/2;

  let x1=0,y1=y,x2=0,y2=y;
  x1=x-ave;
  y1=y+ave;
  x2=x+ave;
  y2=y-ave;

  //horiz line
  drawLine(x1,y,x2,y);

  //vert lines
  drawLine(x1,y1,x1,y2);
  drawLine(x2,y1,x2,y2);

  drawHTree(x1,y1,len-Math.sqrt(2),depth-1);
  drawHTree(x1,y2,len-Math.sqrt(2),depth-1);
  drawHTree(x2,y1,len-Math.sqrt(2),depth-1);
  drawHTree(x2,y2,len-Math.sqrt(2),depth-1);

}

function drawLine(x,y,a,b){
  console.log(x,y,a,b);
  return x,y,a,b;
}

drawHTree(3,1,2,2);

// An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.
//
// It can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.
//
// Here are some examples of H-trees at different levels of depth:
//
//   alt depth = 1
//
// alt depth = 2
//
// alt depth = 3
//
// Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.
//
//   Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).
//
// Analyze the time and space complexity of your algorithm. In your analysis, assume that drawLine's time and space complexities are constant, i.e. O(1).


// https://www.pramp.com/challenge/EmYgnOgVd4IElnjAnQqn