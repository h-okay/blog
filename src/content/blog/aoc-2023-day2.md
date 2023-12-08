---
author: Hakan Okay
pubDatetime: 2023-12-05T15:22:00Z
title: Advent of Code 2023 - Day 2
postSlug: advent-of-code-day-two
featured: false
draft: false
tags:
  - python
  - algorithms
  - advent-of-code
description: Part 1 and Part 2 solutions to Advent of Code 2023, Day 2.
---

Solutions to [Advent of Code 2023 (Day 2)](https://adventofcode.com/2023/day/2)

### Part 1

```python
def getIdIfValid(row):
    game, results = row.split(":")
    id = game.split(" ")[1]
    sets = results.strip().split("; ")

    allowed = {"red": 12, "green": 13, "blue": 14}
    for cube_set in sets:
        pulls = cube_set.split(", ")
        for pull in pulls:
            count, color = pull.split(" ")
            if int(count) > allowed[color]:
                return 0

    return int(id)


if __name__ == "__main__":
    with open("day_02.in") as f:
        data = f.read().strip().splitlines()

    total = 0
    for row in range(len(data)):
        total += getIdIfValid(data[row])

    print(total)
```

<div class="flex items-center justify-center gap-5 py-6 text-[#f3dbc5]">
  <span>&#x2022;</span>
  <span>&#x2022;</span>
  <span>&#x2022;</span>
</div>

### Part 2

```python
def minNumberOfCubes(row):
    results = row.split(":")[1]
    sets = results.strip().split("; ")

    counter = {"red": 0, "green": 0, "blue": 0}
    for cube_set in sets:
        pulls = cube_set.split(", ")
        for pull in pulls:
            count, color = pull.split(" ")
            counter[color] = max(counter[color], int(count))

    return counter


if __name__ == "__main__":
    with open("day_02.in") as f:
        data = f.read().strip().splitlines()

    total = 0
    for row in range(len(data)):
        mul = 1
        mins = minNumberOfCubes(data[row])
        for v in mins.values():
            mul *= v
        total += mul

    print(total)
```
