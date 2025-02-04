// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
 
});

// Test Logic
if (window.location.pathname.includes('test.html')) {
  const questions = [
    "Do you enjoy working with numbers?",
    "Are you creative and enjoy designing things?",
    "Do you like helping others and solving their problems?",
    "Are you interested in technology and innovation?",
  ];

  const options = ["Yes", "No"];
  let currentQuestion = 0;
  const progressBar = document.querySelector('.progress');
  const questionText = document.getElementById('question-text');
  const nextButton = document.querySelector('.next-question');

  function updateQuestion() {
    questionText.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion]}`;
    progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    nextButton.disabled = true;
  }

  document.querySelectorAll('.option').forEach((button, index) => {
    button.addEventListener('click', () => {
      nextButton.disabled = false;
    });
  });

  nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      updateQuestion();
    } else {
      window.location.href = 'results.html';
    }
  });

  updateQuestion();
}

// Retake Test Button
if (window.location.pathname.includes('results.html')) {
  document.querySelector('.retake-test').addEventListener('click', () => {
    window.location.href = 'test.html';
  });
}