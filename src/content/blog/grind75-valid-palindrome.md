---
author: Hakan Okay
pubDatetime: 2023-08-04T00:34:00Z
title: Grind 75 - Valid Palindrome
postSlug: grind75-valid-palindrome
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
description: Solution for the problem Valid Palindrome on Grind 75 list.
---

Solution for [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = [letter.lower() for letter in s if letter.isalnum()]
        string = "".join(filtered)
        return string == string[::-1]
```
