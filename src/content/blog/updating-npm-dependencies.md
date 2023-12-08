---
author: Hakan Okay
pubDatetime: 2023-12-08T18:19:00Z
title: Updating NPM Depencencies
postSlug: updating-npm-depencencies
featured: false
draft: false
tags:
  - npm
  - web
description: Manually updating each package using npm install package-name@latest is the most straightforward way of updating. However, it may not be the most efficient option.
---

Instead of updating depencencies one by one using `npm install package-name@latest`, the following can be used:

### Installing the `npm-check-updates` package globally

```bash
npm install -g npm-check-updates
```

### Check all dependencies

```bash
ncu
```

### Check patches

```bash
ncu -i --target patch
# OR
ncu -u --target patch
```

`-i` lets you choose.

### Check minor updates

```bash
ncu -i --target minor
```

### Check major updates

```bash
ncu -i
```
