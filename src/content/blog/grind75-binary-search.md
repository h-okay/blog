---
author: Hakan Okay
pubDatetime: 2023-08-04T00:55:00Z
title: Grind 75 - Binary Search
postSlug: grind75-binary-search
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
  - sorting
description: Solution for the problem Binary Search on Grind 75 list.
---

Solution for [Binary Search](https://leetcode.com/problems/binary-search/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums) - 1

        while low <= high:
            mid = (low + high) // 2

            if target == nums[mid]:
                return mid

            if target > nums[mid]:
                low = mid + 1

            if target < nums[mid]:
                high = mid - 1

        return -1
```
