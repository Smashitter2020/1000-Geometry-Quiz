let outerRadius, innerRadius, angle;
let score = 0;
let currentQuestion = 1;
let maxQuestions = 1000;

function generateQuestion() {
  outerRadius = Math.floor(Math.random() * 20) + 1;
  innerRadius = Math.floor(Math.random() * 20) + 1;
  angle = Math.floor(Math.random() * 359) + 1;

  if (innerRadius >= outerRadius) {
    [innerRadius, outerRadius] = [outerRadius, innerRadius];
    innerRadius--;
  }

  document.getElementById("question").innerHTML = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>R</mi><mo>=</mo><mn>${outerRadius}</mn><mo>,</mo><mi>r</mi><mo>=</mo><mn>${innerRadius}</mn><mo>,<mi>&#x3b8;</mi><mo>=</mo><mn>${angle}</mn></math>`;
  document.getElementById("answer").value = "";
  document.getElementById("currentQuestion").innerText = currentQuestion + " out of " + maxQuestions + " questions";
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById("answer").value);
  const correctAnswer = (angle / 360) * Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2));
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
