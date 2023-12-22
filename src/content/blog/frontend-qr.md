---
author: Hakan Okay
pubDatetime: 2023-12-04T15:22:00Z
title: QR Code Component
postSlug: qr-code-component
featured: false
draft: false
tags:
  - HTML
  - CSS
  - Frontend
description: This is a solution to the QR code component challenge on Frontend Mentor.
---

### Markup

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <div class="container">
      <img
        class="code"
        src="./images/image-qr-code.png"
        width="250"
        height="250"
      />
      <div class="text-wrapper">
        <h2 class="title">
          Improve your front-end skills by building projects
        </h2>
        <p class="content">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  </body>
</html>
```

### CSS

```css
body {
    background-color: #d5e1ef;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    margin: 0;
    padding: 0;
}

.container {
    background-color: #fff;
    border-radius: 15px;
    padding: 13px;
    display: inline-block;
    width: 250px;
    box-shadow: 0 0 10px rgba(80, 80, 80, 0.1);
}

.code {
    border-radius: 15px;
}

.text-wrapper {
    width: 93%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.title {
    margin: 0;
    padding: 10px 0 10px 0;
    font-size: 1.1rem;
}

.content {
    color: #9da3af;
    margin: 0;
    padding: 10px 0 10px 0;
}
```

### Result

![](https://raw.githubusercontent.com/h-okay/qr-code-component/main/screenshot.jpg)

[Live Demo](https://qr-code-component-h-okay.vercel.app/)
