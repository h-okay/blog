---
author: Hakan Okay
pubDatetime: 2023-12-3T22:01:00Z
title: Grind 75 - Merge Two Sorted Lists
postSlug: grind75-merge-two-sorted-lists
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
description: Solution for the problem Merge Two Sorted Lists on Grind 75 list.
---

Solution for [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = dummy = ListNode()

        while list1 and list2:
            if list1.val < list2.val:
                cur.next = list1
                cur = cur.next
                list1 = list1.next
            else:
                cur.next = list2
                cur = cur.next
                list2 = list2.next

        if list1 or list2:
            cur.next = list1 if list1 else list2

        return dummy.next
```
