/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let x='';
  let y='';
  if(l1.length < 101 && l2.length < 101) {
    for(let i=0; i< l1.length; i++){
      if(l1[i] >= 0 && l1[i] <= 9) {
        x = x+l1[i];
      }
    }
    for(let i=0; i< l2.length; i++){
      if(l2[i] >= 0 && l2[i] <= 9) {
        y = y+l2[i];
      }
    }
    let sum = Number(x)+Number(y);
    return sum.toString().split('').reverse();
  }
};
console.log(addTwoNumbers([2,4,3], [5,6,4]));
