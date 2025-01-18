import verbs from "../data/verbs.js";

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

  function askQuestion() {
    const verb = getRandomElement(verbs);
    const forms = ["infinitiv", "presens", "preteritum", "presens perfektum"];
    const randomForm = getRandomElement(forms);
    const correctAnswer = verb[randomForm];

    questionElement.textContent = `Hva er formen '${randomForm}' for verbet '${verb.infinitiv}':`;
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
        startButton.style.marginTop = "20px"; 
      }
    };

    hintButton.onclick = function() {
      hintContainer.style.display = "block";
      hintContainer.innerHTML = `
        <table>
          <tr><th>Form</th><th>Verb</th></tr>
          <tr><td>Infinitiv</td><td>${verb.infinitiv}</td></tr>
          <tr><td>Presens</td><td>${verb.presens}</td></tr>
          <tr><td>Preteritum</td><td>${verb.preteritum}</td></tr>
          <tr><td>Presens perfektum</td><td>${verb["presens perfektum"]}</td></tr>
        </table>
        <button id="closeHint">Lukk</button>
      `;
      document.getElementById("closeHint").onclick = function() {
        hintContainer.style.display = "none";
      };
    };
  }

  askQuestion();
}

document.getElementById("startQuiz").onclick = startQuiz;
document.getElementById("answer").addEventListener("input", function() {
  document.getElementById("submitAnswer").disabled = !this.value.trim();
});



















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
//   const feedbackElement = document.getElementById("feedback");
//   const scoreElement = document.getElementById("score");

//   startButton.style.display = "none"; 
//   quizContainer.style.display = "block";

//   function askQuestion() {
//     const verb = getRandomElement(verbs);
//     const forms = ["infinitiv", "presens", "preteritum", "presens perfektum"];
//     const randomForm = getRandomElement(forms);
//     const correctAnswer = verb[randomForm];

//     questionElement.textContent = `Hva er formen '${randomForm}' for verbet '${verb.infinitiv}':`;
//     answerInput.value = "";
//     answerInput.focus();

//     document.getElementById("submitAnswer").onclick = function() {
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
//         startButton.style.marginTop = "20px"; 
//       }
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
//   const feedbackElement = document.getElementById("feedback");
//   const scoreElement = document.getElementById("score");

//   startButton.style.display = "none"; 
//   quizContainer.style.display = "block";

//   function askQuestion() {
//     const verb = getRandomElement(verbs);
//     const forms = ["infinitiv", "presens", "preteritum", "presens perfektum"];
//     const randomForm = getRandomElement(forms);
//     const correctAnswer = verb[randomForm];

//     questionElement.textContent = `Назови форму '${randomForm}' для глагола '${verb.infinitiv}':`;
//     answerInput.value = "";
//     answerInput.focus();

//     document.getElementById("submitAnswer").onclick = function() {
//       const userAnswer = answerInput.value;
//       if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//         feedbackElement.textContent = "Правильно!";
//         feedbackElement.style.color = "green";
//         feedbackElement.style.animation = "none";
//         score++;
//       } else {
//         feedbackElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}.`;
//         feedbackElement.style.color = "red";
//         feedbackElement.style.animation = "blink 1s step-end infinite";
//       }
//       currentRound++;
//       if (currentRound < rounds) {
//         askQuestion();
//       } else {
//         quizContainer.style.display = "none";
//         scoreElement.textContent = `Игра окончена! Твой счет: ${score}/${rounds}.`;
//         startButton.style.display = "block"; 
//         startButton.style.marginTop = "20px"; 
//       }
//     };
//   }

//   askQuestion();
// }

// document.getElementById("startQuiz").onclick = startQuiz;
