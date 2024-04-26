const quizData = [
    {
        question: "Retrieve all columns from the 'employees' table.",
        query: "SELECT * FROM employees"
    },
    {
        question: "Retrieve the 'name' and 'age' columns from the 'students' table.",
        query: "SELECT name, age FROM students"
    },
    {
        question: "Retrieve distinct values of the 'department' column from the 'employees' table.",
        query: "SELECT DISTINCT department FROM employees"
    },
    {
        question: "Retrieve all records from the 'orders' table where the 'total_amount' is greater than 100.",
        query: "SELECT * FROM orders WHERE total_amount > 100"
    },
    {
        question: "Retrieve the count of records from the 'products' table.",
        query: "SELECT COUNT(*) FROM products"
    },
    {
        question: "Retrieve the average salary from the 'employees' table.",
        query: "SELECT AVG(salary) FROM employees"
    },
    {
        question: "Retrieve the highest salary from the 'employees' table.",
        query: "SELECT MAX(salary) FROM employees"
    },
    {
        question: "Retrieve the name and price of products from the 'products' table, ordered by price in descending order.",
        query: "SELECT name, price FROM products ORDER BY price DESC"
    },
    {
        question: "Retrieve the total number of employees in each department from the 'employees' table.",
        query: "SELECT department, COUNT(*) AS num_employees FROM employees GROUP BY department"
    },
    {
        question: "Retrieve the average age of students from the 'students' table, grouped by their gender.",
        query: "SELECT gender, AVG(age) AS average_age FROM students GROUP BY gender"
    },
    {
        question: "Retrieve the name and price of products from the 'products' table, where price is between 10 and 50.",
        query: "SELECT name, price FROM products WHERE price BETWEEN 10 AND 50"
    },
    {
        question: "Retrieve the name and email of customers from the 'customers' table, where email is not null.",
        query: "SELECT name, email FROM customers WHERE email IS NOT NULL"
    },
    {
        question: "Retrieve the top 5 highest priced products from the 'products' table.",
        query: "SELECT name, price FROM products ORDER BY price DESC LIMIT 5"
    },
    {
        question: "Retrieve the average order amount from the 'orders' table, excluding orders with a total amount less than 50.",
        query: "SELECT AVG(total_amount) FROM orders WHERE total_amount >= 50"
    },
    {
        question: "Retrieve the name and age of students from the 'students' table, where age is greater than the average age of all students.",
        query: "SELECT name, age FROM students WHERE age > (SELECT AVG(age) FROM students)"
    }
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const queryElement = document.getElementById('query');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    questionElement.textContent = quizData[currentQuestion].question;
    resultElement.textContent = "";
}

function checkAnswer() {
    const userQuery = queryElement.value.trim().toUpperCase();
    const correctQuery = quizData[currentQuestion].query.trim().toUpperCase();

    if (userQuery === correctQuery) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

    scoreElement.textContent = `Score: ${score}/${quizData.length}`;
}

function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    queryElement.style.display = 'none';
    submitButton.style.display = 'none';
}

displayQuestion();
submitButton.addEventListener('click', checkAnswer);
