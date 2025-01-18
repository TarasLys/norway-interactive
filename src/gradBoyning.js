const adjectives = [
{ "positiv": "stor", "komparativ": "større", "superlativ": "størst" },
  { "positiv": "liten", "komparativ": "mindre", "superlativ": "minst" },
  { "positiv": "vakker", "komparativ": "vakrere", "superlativ": "vakrest" },
  { "positiv": "snill", "komparativ": "snillere", "superlativ": "snillest" },
  { "positiv": "rask", "komparativ": "raskere", "superlativ": "raskest" },
  { "positiv": "sint", "komparativ": "sinnere", "superlativ": "sintest" },
  { "positiv": "gammel", "komparativ": "eldre", "superlativ": "eldst" },
  { "positiv": "modig", "komparativ": "modigere", "superlativ": "modigst" },
  { "positiv": "varm", "komparativ": "varmere", "superlativ": "varmest" },
  { "positiv": "kald", "komparativ": "kaldere", "superlativ": "kaldest" },
  { "positiv": "ren", "komparativ": "renere", "superlativ": "renest" },
  { "positiv": "skitten", "komparativ": "skitnere", "superlativ": "skitnest" },
  { "positiv": "høy", "komparativ": "høyere", "superlativ": "høyest" },
  { "positiv": "lav", "komparativ": "lavere", "superlativ": "lavest" },
  { "positiv": "tynn", "komparativ": "tynnere", "superlativ": "tynnest" },
  { "positiv": "tykk", "komparativ": "tykkere", "superlativ": "tykkest" },
  { "positiv": "bred", "komparativ": "bredere", "superlativ": "bredest" },
  { "positiv": "smal", "komparativ": "smalere", "superlativ": "smalest" },
  { "positiv": "hard", "komparativ": "hardere", "superlativ": "hardest" },
  { "positiv": "myk", "komparativ": "mykere", "superlativ": "mykest" },
  { "positiv": "mørk", "komparativ": "mørkere", "superlativ": "mørkest" },
  { "positiv": "lys", "komparativ": "lysere", "superlativ": "lysst" },
  { "positiv": "svak", "komparativ": "svakere", "superlativ": "svakest" },
  { "positiv": "sterk", "komparativ": "sterkere", "superlativ": "sterkest" },
  { "positiv": "trøtt", "komparativ": "trøttere", "superlativ": "trøttest" },
  { "positiv": "glad", "komparativ": "gladere", "superlativ": "gladest" },
  { "positiv": "sulten", "komparativ": "sultere", "superlativ": "sultenest" },
  { "positiv": "mett", "komparativ": "mettere", "superlativ": "mettest" },
  { "positiv": "interessant", "komparativ": "mer interessant", "superlativ": "mest interessant" },
  { "positiv": "kjedelig", "komparativ": "mer kjedelig", "superlativ": "mest kjedelig" },
  { "positiv": "billig", "komparativ": "billigere", "superlativ": "billigst" },
  { "positiv": "dyr", "komparativ": "dyrere", "superlativ": "dyrest" },
  { "positiv": "riktig", "komparativ": "riktere", "superlativ": "riktigst" },
  { "positiv": "feil", "komparativ": "feilere", "superlativ": "feilest" },
  { "positiv": "fri", "komparativ": "friere", "superlativ": "friest" },
  { "positiv": "opptatt", "komparativ": "mer opptatt", "superlativ": "mest opptatt" },
  { "positiv": "gammeldags", "komparativ": "mer gammeldags", "superlativ": "mest gammeldags" },
  { "positiv": "moderne", "komparativ": "mer moderne", "superlativ": "mest moderne" },
  { "positiv": "lykkelig", "komparativ": "mer lykkelig", "superlativ": "mest lykkelig" },
  { "positiv": "trist", "komparativ": "tristere", "superlativ": "tristest" },
  { "positiv": "vennlig", "komparativ": "vennligere", "superlativ": "vennligst" },
  { "positiv": "uvennlig", "komparativ": "uvennligere", "superlativ": "uvennligst" },
  { "positiv": "morsom", "komparativ": "morsommere", "superlativ": "morsomst" },
  { "positiv": "alvorlig", "komparativ": "alvorligere", "superlativ": "alvorligst" },
  { "positiv": "trygg", "komparativ": "tryggere", "superlativ": "tryggest" },
    { "positiv": "farlig", "komparativ": "farligere", "superlativ": "farligst" },
  { "positiv": "ekte", "komparativ": "ektere", "superlativ": "ektest" },
  { "positiv": "falsk", "komparativ": "falskere", "superlativ": "falskest" },
  { "positiv": "viktig", "komparativ": "viktere", "superlativ": "viktigst" },
  { "positiv": "uviktig", "komparativ": "uviktigere", "superlativ": "uviktigst" },
  { "positiv": "vanskelig", "komparativ": "vanskeligere", "superlativ": "vanskeligst" },
  { "positiv": "lett", "komparativ": "lettere", "superlativ": "lettest" },
  { "positiv": "komplisert", "komparativ": "mer komplisert", "superlativ": "mest komplisert" },
  { "positiv": "enkel", "komparativ": "enklere", "superlativ": "enklest" },
  { "positiv": "stor", "komparativ": "større", "superlativ": "størst" },
  { "positiv": "liten", "komparativ": "mindre", "superlativ": "minst" },
  { "positiv": "god", "komparativ": "bedre", "superlativ": "best" },
  { "positiv": "dårlig", "komparativ": "verre", "superlativ": "verst" },
  { "positiv": "ung", "komparativ": "yngre", "superlativ": "yngst" },
  { "positiv": "rolig", "komparativ": "roligere", "superlativ": "roligst" },
  { "positiv": "deilig", "komparativ": "deiligere", "superlativ": "deiligst" },
  { "positiv": "lukket", "komparativ": "lukkettere", "superlativ": "lukkettest" },
  { "positiv": "nær", "komparativ": "nærmere", "superlativ": "nærmest" },
  { "positiv": "fjern", "komparativ": "fjernere", "superlativ": "fjernest" },
  { "positiv": "storartet", "komparativ": "mer storartet", "superlativ": "mest storartet" },
  
];

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
    const adjective = getRandomElement(adjectives);
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
