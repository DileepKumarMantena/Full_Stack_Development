document.addEventListener('DOMContentLoaded', () => {
    const startQuizButton = document.getElementById('start-quiz');
    const submitAnswersButton = document.getElementById('submit-answers');
    const languageSelect = document.getElementById('language');
    const quizSection = document.getElementById('quiz-section');
    const resultsSection = document.getElementById('results-section');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('results');
    const timerDisplay = document.getElementById('timer-count');

    let selectedLanguage = '';
    let questions = [];
    let timer;
    let timeRemaining = 60000*5; // 60 seconds

    // Sample questions data
    const questionsData = {
        python: [
            { question: 'What is the output of print(2 ** 3)?', options: ['8', '9', '6', '4'], answer: '8' },
            { question: 'Which of the following is a mutable data type?', options: ['Tuple', 'List', 'String', 'Int'], answer: 'List' },
            { question: 'How do you insert an element at the end of a list?', options: ['append()', 'add()', 'insert()', 'extend()'], answer: 'append()' },
            { question: 'What is the output of the following code: `print("Hello" * 3)`?', options: ['HelloHelloHello', 'Hello3', '3Hello', 'Hello'], answer: 'HelloHelloHello' },
            { question: 'Which of the following is used to define a function in Python?', options: ['function', 'def', 'func', 'define'], answer: 'def' }
        ],
        django: [
            { question: 'Which command is used to create a new Django project?', options: ['django-admin startproject', 'python manage.py startproject', 'django startproject', 'django-admin createproject'], answer: 'django-admin startproject' },
            { question: 'What is the default port number for the Django development server?', options: ['8000', '8080', '3000', '5000'], answer: '8000' },
            { question: 'Which method is used to create a new Django app?', options: ['django-admin startapp', 'python manage.py startapp', 'django startapp', 'django-admin createapp'], answer: 'django-admin startapp' },
            { question: 'In Django, where do you define your database configurations?', options: ['models.py', 'views.py', 'settings.py', 'urls.py'], answer: 'settings.py' },
            { question: 'What does the `manage.py` file do in a Django project?', options: ['Creates a new app', 'Runs the server', 'Manages database migrations', 'Provides command-line utilities'], answer: 'Provides command-line utilities' }
        ],
        sql: [
            { question: 'Which SQL keyword is used to sort the result-set?', options: ['ORDER BY', 'SORT', 'GROUP BY', 'FILTER'], answer: 'ORDER BY' },
            { question: 'Which SQL clause is used to filter the results?', options: ['WHERE', 'FILTER', 'ORDER BY', 'HAVING'], answer: 'WHERE' },
            { question: 'Which command is used to retrieve data from a table in SQL?', options: ['SELECT', 'GET', 'RETRIEVE', 'FETCH'], answer: 'SELECT' },
            { question: 'What does the `JOIN` clause do in SQL?', options: ['Combines rows from two or more tables', 'Filters rows based on a condition', 'Groups rows based on a column', 'Sorts rows in ascending or descending order'], answer: 'Combines rows from two or more tables' },
            { question: 'What is the purpose of the `GROUP BY` clause in SQL?', options: ['To filter rows', 'To group rows that have the same values', 'To sort rows', 'To join tables'], answer: 'To group rows that have the same values' }
        ],
        react: [
            { question: 'Which method is used to update the state in React?', options: ['setState()', 'updateState()', 'modifyState()', 'changeState()'], answer: 'setState()' },
            { question: 'What is the purpose of the `render()` method in React?', options: ['To define how UI elements should be displayed', 'To handle user input', 'To fetch data from an API', 'To manage state'], answer: 'To define how UI elements should be displayed' },
            { question: 'Which React hook is used to manage side effects?', options: ['useEffect', 'useState', 'useContext', 'useReducer'], answer: 'useEffect' },
            { question: 'How do you pass data from a parent component to a child component in React?', options: ['Props', 'State', 'Context', 'Refs'], answer: 'Props' },
            { question: 'What does JSX stand for in React?', options: ['JavaScript XML', 'JavaScript X', 'JavaScript Extension', 'JavaScript Execution'], answer: 'JavaScript XML' }
        ]
    };
    startQuizButton.addEventListener('click', () => {
        selectedLanguage = languageSelect.value;
        if (selectedLanguage && questionsData[selectedLanguage]) {
            questions = questionsData[selectedLanguage];
            displayQuestions(questions);
            quizSection.classList.remove('hidden');
            document.getElementById('language-selection').classList.add('hidden');
            startTimer();
        }
    });

    submitAnswersButton.addEventListener('click', () => {
        clearInterval(timer); // Stop the timer
        calculateResults(questions);
        resultsSection.classList.remove('hidden');
        quizSection.classList.add('hidden');
    });

    function displayQuestions(questions) {
        questionsContainer.innerHTML = '';
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map(option => `
                    <label class="option">
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            `;
            questionsContainer.appendChild(questionDiv);
        });
    }

    function calculateResults(questions) {
        let score = 0;
        let resultHTML = '';

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            const userAnswer = selectedOption ? selectedOption.value : '';
            if (userAnswer === q.answer) {
                score++;
            }

            resultHTML += `
                <div class="result-item">
                    <p>Question ${index + 1}: ${q.question}</p>
                    <p>Your Answer: ${userAnswer || 'No answer selected'}</p>
                    <p>Correct Answer: ${q.answer}</p>
                    <p>${userAnswer === q.answer ? 'Correct' : 'Incorrect'}</p>
                </div>
            `;
        });

        resultsContainer.innerHTML = `
            <p>Your Score: ${score} / ${questions.length}</p>
            ${resultHTML}
        `;
    }

    function startTimer() {
        let seconds = timeRemaining / 1000;
        timer = setInterval(() => {
            seconds--;
            const minutes = Math.floor(seconds / 60);
            const secondsRemaining = seconds % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
            
            if (seconds <= 0) {
                clearInterval(timer);
                alert('Time is up!');
                submitAnswersButton.click(); // Automatically submit answers when time is up
            }
        }, 1000);
    }
});
