---
author: Hakan Okay
pubDatetime: 2023-07-21T14:36:00Z
title: Grind 75 - Valid Parentheses
postSlug: grind75-valid-parentheses
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
description: Solution for the problem Valid Parentheses on Grind 75 list.
---

Solution for [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
class Solution:
    def isValid(self, s: str) -> bool:

        mapping = {'(':')', '{':'}', '[':']'}
        stack = []

        for char in s:
            if char in mapping:
                stack.append(char)
                continue

            if not stack or mapping[stack.pop()] != char:
                return False

        return not stack
```
