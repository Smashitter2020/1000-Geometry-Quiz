let radius;
let score = 0;
let currentQuestion = 1;
let maxQuestions = 1000;

function generateQuestion() {
  radius = Math.floor(Math.random() * 49) + 1;

  document.getElementById("question").innerHTML = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi><mo>=</mo><mn>${radius}</mn></math>`;
  document.getElementById("answer").value = "";
  document.getElementById("currentQuestion").innerText = currentQuestion + " out of " + maxQuestions + " questions";
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById("answer").value);
  const correctAnswer = (4 / 3) * Math.PI * Math.pow(radius, 3);
  currentQuestion++;

  if (Math.abs(userAnswer - correctAnswer) < 0.01) {
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
