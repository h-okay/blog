---
author: Hakan Okay
pubDatetime: 2023-12-04T15:22:00Z
title: Advent of Code 2023 - Day 1
postSlug: advent-of-code-day-one
featured: false
draft: false
tags:
  - python
  - algorithms
  - advent-of-code
description: Part 1 and Part 2 solutions to Advent of Code 2023, Day 1.
---

Solutions to [Advent of Code 2023 (Day 1)](https://adventofcode.com/2023/day/1)

### Part 1

```python
def extract(line):
    first_digit = next(char for char in line if char.isdigit())
    last_digit = next(char for char in line[::-1] if char.isdigit())
    calibration_value = int(first_digit + last_digit)
    return calibration_value

if __name__ == "__main__":
    with open("day_01.in") as f:
        lines = f.read().strip().splitlines()

    total_sum = sum(extract(line) for line in lines)
    print(total_sum)
```

<div class="flex items-center justify-center gap-5 py-6 text-[#f3dbc5]">
  <span>&#x2022;</span>
  <span>&#x2022;</span>
  <span>&#x2022;</span>
</div>

### Part 2

```python
also_valid = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

def extract(line):
    digits = []
    for i, char in enumerate(line):
        if char.isdigit():
            digits.append(int(char))

        for j, spelled in enumerate(also_valid):
            if line[i:(i+len(spelled))] == spelled: # look ahead
                digits.append(j + 1)
                break

    first_digit = digits[0]
    last_digit = digits[-1]

    calibration_value = first_digit * 10 + last_digit
    return calibration_value

if __name__ == "__main__":
    with open("day_01.in") as f:
        lines = f.read().strip().splitlines()

    total_sum = sum(extract(line) for line in lines)
    print(total_sum)
```
