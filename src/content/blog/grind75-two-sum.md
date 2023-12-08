---
author: Hakan Okay
pubDatetime: 2023-07-21T14:36:00Z
title: Grind 75 - Two Sum
postSlug: grind75-two-sum
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
description: Solution for the problem Two Sum on Grind 75 list.
---

Solution for [Two Sum](https://leetcode.com/problems/two-sum/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapping = {}

        for idx, val in enumerate(nums):
            req = target-val
            if req in mapping:
                return [mapping[req], idx]
            mapping[val] = idx

        return []
```
