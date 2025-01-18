import adjectives from "../data/adjectives.js";

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function startQuiz() {
  let score = 0;
  const rounds = 10; 
  let currentRound = 0;

  const startButton = document.getElementById("startQuiz");
  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submitAnswer");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");
  const hintButton = document.getElementById("showHint");
  const hintContainer = document.getElementById("hintContainer");
  const closeHintButton = document.getElementById("closeHint");

  startButton.style.display = "none"; 
  quizContainer.style.display = "block";

  answerInput.addEventListener("input", function () {
    submitButton.disabled = !answerInput.value.trim();
  });

  function askQuestion() {
    const adjective = getRandomElement(adjectives);
    const forms = ["han_hun", "intetkjonn", "flertall"];
    const randomForm = getRandomElement(forms);
    const correctAnswer = adjective[randomForm];

    questionElement.textContent = `Hva er formen '${randomForm}' for adjektivet '${adjective["han_hun"]}':`;
    answerInput.value = "";
    answerInput.focus();
    submitButton.disabled = true;

    submitButton.onclick = function() {
      const userAnswer = answerInput.value;
      if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = "Riktig!";
        feedbackElement.style.color = "green";
        feedbackElement.style.animation = "none";
        score++;
      } else {
        feedbackElement.textContent = `Feil. Riktig svar: ${correctAnswer}.`;
        feedbackElement.style.color = "red";
        feedbackElement.style.animation = "blink 1s step-end infinite";
      }
      currentRound++;
      if (currentRound < rounds) {
        askQuestion();
      } else {
        quizContainer.style.display = "none";
        scoreElement.textContent = `Spillet er over! Din poengsum: ${score}/${rounds}.`;
        startButton.style.display = "block"; 
      }
    };

    hintButton.onclick = function() {
      hintContainer.style.display = "block";
      document.getElementById("han_hun").textContent = adjective["han_hun"];
      document.getElementById("intetkjonn").textContent = adjective["intetkjonn"];
      document.getElementById("flertall").textContent = adjective["flertall"];
    };

    closeHintButton.onclick = function() {
      hintContainer.style.display = "none";
    };
  }

  askQuestion();
}

document.getElementById("startQuiz").onclick = startQuiz;



// function getRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// function startQuiz() {
//   let score = 0;
//   const rounds = 10; 
//   let currentRound = 0;

//   const startButton = document.getElementById("startQuiz");
//   const quizContainer = document.getElementById("quizContainer");
//   const questionElement = document.getElementById("question");
//   const answerInput = document.getElementById("answer");
//   const submitButton = document.getElementById("submitAnswer");
//   const feedbackElement = document.getElementById("feedback");
//   const scoreElement = document.getElementById("score");
//   const hintButton = document.getElementById("showHint");
//   const hintContainer = document.getElementById("hintContainer");
//   const closeHintButton = document.getElementById("closeHint");

//   startButton.style.display = "none"; 
//   quizContainer.style.display = "block";

//   answerInput.addEventListener("input", function () {
//     submitButton.disabled = !answerInput.value.trim();
//   });

//   function askQuestion() {
//     const adjective = getRandomElement(adjectives);
//     const forms = ["han_hun", "intetkjonn", "flertall"];
//     const randomForm = getRandomElement(forms);
//     const correctAnswer = adjective[randomForm];

//     questionElement.textContent = `Hva er formen '${randomForm}' for adjektivet '${adjective["han_hun"]}':`;
//     answerInput.value = "";
//     answerInput.focus();
//     submitButton.disabled = true;

//     submitButton.onclick = function() {
//       const userAnswer = answerInput.value;
//       if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//         feedbackElement.textContent = "Riktig!";
//         feedbackElement.style.color = "green";
//         feedbackElement.style.animation = "none";
//         score++;
//       } else {
//         feedbackElement.textContent = `Feil. Riktig svar: ${correctAnswer}.`;
//         feedbackElement.style.color = "red";
//         feedbackElement.style.animation = "blink 1s step-end infinite";
//       }
//       currentRound++;
//       if (currentRound < rounds) {
//         askQuestion();
//       } else {
//         quizContainer.style.display = "none";
//         scoreElement.textContent = `Spillet er over! Din poengsum: ${score}/${rounds}.`;
//         startButton.style.display = "block"; 
//       }
//     };

//     hintButton.onclick = function() {
//       hintContainer.style.display = "block";
//       document.getElementById("han_hun").textContent = adjective["han_hun"];
//       document.getElementById("intetkjonn").textContent = adjective["intetkjonn"];
//       document.getElementById("flertall").textContent = adjective["flertall"];
//     };

//     closeHintButton.onclick = function() {
//       hintContainer.style.display = "none";
//     };
//   }

//   askQuestion();
// }

// document.getElementById("startQuiz").onclick = startQuiz;



// function getRandomElement(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }


// function startQuiz() {
//   let score = 0;
//   const rounds = 10; 
//   let currentRound = 0;

//   const startButton = document.getElementById("startQuiz");
//   const quizContainer = document.getElementById("quizContainer");
//   const questionElement = document.getElementById("question");
//   const answerInput = document.getElementById("answer");
//   const submitButton = document.getElementById("submitAnswer");
//   const feedbackElement = document.getElementById("feedback");
//   const scoreElement = document.getElementById("score");

//   startButton.style.display = "none"; 
//   quizContainer.style.display = "block";

//   answerInput.addEventListener("input", function () {
//     submitButton.disabled = !answerInput.value.trim();
//   });

//   function askQuestion() {
//     const adjective = getRandomElement(adjectives);
//     const forms = ["han_hun", "intetkjonn", "flertall"];
//     const randomForm = getRandomElement(forms);
//     const correctAnswer = adjective[randomForm];

//     questionElement.textContent = `Hva er formen '${randomForm}' for adjektivet '${adjective["han_hun"]}':`;
//     answerInput.value = "";
//     answerInput.focus();
//     submitButton.disabled = true;

//     submitButton.onclick = function() {
//       const userAnswer = answerInput.value;
//       if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//         feedbackElement.textContent = "Riktig!";
//         feedbackElement.style.color = "green";
//         feedbackElement.style.animation = "none";
//         score++;
//       } else {
//         feedbackElement.textContent = `Feil. Riktig svar: ${correctAnswer}.`;
//         feedbackElement.style.color = "red";
//         feedbackElement.style.animation = "blink 1s step-end infinite";
//       }
//       currentRound++;
//       if (currentRound < rounds) {
//         askQuestion();
//       } else {
//         quizContainer.style.display = "none";
//         scoreElement.textContent = `Spillet er over! Din poengsum: ${score}/${rounds}.`;
//         startButton.style.display = "block"; 
//       }
//     };
//   }

//   askQuestion();
// }

// document.getElementById("startQuiz").onclick = startQuiz;
