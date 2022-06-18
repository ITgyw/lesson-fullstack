function ListNode(val) {
    this.val = val;
    this.next = next;
}
const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
n2.next = n3;
const n3 = new ListNode(3);

// n3.next = n1.next;
// n1.next = n3;

// 删除n2
const target = n1.next;
n1.next = target.next;

