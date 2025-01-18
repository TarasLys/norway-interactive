import adgradBoyning from '../data/adgradBoyning.js';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function startQuiz() {
  let score = 0;
  const rounds = 10; 
  let currentRound = 0;

  const startButton = document.getElementById("startQuiz");
  const startContainer = document.getElementById("startContainer");
  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submitAnswer");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");
  const hintButton = document.getElementById("showHint");
  const hintContainer = document.getElementById("hintContainer");
  const closeHintButton = document.getElementById("closeHint");

  startContainer.style.display = "none"; 
  quizContainer.style.display = "block";

  answerInput.addEventListener("input", function () {
    submitButton.disabled = !answerInput.value.trim();
  });

  function askQuestion() {
    const adjective = getRandomElement(adgradBoyning);
    const forms = ["positiv", "komparativ", "superlativ"];
    const randomForm = getRandomElement(forms);
    const correctAnswer = adjective[randomForm];

    questionElement.textContent = `Hva er formen '${randomForm}' for adjektivet '${adjective["positiv"]}':`;
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
        startContainer.style.display = "flex"; 
      }
    };

    hintButton.onclick = function() {
      hintContainer.style.display = "block";
      document.getElementById("positiv").textContent = adjective["positiv"];
      document.getElementById("komparativ").textContent = adjective["komparativ"];
      document.getElementById("superlativ").textContent = adjective["superlativ"];
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
//   const startContainer = document.getElementById("startContainer");
//   const quizContainer = document.getElementById("quizContainer");
//   const questionElement = document.getElementById("question");
//   const answerInput = document.getElementById("answer");
//   const feedbackElement = document.getElementById("feedback");
//   const scoreElement = document.getElementById("score");

//   startContainer.style.display = "none"; 
//   quizContainer.style.display = "block";

//   function askQuestion() {
//     const adjective = getRandomElement(adjectives);
//     const forms = ["positiv", "komparativ", "superlativ"];
//     const randomForm = getRandomElement(forms);
//     const correctAnswer = adjective[randomForm];

//     questionElement.textContent = `Hva er formen '${randomForm}' for adjektivet '${adjective["positiv"]}':`;
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
//         startContainer.style.display = "flex"; 
//       }
//     };
//   }

//   askQuestion();
// }

// document.getElementById("startQuiz").onclick = startQuiz;
