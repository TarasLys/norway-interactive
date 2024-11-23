// Список глаголов с формами
const verbs = [
  { infinitiv: "være", presens: "er", preteritum: "var", perfektum: "vært" },
  { infinitiv: "ha", presens: "har", preteritum: "hadde", perfektum: "hatt" },
  { infinitiv: "gjøre", presens: "gjør", preteritum: "gjorde", perfektum: "gjort" },
  { infinitiv: "si", presens: "sier", preteritum: "sa", perfektum: "sagt" },
  { infinitiv: "få", presens: "får", preteritum: "fikk", perfektum: "fått" },
  { infinitiv: "komme", presens: "kommer", preteritum: "kom", perfektum: "kommet" },
  { infinitiv: "gå", presens: "går", preteritum: "gikk", perfektum: "gått" },
  { infinitiv: "se", presens: "ser", preteritum: "så", perfektum: "sett" },
  { infinitiv: "ta", presens: "tar", preteritum: "tok", perfektum: "tatt" },
  { infinitiv: "like", presens: "liker", preteritum: "likte", perfektum: "likt" },
  { infinitiv: "kunne", presens: "kan", preteritum: "kunne", perfektum: "kunnet" },
  { infinitiv: "ville", presens: "vil", preteritum: "ville", perfektum: "villet" },
  { infinitiv: "måtte", presens: "må", preteritum: "måtte", perfektum: "måttet" },
  { infinitiv: "skulle", presens: "skal", preteritum: "skulle", perfektum: "skullet" },
  { infinitiv: "bli", presens: "blir", preteritum: "ble", perfektum: "blitt" },
  { infinitiv: "spise", presens: "spiser", preteritum: "spiste", perfektum: "spist" },
  { infinitiv: "drikke", presens: "drikker", preteritum: "drakk", perfektum: "drukket" },
  { infinitiv: "lese", presens: "leser", preteritum: "leste", perfektum: "lest" },
  { infinitiv: "skrive", presens: "skriver", preteritum: "skrev", perfektum: "skrevet" },
  { infinitiv: "bo", presens: "bor", preteritum: "bodde", perfektum: "bodd" },
  { infinitiv: "snakke", presens: "snakker", preteritum: "snakket", perfektum: "snakket" },
  { infinitiv: "jobbe", presens: "jobber", preteritum: "jobbet", perfektum: "jobbet" },
  { infinitiv: "høre", presens: "hører", preteritum: "hørte", perfektum: "hørt" },
  { infinitiv: "kjøpe", presens: "kjøper", preteritum: "kjøpte", perfektum: "kjøpt" },
  { infinitiv: "leve", presens: "lever", preteritum: "levde", perfektum: "levd" },
  { infinitiv: "tenke", presens: "tenker", preteritum: "tenkte", perfektum: "tenkt" },
  { infinitiv: "betale", presens: "betaler", preteritum: "betalte", perfektum: "betalt" },
  { infinitiv: "velge", presens: "velger", preteritum: "valgte", perfektum: "valgt" },
  { infinitiv: "kjenne", presens: "kjenner", preteritum: "kjente", perfektum: "kjent" },
  { infinitiv: "sove", presens: "sover", preteritum: "sov", perfektum: "sovet" },
];

// Функция для случайного выбора элемента из массива
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Функция для запуска викторины
function startQuiz() {
  let score = 0;
  const rounds = 10; // Количество раундов
  let currentRound = 0;

  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");

  quizContainer.style.display = "block";

  function askQuestion() {
    const verb = getRandomElement(verbs);
    const forms = ["infinitiv", "presens", "preteritum", "perfektum"];
    const randomForm = getRandomElement(forms);
    const correctAnswer = verb[randomForm];

    questionElement.textContent = `Назови форму '${randomForm}' для глагола '${verb.infinitiv}':`;
    answerInput.value = "";
    answerInput.focus();

    document.getElementById("submitAnswer").onclick = function() {
      const userAnswer = answerInput.value;
      if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = "Правильно!";
        score++;
      } else {
        feedbackElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}.`;
      }
      currentRound++;
      if (currentRound < rounds) {
        askQuestion();
      } else {
        quizContainer.style.display = "none";
        scoreElement.textContent = `Игра окончена! Твой счет: ${score}/${rounds}.`;
      }
    };
  }

  askQuestion();
}

document.getElementById("startQuiz").onclick = startQuiz;

