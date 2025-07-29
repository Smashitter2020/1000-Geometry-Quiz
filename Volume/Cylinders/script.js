let radius, height;
let score = 0;
let currentQuestion = 1;
let maxQuestions = 1000;

function generateQuestion() {
  radius = Math.floor(Math.random() * 20) + 1;
  height = Math.floor(Math.random() * 20) + 1;

  document.getElementById("question").innerHTML = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi><mo>=</mo><mn>${radius}</mn><mo>,</mo><mi>h</mi><mo>=</mo><mn>${height}</mn></math>`;
  document.getElementById("answer").value = "";
  document.getElementById("currentQuestion").innerText = currentQuestion + " out of " + maxQuestions + " questions";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = Math.PI * Math.pow(radius, 2) * height;
  currentQuestion++;

  if (userAnswer === correctAnswer) {
    score++;
  }

  generateQuestion();
  if (currentQuestion > maxQuestions) {
    document.getElementById("submitBtn").classList.add("d-none");
    document.getElementById("question").classList.add("d-none");
    document.getElementById("answer").classList.add("d-none");
    document.getElementById("currentQuestion").classList.add("d-none");
    document.getElementById("finalScore").classList.remove("d-none");
    document.getElementById("finalScore").innerText = "Final score: " + score + "/" + maxQuestions + " (" + (Math.round((score * 100) / maxQuestions)) + "%)";
  }
}

window.onload = generateQuestion;
