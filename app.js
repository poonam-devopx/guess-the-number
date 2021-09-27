"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //no input case
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";

    // wining case
  } else if (guess === secretNumber) {
    document.querySelector("h1").textContent = "Congratulations!";
    
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      if ((guess - secretNumber) <= 2) {
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = "🤏 You are close! Keep going ⬇";
        
      } else {
        document.querySelector(".message").textContent = "📈 Too high!";

        score--;

        document.querySelector(".score").textContent = score;
      }
    } else {
      //when score gets to 0
      document.querySelector(".message").textContent = "❌ You lost the game";
      document.querySelector(".score").textContent = 0;
    }

    //when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      if (Math.abs(secretNumber - guess) <= 2) {
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = "🤏 You are close! Keep going ⬆";
        
      } else {
        document.querySelector(".message").textContent = "📉 Too low!";

        score--;

        document.querySelector(".score").textContent = score;
      }
    } else {
      document.querySelector(".message").textContent = "❌ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//On clicking again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("h1").textContent = "Guess The Number!";
  
  document.querySelector(".message").textContent = "🤔 Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});