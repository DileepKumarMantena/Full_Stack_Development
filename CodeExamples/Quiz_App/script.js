const quizData = [
    {
        question: "What does the acronym 'DOM' stand for in JavaScript?",
        options: ["Document Object Model", "Data Object Mode", "Display Object Module", "Dynamic Object Manipulation"],
        answer: "Document Object Model"
    },
    {
        question: "Which method is used to add a new item to the end of an array?",
        options: ["push()", "addToEnd()", "append()", "insertLast()"],
        answer: "push()"
    },
    {
        question: "What is the result of the expression 'typeof null'?",
        options: ["null", "undefined", "object", "string"],
        answer: "object"
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: ["var", "let", "const", "declare"],
        answer: "var"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "' This is a comment"],
        answer: "// This is a comment"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 600; // 10 minutes in seconds


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = "Quiz completed!";
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;
}

displayQuestion();
submitButton.addEventListener('click', endQuiz);

