const quizData = [
    {
        questionNumber: 1,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Standard Query Language", "Structured Query Logic"],
        answer: "Structured Query Language"
    },
    {
        questionNumber: 2,
        question: "Which SQL keyword is used to retrieve data from a database?",
        options: ["SELECT", "RETRIEVE", "FETCH", "GET"],
        answer: "SELECT"
    },
    {
        questionNumber: 3,
        question: "What is the purpose of the SQL WHERE clause?",
        options: ["To filter rows based on a specified condition", "To order the result set", "To perform calculations on the result set", "To group rows based on a specified condition"],
        answer: "To filter rows based on a specified condition"
    },
    {
        questionNumber: 4,
        question: "Which SQL function is used to count the number of rows in a table?",
        options: ["COUNT()", "SUM()", "MAX()", "AVG()"],
        answer: "COUNT()"
    },
    {
        questionNumber: 5,
        question: "What does the SQL ORDER BY clause do?",
        options: ["Sorts the result set by specified columns", "Filters the result set based on a condition", "Groups the result set by specified columns", "Joins multiple tables"],
        answer: "Sorts the result set by specified columns"
    },
    {
        questionNumber: 6,
        question: "What is the purpose of the SQL GROUP BY clause?",
        options: ["To group rows that have the same values into summary rows", "To filter rows based on a specified condition", "To order the result set", "To perform calculations on the result set"],
        answer: "To group rows that have the same values into summary rows"
    },
    {
        questionNumber: 7,
        question: "Which SQL operator is used to combine multiple conditions in a WHERE clause?",
        options: ["AND", "OR", "NOT", "LIKE"],
        answer: "AND"
    },
    {
        questionNumber: 8,
        question: "What does the SQL DISTINCT keyword do?",
        options: ["Returns unique values in a specified column", "Returns all values in a specified column", "Sorts the result set", "Filters the result set"],
        answer: "Returns unique values in a specified column"
    },
    {
        questionNumber: 9,
        question: "What is the purpose of the SQL JOIN clause?",
        options: ["To combine rows from two or more tables based on a related column", "To filter rows based on a specified condition", "To order the result set", "To group rows based on a specified condition"],
        answer: "To combine rows from two or more tables based on a related column"
    },
    {
        questionNumber: 10,
        question: "Which SQL statement is used to delete data from a database?",
        options: ["DELETE", "REMOVE", "ERASE", "TRUNCATE"],
        answer: "DELETE"
    },
    {
        questionNumber: 11,
        question: "What does the SQL INSERT INTO statement do?",
        options: ["Adds new records to a table", "Deletes records from a table", "Updates existing records in a table", "Combines rows from two or more tables"],
        answer: "Adds new records to a table"
    },
    {
        questionNumber: 12,
        question: "Which SQL function is used to find the maximum value in a column?",
        options: ["MAX()", "MIN()", "SUM()", "AVG()"],
        answer: "MAX()"
    },
    {
        questionNumber: 13,
        question: "What is the purpose of the SQL UPDATE statement?",
        options: ["Modifies existing records in a table", "Adds new records to a table", "Deletes records from a table", "Combines rows from two or more tables"],
        answer: "Modifies existing records in a table"
    },
    {
        questionNumber: 14,
        question: "Which SQL clause is used to specify conditions for grouped data?",
        options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
        answer: "HAVING"
    },
    {
        questionNumber: 15,
        question: "What does the SQL LIKE operator do?",
        options: ["Searches for a specified pattern in a column", "Sorts the result set", "Filters the result set based on a condition", "Returns unique values in a specified column"],
        answer: "Searches for a specified pattern in a column"
    },
    {
        questionNumber: 16,
        question: "What does the SQL UNION operator do?",
        options: ["Combines the results of two or more SELECT statements", "Joins multiple tables", "Orders the result set", "Filters the result set"],
        answer: "Combines the results of two or more SELECT statements"
    },
    {
        questionNumber: 17,
        question: "Which SQL function is used to calculate the average value in a column?",
        options: ["AVG()", "COUNT()", "SUM()", "MAX()"],
        answer: "AVG()"
    },
    {
        questionNumber: 18,
        question: "What is the purpose of the SQL LIMIT clause?",
        options: ["Limits the number of rows returned in the result set", "Filters the result set based on a condition", "Orders the result set", "Groups the result set"],
        answer: "Limits the number of rows returned in the result set"
    },
    {
        questionNumber: 19,
        question: "Which SQL statement is used to create a new table?",
        options: ["CREATE TABLE", "ADD TABLE", "INSERT INTO", "UPDATE TABLE"],
        answer: "CREATE TABLE"
    },
    {
        questionNumber: 20,
        question: "What is the purpose of the SQL CASCADE keyword in a FOREIGN KEY constraint?",
        options: ["Automatically deletes or updates related rows when the primary key is deleted or updated", "Prevents changes to the primary key", "Specifies a default value for the foreign key", "Joins multiple tables"],
        answer: "Automatically deletes or updates related rows when the primary key is deleted or updated"
    },
    {
        questionNumber: 21,
        question: "Which SQL statement is used to change the structure of a table?",
        options: ["ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE", "RENAME TABLE"],
        answer: "ALTER TABLE"
    },
    {
        questionNumber: 22,
        question: "What is the purpose of the SQL CONSTRAINT keyword?",
        options: ["Enforces rules on data in a table", "Filters the result set based on a condition", "Orders the result set", "Groups the result set"],
        answer: "Enforces rules on data in a table"
    },
    {
        questionNumber: 23,
        question: "Which SQL function is used to find the minimum value in a column?",
        options: ["MIN()", "MAX()", "AVG()", "COUNT()"],
        answer: "MIN()"
    },
    {
        questionNumber: 24,
        question: "What does the SQL DROP TABLE statement do?",
        options: ["Deletes a table from the database", "Deletes records from a table", "Modifies existing records in a table", "Combines rows from two or more tables"],
        answer: "Deletes a table from the database"
    },
    {
        questionNumber: 25,
        question: "Which SQL clause is used to specify the order of the result set?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
        answer: "ORDER BY"
    },
    {
        questionNumber: 26,
        question: "What does the SQL BETWEEN operator do?",
        options: ["Specifies a range of values", "Searches for a specified pattern in a column", "Filters the result set based on a condition", "Combines the results of two or more SELECT statements"],
        answer: "Specifies a range of values"
    },
    {
        questionNumber: 27,
        question: "Which SQL statement is used to create an index on a table?",
        options: ["CREATE INDEX", "ADD INDEX", "INSERT INDEX", "UPDATE INDEX"],
        answer: "CREATE INDEX"
    },
    {
        questionNumber: 28,
        question: "What is the purpose of the SQL TRUNCATE TABLE statement?",
        options: ["Removes all records from a table", "Deletes a table from the database", "Modifies existing records in a table", "Combines rows from two or more tables"],
        answer: "Removes all records from a table"
    },
    {
        questionNumber: 29,
        question: "Which SQL function is used to perform calculations on a result set?",
        options: ["GROUP BY", "HAVING", "ORDER BY", "Aggregate functions"],
        answer: "Aggregate functions"
    },
    {
        questionNumber: 30,
        question: "What does the SQL DROP DATABASE statement do?",
        options: ["Deletes the entire database", "Deletes a table from the database", "Deletes records from a table", "Modifies existing records in a table"],
        answer: "Deletes the entire database"
    }
];



let currentQuestion = 0;
let score = 0;
let timeLeft = 2100; // 35 minutes in seconds

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const backButton = document.getElementById('back');
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
    displayQuestion();
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function endQuiz() {
    questionElement.innerText = "Quiz completed!";
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
    backButton.style.display = 'none'; // Hide back button after quiz completion
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;
}

displayQuestion();
submitButton.addEventListener('click', endQuiz);
backButton.addEventListener('click', goBack);