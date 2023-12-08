---
author: Hakan Okay
pubDatetime: 2023-07-21T14:10:00Z
title: Grind 75 - Valid Anagram
postSlug: grind75-valid-anagram
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
description: Solution for the problem Valid Anagram on Grind 75 list.
---

Solution for [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
```
