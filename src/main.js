import './style.css';
import { questions, careerPaths } from './questions.js';

// Theme Management
const themeToggle = document.getElementById('themeToggle');
let isDarkMode = false;



themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    

});

// Test State Management
let currentQuestion = 0;
let userAnswers = [];
let timer = null;
let timeSpent = 0;

// DOM Elements
const sections = {
    landing: document.getElementById('landing'),
    test: document.getElementById('test'),
    results: document.getElementById('results')
};

const elements = {
    startButton: document.getElementById('startTest'),
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    questionContainer: document.getElementById('questionContainer'),
    progress: document.getElementById('progress'),
    timer: document.getElementById('timer'),
    resultContainer: document.getElementById('resultContainer'),
    saveResults: document.getElementById('saveResults'),
    printResults: document.getElementById('printResults'),
    retakeTest: document.getElementById('retakeTest')
};

// Navigation Functions
function showSection(sectionId) {
    Object.keys(sections).forEach(key => {
        sections[key].classList.toggle('active', key === sectionId);
        sections[key].classList.toggle('hidden', key !== sectionId);
    });
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    elements.progress.style.width = `${progress}%`;
}

function updateTimer() {
    timeSpent++;
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    elements.timer.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function displayQuestion() {
    const question = questions[currentQuestion];
    elements.questionContainer.innerHTML = `
        <div class="question">
            <h2>Question ${question.id} of ${questions.length}</h2>
            <p>${question.text}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}" 
                         data-index="${index}">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add event listeners to options
    document.querySelectorAll('.option').forEach((option, index) => {
        option.addEventListener('click', () => selectOption(index));
    });

    updateProgress();
    elements.prevButton.style.display = currentQuestion === 0 ? 'none' : 'block';
    elements.nextButton.textContent = currentQuestion === questions.length - 1 ? 'Submit' : 'Next';
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    displayQuestion();
}

function calculateResults() {
    const scores = {
        technical: 0,
        creative: 0,
        social: 0,
        logical: 0,
        practical: 0
    };

    userAnswers.forEach((answer, index) => {
        const questionScores = questions[index].options[answer].score;
        Object.keys(questionScores).forEach(key => {
            if (scores.hasOwnProperty(key)) {
                scores[key] += questionScores[key];
            }
        });
    });

    return Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([category]) => careerPaths[category]);
}

function displayResults(results) {
    elements.resultContainer.innerHTML = results.map(result => `
        <div class="result-card">
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <p><strong>Key Skills:</strong> ${result.skills.join(', ')}</p>
            <p><strong>Industry:</strong> ${result.industry}</p>
        </div>
    `).join('');
}

// Event Listeners
elements.startButton.addEventListener('click', () => {
    showSection('test');
    displayQuestion();
    timer = setInterval(updateTimer, 1000);
});

elements.prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
});

elements.nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        if (userAnswers[currentQuestion] !== undefined) {
            currentQuestion++;
            displayQuestion();
        } else {
            alert('Please select an answer before proceeding.');
        }
    } else if (userAnswers[currentQuestion] !== undefined) {
        clearInterval(timer);
        const results = calculateResults();
        displayResults(results);
        showSection('results');
    } else {
        alert('Please select an answer before submitting.');
    }
});

elements.saveResults.addEventListener('click', () => {
    const results = calculateResults();
    const savedResults = JSON.parse(localStorage.getItem('aptitudeResults') || '[]');
    savedResults.push({
        date: new Date().toISOString(),
        timeSpent,
        results
    });
    localStorage.setItem('aptitudeResults', JSON.stringify(savedResults));
    alert('Results saved successfully!');
});

elements.printResults.addEventListener('click', () => {
    window.print();
});

elements.retakeTest.addEventListener('click', () => {
    currentQuestion = 0;
    userAnswers = [];
    timeSpent = 0;
    showSection('test');
    displayQuestion();
    timer = setInterval(updateTimer, 1000);
});