var Node = function(data) {
  this.data = data;
  this.next = null;
}


var node1=new Node(1);
var node2=new Node(2);
var node3=new Node(3);
var node4=new Node(4);
node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=null;

// loop thru linked list
function print(head) {
  if(head){
    console.log(head.data);
    if(head.next){
      print(head.next);
    }
  }
}
print(node1);

// insert node at tail
function insert(head, data) {
  //console.log(head,data);
  if(head){
    if(head.next===null){
      //console.log('insert');
      head.next=new Node(data);
    }else{
      insert(head.next,data);
    }
  }else{
    head=new Node(data);
  }
  //console.log('output',head);
  return head;

}

// insert node at head
function insertHead(head, data) {
  let node=new Node(data);
  node.next=head;
  return node;
}

// insert head at position
function insertPosition(head, data, position) {
  //console.log('input',head,data,position);
  let currNode=head;
  let newNode=null;
  if(position){
    for(let i=0;i<position;i++){
      //console.log('currNode',currNode,position,i);
      if(i===position-1){
        newNode=new Node(data);
        newNode.next=currNode.next;
        currNode.next=newNode;
        //console.log('output',currNode,newNode,'\n');
        break;
        //return newNode;
      }
      currNode=currNode.next;
      //console.log('currNode',currNode,'\n');
    }
  }else{
    newNode=new Node(data);
    newNode.next=head;
    //console.log('output',newNode,'\n');
    return newNode;
  }
  return head;
}

// delete node
function deleteNode(head, position) {
  let currNode=head;
  let prevNode=null;
  if(position){
    for(let i=0;i<position;i++){
      prevNode=currNode;
      currNode=currNode.next;
      //console.log(prevNode,currNode);

      if(i===position-1){
        //console.log('delete');
        prevNode.next=currNode.next;
        break;
      }
    }
    return head;
  }else{
    if(head){return head.next;}
    return head;
  }
}

// print linked list in reverse
function reversePrint(head) {
  let arr=[];
  let currNode=head;
  while(currNode){
    arr.unshift(currNode.data);
    currNode=currNode.next;
  }
  arr.forEach(ele => console.log(ele));

  //console.log(head,arr);
}

// reverse a linked list
function reverseLinkedList(head) {
  let arr=[];
  let currNode=head;
  while(currNode){
    arr.unshift(currNode);
    currNode=currNode.next;
  }
  arr.forEach((ele,ind)=>{
    ele.next=arr[ind+1];
});
  return arr[0];
}

// compare linked list
function compareLinkedLists(headA, headB) {
  let result=false;
  headA=go(headA);
  headB=go(headB);

  if(headA.length !== headB.length){
    return 0;
  }

  result=headA.every((ele,ind)=>{
    return ele.data === headB[ind].data;
});

  return (result)?1:0;

  function go(head){
    let arr=[];
    let currNode=head;
    if(!currNode){return arr;}
    while(currNode){
      arr.push(currNode);
      currNode=currNode.next;
    }
    return arr;
  }
}

// merge linked lists
// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists
// linked lists are already sorted



// get node value at position x counting backwards from tail
function getNodeValue( head, position) {
  let arr=[];
  let currNode=head;

  while(currNode){
    arr.unshift(currNode);
    currNode=currNode.next;
  }
  return arr[position].data;
}