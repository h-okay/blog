---
author: Hakan Okay
pubDatetime: 2023-08-04T00:29:00Z
title: Grind 75 - Best Time to Buy and Sell Stock
postSlug: grind75-best-time-to-buy-and-sell-stock
featured: false
draft: false
tags:
  - python
  - algorithms
  - leetcode
description: Solution for the problem Merge Best Time to Buy and Sell Stock on Grind 75 list.
---

Solution for [Merge Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) problem which is a part of [Grind 75](https://www.techinterviewhandbook.org/grind75) list.

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0
        right = 1
        profit = 0

        while right < len(prices):
            curr_profit = prices[right] - prices[left]
            if prices[left] < prices[right]:
                profit = max(curr_profit, profit)
            else:
                left = right
            right += 1

        return profit
```
