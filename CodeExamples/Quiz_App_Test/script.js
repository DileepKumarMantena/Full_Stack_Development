const quizData = [
    {
        questionNumber: 1,
        question: "What does the SQL INNER JOIN clause do?",
        options: ["Returns only the rows that have matching values in both tables", "Returns all rows from both tables", "Returns only the rows from the left table", "Returns only the rows from the right table"],
        answer: "Returns only the rows that have matching values in both tables"
    },
    {
        questionNumber: 2,
        question: "Which SQL statement is used to retrieve data from multiple tables?",
        options: ["JOIN", "SELECT", "WHERE", "GROUP BY"],
        answer: "JOIN"
    },
    {
        questionNumber: 3,
        question: "What is the purpose of the SQL LEFT JOIN clause?",
        options: ["Returns all rows from the left table and the matched rows from the right table", "Returns only the rows from the left table", "Returns only the rows from the right table", "Returns only the rows that have matching values in both tables"],
        answer: "Returns all rows from the left table and the matched rows from the right table"
    },
    {
        questionNumber: 4,
        question: "Which SQL clause is used to specify a condition for the rows returned by a query?",
        options: ["WHERE", "JOIN", "GROUP BY", "ORDER BY"],
        answer: "WHERE"
    },
    {
        questionNumber: 5,
        question: "What does the SQL ORDER BY clause do?",
        options: ["Sorts the result set by specified columns", "Filters the result set based on a condition", "Groups the result set by specified columns", "Joins multiple tables"],
        answer: "Sorts the result set by specified columns"
    },
    {
        questionNumber: 6,
        question: "Which SQL operator is used to combine multiple conditions in a WHERE clause?",
        options: ["AND", "OR", "NOT", "LIKE"],
        answer: "AND"
    },
    {
        questionNumber: 7,
        question: "What is the purpose of the SQL HAVING clause?",
        options: ["Filters the result set based on a condition", "Groups the result set by specified columns", "Orders the result set", "Combines rows from two or more tables"],
        answer: "Filters the result set based on a condition"
    },
    {
        questionNumber: 8,
        question: "Which SQL clause is used to specify the order of the result set?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
        answer: "ORDER BY"
    },
    {
        questionNumber: 9,
        question: "What is the purpose of the SQL GROUP BY clause?",
        options: ["Groups the result set by specified columns", "Filters the result set based on a condition", "Orders the result set", "Joins multiple tables"],
        answer: "Groups the result set by specified columns"
    },
    {
        questionNumber: 10,
        question: "Which SQL JOIN returns all rows from the left table, even if there are no matches in the right table?",
        options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"],
        answer: "LEFT JOIN"
    },
    {
        questionNumber: 11,
        question: "What does the SQL FULL JOIN clause do?",
        options: ["Returns all rows from both tables, with null values where there is no match", "Returns only the rows that have matching values in both tables", "Returns all rows from the left table", "Returns all rows from the right table"],
        answer: "Returns all rows from both tables, with null values where there is no match"
    },
    {
        questionNumber: 12,
        question: "Which SQL clause is used to filter rows based on a specified condition?",
        options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
        answer: "WHERE"
    },
    {
        questionNumber: 13,
        question: "What is the purpose of the SQL OUTER JOIN clause?",
        options: ["Returns all rows from both tables, with null values where there is no match", "Returns only the rows that have matching values in both tables", "Returns all rows from the left table", "Returns all rows from the right table"],
        answer: "Returns all rows from both tables, with null values where there is no match"
    },
    {
        questionNumber: 14,
        question: "Which SQL clause is used to specify the conditions for grouped data?",
        options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
        answer: "HAVING"
    },
    {
        questionNumber: 15,
        question: "What does the SQL EXISTS operator do?",
        options: ["Checks for the existence of any record in a subquery result", "Sorts the result set", "Filters the result set based on a condition", "Returns unique values in a specified column"],
        answer: "Checks for the existence of any record in a subquery result"
    },
    {
        questionNumber: 16,
        question: "What is the purpose of the SQL UNION operator?",
        options: ["Combines the results of two or more SELECT statements", "Joins multiple tables", "Orders the result set", "Filters the result set"],
        answer: "Combines the results of two or more SELECT statements"
    },
    {
        questionNumber: 17,
        question: "Which SQL operator is used to search for a specified pattern in a column?",
        options: ["LIKE", "IN", "BETWEEN", "IS NULL"],
        answer: "LIKE"
    },
    {
        questionNumber: 18,
        question: "What is the purpose of the SQL DISTINCT keyword?",
        options: ["Returns unique values in a specified column", "Returns all values in a specified column", "Sorts the result set", "Filters the result set"],
        answer: "Returns unique values in a specified column"
    },
    {
        questionNumber: 19,
        question: "Which SQL clause is used to specify a list of values to match a column against?",
        options: ["IN", "BETWEEN", "LIKE", "EXISTS"],
        answer: "IN"
    },
    {
        questionNumber: 20,
        question: "What does the SQL BETWEEN operator do?",
        options: ["Specifies a range of values", "Searches for a specified pattern in a column", "Filters the result set based on a condition", "Combines the results of two or more SELECT statements"],
        answer: "Specifies a range of values"
    }
];





let currentQuestion = 0;
let score = 0;
let timeLeft = 2100; // 35 minutes in seconds
let userAnswers = [];


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const backButton = document.getElementById('back');
const scoreElement = document.getElementById('score');

// Function to display question and options
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

// Function to handle option selection
function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    userAnswers[currentQuestion] = selectedOption; // Store user's answer
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    displayQuestion();
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Function to end the quiz
function endQuiz() {
    questionElement.innerText = "Quiz completed!";
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
    backButton.style.display = 'none'; // Hide back button after quiz completion
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;

    // Display wrong answers
    let wrongAnswers = [];
    quizData.forEach((question, index) => {
        if (userAnswers[index] !== question.answer) {
            wrongAnswers.push({
                question: question.question,
                selectedAnswer: userAnswers[index],
                correctAnswer: question.answer
            });
        }
    });
     // Display wrong answers to the user
     if (wrongAnswers.length > 0) {
        wrongAnswers.forEach((wrongAnswer, index) => {
            scoreElement.insertAdjacentHTML('beforeend', `<p>Question ${index + 1}: ${wrongAnswer.question}</p>
                <p>Selected Answer: ${wrongAnswer.selectedAnswer}</p>
                <p>Correct Answer: ${wrongAnswer.correctAnswer}</p>`);
        });
    } else {
        scoreElement.insertAdjacentHTML('beforeend', `<p>Congratulations! All answers are correct.</p>`);
    }
}


displayQuestion();
submitButton.addEventListener('click', endQuiz);
backButton.addEventListener('click', goBack);

// Call displayQuestion to start the quiz
displayQuestion();