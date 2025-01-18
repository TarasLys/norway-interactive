const adjectives = [
  { "han_hun": "stor", "intetkjonn": "stort", "flertall": "store" },
  { "han_hun": "liten", "intetkjonn": "lite", "flertall": "små" },
  { "han_hun": "vakker", "intetkjonn": "vakkert", "flertall": "vakre" },
  { "han_hun": "snill", "intetkjonn": "snilt", "flertall": "snille" },
  { "han_hun": "rask", "intetkjonn": "raskt", "flertall": "raske" },
  { "han_hun": "sint", "intetkjonn": "sint", "flertall": "sinte" },
  { "han_hun": "gammel", "intetkjonn": "gammelt", "flertall": "gamle" },
  { "han_hun": "modig", "intetkjonn": "modig", "flertall": "modige" },
  { "han_hun": "varm", "intetkjonn": "varmt", "flertall": "varme" },
  { "han_hun": "kald", "intetkjonn": "kaldt", "flertall": "kalde" },
  { "han_hun": "ren", "intetkjonn": "rent", "flertall": "rene" },
  { "han_hun": "skitten", "intetkjonn": "skittent", "flertall": "skitne" },
  { "han_hun": "høy", "intetkjonn": "høyt", "flertall": "høye" },
  { "han_hun": "lav", "intetkjonn": "lavt", "flertall": "lave" },
  { "han_hun": "tynn", "intetkjonn": "tynt", "flertall": "tynne" },
  { "han_hun": "tykk", "intetkjonn": "tykt", "flertall": "tykke" },
  { "han_hun": "bred", "intetkjonn": "bredt", "flertall": "brede" },
  { "han_hun": "smal", "intetkjonn": "smalt", "flertall": "smale" },
  { "han_hun": "hard", "intetkjonn": "hardt", "flertall": "harde" },
  { "han_hun": "myk", "intetkjonn": "mykt", "flertall": "myke" },
  { "han_hun": "mørk", "intetkjonn": "mørkt", "flertall": "mørke" },
  { "han_hun": "lys", "intetkjonn": "lyst", "flertall": "lyse" },
  { "han_hun": "svak", "intetkjonn": "svakt", "flertall": "svake" },
  { "han_hun": "sterk", "intetkjonn": "stert", "flertall": "sterke" },
  { "han_hun": "trøtt", "intetkjonn": "trøtt", "flertall": "trøtte" },
  { "han_hun": "glad", "intetkjonn": "glad", "flertall": "glade" },
  { "han_hun": "sulten", "intetkjonn": "sultent", "flertall": "sultne" },
  { "han_hun": "mett", "intetkjonn": "mett", "flertall": "mette" },
  { "han_hun": "interessant", "intetkjonn": "interessant", "flertall": "interessante" },
  { "han_hun": "kjedelig", "intetkjonn": "kjedelig", "flertall": "kjedelige" },
  { "han_hun": "billig", "intetkjonn": "billig", "flertall": "billige" },
  { "han_hun": "dyr", "intetkjonn": "dyrt", "flertall": "dyre" },
  { "han_hun": "riktig", "intetkjonn": "riktig", "flertall": "riktige" },
  { "han_hun": "feil", "intetkjonn": "feil", "flertall": "feil" },
  { "han_hun": "fri", "intetkjonn": "fritt", "flertall": "frie" },
  { "han_hun": "opptatt", "intetkjonn": "opptatt", "flertall": "opptatte" },
  { "han_hun": "gammeldags", "intetkjonn": "gammeldags", "flertall": "gammeldagse" },
  { "han_hun": "moderne", "intetkjonn": "moderne", "flertall": "moderne" },
  { "han_hun": "lykkelig", "intetkjonn": "lykkelig", "flertall": "lykkelige" },
  { "han_hun": "trist", "intetkjonn": "trist", "flertall": "triste" },
  { "han_hun": "vennlig", "intetkjonn": "vennlig", "flertall": "vennlige" },
  { "han_hun": "uvennlig", "intetkjonn": "uvennlig", "flertall": "uvennlige" },
  { "han_hun": "morsom", "intetkjonn": "morsomt", "flertall": "morsomme" },
  { "han_hun": "alvorlig", "intetkjonn": "alvorlig", "flertall": "alvorlige" },
  { "han_hun": "trygg", "intetkjonn": "trygt", "flertall": "trygge" },
  { "han_hun": "farlig", "intetkjonn": "farlig", "flertall": "farlige" },
  { "han_hun": "ekte", "intetkjonn": "ekte", "flertall": "ekte" },
  { "han_hun": "falsk", "intetkjonn": "falskt", "flertall": "falske" },
  { "han_hun": "viktig", "intetkjonn": "viktig", "flertall": "viktige" },
  { "han_hun": "uviktig", "intetkjonn": "uviktig", "flertall": "uviktige" },
  { "han_hun": "vanskelig", "intetkjonn": "vanskelig", "flertall": "vanskelige" },
  { "han_hun": "lett", "intetkjonn": "lett", "flertall": "lette" },
  { "han_hun": "komplisert", "intetkjonn": "komplisert", "flertall": "kompliserte" },
  { "han_hun": "enkel", "intetkjonn": "enkelt", "flertall": "enkelte" },
  { "han_hun": "stor", "intetkjonn": "stort", "flertall": "store" },
  { "han_hun": "liten", "intetkjonn": "lite", "flertall": "små" },
  { "han_hun": "god", "intetkjonn": "godt", "flertall": "gode" },
  { "han_hun": "dårlig", "intetkjonn": "dårlig", "flertall": "dårlige" },
  { "han_hun": "ung", "intetkjonn": "ungt", "flertall": "unge" },
  { "han_hun": "rolig", "intetkjonn": "rolig", "flertall": "rolige" },
  { "han_hun": "deilig", "intetkjonn": "deilig", "flertall": "deilige" },
  { "han_hun": "lukket", "intetkjonn": "lukket", "flertall": "lukkede" },
  { "han_hun": "nær", "intetkjonn": "nært", "flertall": "nære" },
  { "han_hun": "fjern", "intetkjonn": "fjernt", "flertall": "fjerne" }
];


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
