---
author: 
pubDatetime: 
title: Grind 75 - Two Sum
postSlug: 
description: 
---

Solution for ![Two Sum](https://leetcode.com/problems/two-sum/description/), part of ![Grind 75](https://www.techinterviewhandbook.org/grind75) list.

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