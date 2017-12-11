function Node(val,next) {
  this.data=val;
  this.next=(next)?next:null;
}

let node1=new Node(1);
let node2=new Node(2);
let node3=new Node(3);
let node4=new Node(4);
node1.next=node2;
node2.next=node3;
node3.next=node4;

// PRINT linked list
function printNode(head) {
  if(head){
    console.log(head);
    if(head.next) printNode(head.next);
  }
}

console.log('\n PRINT LINKED LIST \n');
printNode(node1);






// INSERT node at tail
// head can be null
function insertTail(listHead,nodeValue) {
  let currNode=listHead;
  let newNode=new Node(nodeValue);

  while(currNode.next){
    currNode=currNode.next;
  }

  currNode.next=newNode;

  return listHead;

}

//recursion
function insertTail2(listHead,nodeValue){
  if(listHead){
    if(listHead.next===null){
      listHead.next=new Node(nodeValue);
    }else{
      insertTail2(listHead.next,nodeValue);
    }
  }else{
    listHead=new Node(nodeValue);
  }
  return listHead;
}

console.log('\n INSERT AT TAIL \n');
insertTail2(node1,5);
printNode(node1);






// INSERT node at head
function insertHead(listHead,nodeValue){
  let node=new Node(nodeValue,listHead);
  node.next=listHead;
  listHead=node;
  console.log(listHead);
  return listHead;
}

console.log('\n INSERT AT HEAD \n');
insertHead(node1, 6);





// INSERT node at position
// head can be null
// position is int nums away from head
// head is position 0
function insertAt(listHead,nodeValue,position) {
  let count=1;
  let currNode=listHead;
  let newNode=new Node(nodeValue,currNode);

  if(position===0){ //insert at head
    newNode.next=currNode;
  }

  while(count !== position){
    currNode=currNode.next;
    count++;
  }

  // this should give us the node we will be inserting after
  // e.g. we want to insert at position 4, returned node will be at position 3.

  let oldNextNode=currNode.next;
  currNode.next=newNode;
  newNode.next=oldNextNode;

  return listHead;
}

console.log('\n INSERT AT POS \n');
insertAt(node1,9,2);  // [1,2,3,4,5] ==> [1,2,9,3,4,5]
printNode(node1);





// DELETE node at position
// position is an int nums away from 0 (head)
function deleteAt(listHead,position){
  if(position===0){
    listHead=listHead.next;
  }else{
    let count=1;
    let currNode=listHead;
    while(count !== position){
      currNode=currNode.next;
      count++;
    }
    // set this node to the deleted node's next node
    currNode.next=currNode.next.next;
  }

  return listHead;
}

console.log('\n DELETE AT \n');
deleteAt(node1,3); // [1,2,3,4,5] ==> [1,2,3,5]
printNode(node1);

// PRINT LIST IN REVERSE
function printListReverse(head) {
  let arr=[];
  let currNode=head;
  while(currNode){
    arr.unshift(currNode);
    currNode=currNode.next;
  }
  // console.log(arr);
  for(let item of arr){
    console.log(item);
  }
}

console.log('\n PRINT LIST IN REVERSE \n');
printListReverse(node1);

// REVERSE A LINKED LIST
function reverseList(head) {
  let arr=[];
  let currNode=head;
  while(currNode){
    arr.unshift(currNode);
    currNode=currNode.next;
  }

  head=arr[0];
  currNode=arr[0];
  for(let i=1; i<arr.length; i++){
    currNode.next=arr[i];
    currNode=arr[i];
  }
  currNode.next=null;

  return head;
}
console.log('\n REVERSE LIST \n');
let reversed = reverseList(node1);
printNode(reversed);





// COMPARE IF TWO LISTS ARE IDENTICAL
// if each node has the same data val and lengths are equal
// return true
function compare(headA,headB) {
  let currNodeA=headA;
  let currNodeB=headB;
  let same=true;

  while(currNodeA || currNodeB){
    if(!(currNodeA && currNodeB)){
      same=false;
      break;
    }
    if(currNodeA.data !== currNodeB.data){
      same=false;
      break;
    }
    currNodeA=currNodeA.next;
    currNodeB=currNodeB.next;
  }
  console.log(same);
  return same;
}

console.log('\n COMPARE LISTS for IDENTICAL \n');
let nodeA=new Node(1);
let nodeB=new Node(2);
let nodeC=new Node(3);
let nodeD=new Node(4);
let nodeE=new Node(5);
let nodeF=new Node(6);
nodeA.next=nodeB;
nodeB.next=nodeC;
nodeC.next=nodeD;
nodeD.next=nodeE;
nodeE.next=nodeF;

let nodeA1=new Node(1);
let nodeB1=new Node(2);
let nodeC1=new Node(3);
let nodeD1=new Node(4);
let nodeE1=new Node(5);
let nodeF1=new Node(6);
nodeA1.next=nodeB1;
nodeB1.next=nodeC1;
nodeC1.next=nodeD1;
nodeD1.next=nodeE1;
nodeE1.next=nodeF1;

let nodeA2=new Node(5);
let nodeB2=new Node(4);
let nodeC2=new Node(9);
nodeA2.next=nodeB2;
nodeB2.next=nodeC2;

compare(reversed,nodeA); // non-id lists
compare(nodeA,nodeA1); // identical lists
compare(reversed,nodeA2); // identical vals but not lengths






// MERGE LINKED LISTS
// lists are sorted asc
// merge into single list and keep asc order
function merge(headA,headB) {
  let head=(headA.data<=headB.data)?headA:headB;
  let currNode=head;
  let currNodeA=(headA.data<=headB.data)?headA.next:headA;
  let currNodeB=(headA.data<=headB.data)?headB:headB.next;

  while(currNodeA || currNodeB){

    if(!currNodeA || !currNodeB){
      if(!currNodeA){
        currNode.next=currNodeB;
        currNodeB=currNodeB.next;
      }else{
        currNode.next=currNodeA;
        currNodeA=currNodeA.next;
      }

    }

    else{
      if(currNodeA.data <= currNodeB.data){
        currNode.next=currNodeA;
        currNodeA=currNodeA.next;
      }else{
        currNode.next=currNodeB;
        currNodeB=currNodeB.next;
      }
    }

    currNode=currNode.next;

  }
  return head;
}

console.log('\n MERGE LISTS ASC \n');
let merged = merge(nodeA,nodeA1);
printNode(merged);






// GET NODE VAL AT POSITION (x) COUNTING BACKWARDS FROM TAIL
// TAIL being position 0
function nodeValAtFromTail(listHead,position) {
  let arr=[listHead];
  let currNode=listHead;
  while(currNode){
    currNode=currNode.next;
    if(currNode){
      arr.unshift(currNode);
    }

  }
  // console.log(arr);
  // console.log('arr',arr[position]);
  console.log(arr[position].data);
  return arr[position].data;
}
console.log('\n PRINT NODE VAL AT POS (x) \n');
nodeValAtFromTail(nodeA,3);