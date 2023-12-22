---
author: Hakan Okay
pubDatetime: 2023-11-26T13:13:00Z
title: Results Summary Component
postSlug: results-summary-component
featured: false
draft: false
tags:
  - HTML
  - CSS
  - JavaScript
  - JSON
  - Frontend
description: This is a solution to the Results summary component challenge on Frontend Mentor.
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
      <div class="result">
        <h1 class="result-title">Your Result</h1>
        <div class="result-score">
          <div class="result-score-number">76</div>
          <div class="result-score-total">of 100</div>
        </div>
        <div class="result-content">
          <h3 class="result-content-title">Great</h3>
          <p class="result-content-text">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div class="summary-wrapper">
        <div class="summary">
          <h3 class="summary-title">Summary</h3>
          <div class="stats"></div>
          <button class="summary-button">Continue</button>
        </div>
      </div>
    </div>
    <script src="./app.js"></script>
  </body>
</html>
```

### CSS

```css
@font-face {
    font-family: 'HankenGrotesk';
    src: url('./assets/fonts/HankenGrotesk-VariableFont_wght.ttf') format('truetype');
}


body {
    padding: 0;
    margin: 0;
    font-family: 'HankenGrotesk', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff;
}

.container {
    display: flex;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    width: 600px;
}

.result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(to top, hsla(241, 81%, 54%, 0.95), hsla(252, 100%, 67%, 1));
    border-radius: 25px;
    width: 300px;
    height: 400px;
    padding: 10px;
}

.result-title {
    color: #cdc2ff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.result-score {
    border-radius: 50%;
    background: linear-gradient(to top, hsla(252, 100%, 67%, 0.1), hsla(241, 81%, 54%, 0.8));
    padding: 30px 45px 30px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.result-score-number {
    color: #fdfdff;
    font-size: 60px;
    font-weight: 700;
    width: 70px;
}

.result-score-total {
    color: #8276ff;
    font-weight: 700;
}

.result-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    text-align: center;
    padding-top: 10px;
}

.result-content-title {
    color: #fff9ff;
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 10px;
}

.result-content-text {
    color: #b9b4ff;
    margin: 0;
    width: 93%;
    padding: 10px;
}


.summary {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 400px;
    padding: 10px;
}

.summary-wrapper {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

.summary-title {
    margin: 0;
}


.stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.stat {
    padding: 15px;
    border-radius: 8px;
    display: flex;
    gap: 1px;
    align-items: center;
    justify-content: space-between;
}

.stat:hover {
    transform: scale(1.02);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.stat-info {
    display: flex;
    gap: 5px;
    align-items: center;
}

.stat-ratings {
    display: flex;
    gap: 5px;
    align-items: center;
}

.stat-icon {
    width: 20px;
    height: 20px;
}

.stat-score {
    font-weight: 900;
    margin: 0;
}

.stat-max {
    color: #a8a1a5;
    margin: 0;
}

.stat-name-reaction {
    color: #df8387;
    font-weight: 700;
    margin: 0;
}

.stat-name-memory {
    color: #fbbe46;
    font-weight: 700;
    margin: 0;
}

.stat-name-verbal {
    color: #49b39a;
    font-weight: 700;
    margin: 0;
}

.stat-name-visual {
    color: #6067cd;
    font-weight: 700;
    margin: 0;
}

.reaction {
    background-color: #fff6f6;
}

.memory {
    background-color: #fffbf2;
}

.verbal {
    background-color: #f3fafa;
}

.visual {
    background-color: #f3f3fd;
}

.summary-button {
    background-color: #303b59;
    border: none;
    border-radius: 25px;
    padding: 15px 10px 15px 10px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
}

.summary-button:hover {
    background: linear-gradient(to bottom, hsla(252, 100%, 67%, 0.8), hsla(241, 81%, 54%, 0.9));
    transform: scale(1.02);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

@media only screen and (max-width: 640px) {
    body {
        width: 100%;
        height: 100%;
    }

    .container {
        width: 100%;
        flex-direction: column;
        box-shadow: none;
    }

    .result {
        border-radius: 0 0 60px 60px;
        width: 100%;
        padding: 0;
    }

    .summary {
        border-radius: 50px 50px 0 0;
        width: 100%;
    }

    .summary-wrapper {
        width: 80%;

    }
}
```

### JavaScript

```JavaScript
function generateStat(type, category, score, icon) {
  return `<div class="stat ${type}">
    <div class="stat-info">
      <img
        class="stat-icon"
        src="${icon}"
        alt="${type}-icon"
      />
      <p class="stat-name-${type}">${category}</p>
    </div>
    <div class="stat-ratings">
      <p class="stat-score">${score}</p>
      <span>/</span>
      <p class="stat-max">100</p>
    </div>
  </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const resultScoreNumber = document.querySelector(".result-score-number");

  const achievedScore = 76;
  const interval = 10;
  const step = achievedScore / (2000 / interval);

  let currentCount = 0;

  function updateScore() {
    resultScoreNumber.textContent = Math.round(currentCount);

    if (currentCount >= achievedScore) {
      clearInterval(counterInterval);
    }
    const difference = achievedScore - currentCount;
    if (difference > 20) {
      currentCount += step;
    } else if (difference > 10) {
      currentCount += step / 2;
    } else if (difference > 5) {
      currentCount += step / 4;
    } else if (difference > 2) {
      currentCount += step / 8;
    } else {
      currentCount += step / 16;
    }
  }

  const counterInterval = setInterval(updateScore, interval);
});

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const stats = data.map((stat) =>
      generateStat(
        stat.category.toLowerCase(),
        stat.category,
        stat.score,
        stat.icon
      )
    );
    document.querySelector(".stats").innerHTML = stats.join("");
  });
```


### Result

![](https://raw.githubusercontent.com/h-okay/results-summary-component/main/desktop.png)

[Live Demo](https://hokay-results-summary-component.vercel.app/)
