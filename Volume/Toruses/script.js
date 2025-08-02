let majorRadius, minorRadius;
let score = 0;
let currentQuestion = 1;
let maxQuestions = 1000;

function generateQuestion() {
  majorRadius = Math.floor(Math.random() * 49) + 1;
  minorRadius = Math.floor(Math.random() * 49) + 1;

  if (minorRadius >= majorRadius) {
    [minorRadius, majorRadius] = [majorRadius, minorRadius];
  }

  document.getElementById("question").innerHTML = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>R</mi><mo>=</mo><mn>${majorRadius}</mn><mo>,</mo><mi>r</mi><mo>=</mo><mn>${minorRadius}</mn></math>`;
  document.getElementById("answer").value = "";
  document.getElementById("currentQuestion").innerText = currentQuestion + " out of " + maxQuestions + " questions";
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById("answer").value);
  const correctAnswer = 2 * Math.pow(Math.PI, 2) * majorRadius * Math.pow(minorRadius, 2);
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
