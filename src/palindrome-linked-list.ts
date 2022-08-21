// https://leetcode.com/problems/palindrome-linked-list/

class ListNode {
  val: number;
  // eslint-disable-next-line no-use-before-define
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;

  const sequence: number[] = [];

  sequence.push(head.val);
  let current = head;

  while (current.next != null) {
    sequence.push(current.next.val);

    current = current.next;
  }

  for (let i = 0, j = sequence.length - 1; i < sequence.length / 2; i++, j--)
    if (sequence[i] - sequence[j] !== 0) return false;

  return true;
}
