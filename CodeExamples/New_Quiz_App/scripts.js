document.addEventListener('DOMContentLoaded', () => {
    const startQuizButton = document.getElementById('start-quiz');
    const submitAnswersButton = document.getElementById('submit-answers');
    const retakeQuizButton = document.getElementById('retake-quiz');
    const languageSelect = document.getElementById('language');
    const quizSection = document.getElementById('quiz-section');
    const resultsSection = document.getElementById('results-section');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('results');
    const timerDisplay = document.getElementById('timer-count');

    let selectedLanguage = '';
    let questions = [];
    let timer;
    const initialTime = 60000 * 5; // 5 minutes
    let timeRemaining = initialTime;

    // Sample questions data
    const questionsData = {
        python: [
            { question: 'What is the output of `list(map(lambda x: x ** 2, [1, 2, 3]))`?', options: ['[1, 4, 9]', '[1, 4, 6]', '[1, 2, 3]', 'TypeError'], answer: '[1, 4, 9]' },
            { question: 'Which of the following statements is true about Python\'s `__slots__`?', options: ['It is used to create instance attributes dynamically.', 'It prevents the creation of new attributes dynamically.', 'It is used to define default values for attributes.', 'It is used to create class methods.'], answer: 'It prevents the creation of new attributes dynamically.' },
            { question: 'How does Python\'s garbage collection mechanism work?', options: ['It uses reference counting and cyclic garbage collection.', 'It uses only reference counting.', 'It uses only cyclic garbage collection.', 'It relies on manual memory management.'], answer: 'It uses reference counting and cyclic garbage collection.' },
            { question: 'What is the result of the expression `is(0, -0)` in Python?', options: ['True', 'False', 'TypeError', 'None'], answer: 'True' },
            { question: 'What is the time complexity of the `pop(0)` operation on a Python list?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], answer: 'O(n)' },
            { question: 'What will be the output of the following code? `print(0.1 + 0.2 == 0.3)`', options: ['True', 'False', 'TypeError', '0.1 + 0.2'], answer: 'False' },
            { question: 'In Python, how can you achieve memoization of function calls?', options: ['By using a cache decorator like `@lru_cache`.', 'By storing results in a global dictionary.', 'By manually implementing a cache system.', 'By using the `functools` module only.'], answer: 'By using a cache decorator like `@lru_cache`.' },
            { question: 'Which method is used to create an instance of a class in Python?', options: ['create()', 'init()', 'new()', '__init__()'], answer: '__init__()' },
            { question: 'What does the `with` statement do in Python?', options: ['It creates a context manager for resource management.', 'It defines a new function scope.', 'It imports modules.', 'It handles exceptions.'], answer: 'It creates a context manager for resource management.' },
            { question: 'How can you ensure that a Python function is thread-safe?', options: ['By using locks from the `threading` module.', 'By avoiding global variables.', 'By using immutable objects only.', 'By writing functions with local variables only.'], answer: 'By using locks from the `threading` module.' }
        ],
        django: [
            { question: 'What is the purpose of Django\'s `migrations`?', options: ['To synchronize database schema with the Django models.', 'To handle user authentication.', 'To cache database queries.', 'To manage static files.'], answer: 'To synchronize database schema with the Django models.' },
            { question: 'Which of the following is not a Django field type?', options: ['CharField', 'DateField', 'IntegerField', 'TimeField'], answer: 'TimeField' },
            { question: 'How can you avoid the Django ORM from using SQL injection vulnerabilities?', options: ['By using parameterized queries.', 'By sanitizing inputs manually.', 'By escaping special characters in queries.', 'By using raw SQL queries.'], answer: 'By using parameterized queries.' },
            { question: 'What is the function of Django\'s `get_object_or_404`?', options: ['To retrieve an object and raise a 404 error if it does not exist.', 'To create a new object if it does not exist.', 'To update an object if it exists.', 'To delete an object if it exists.'], answer: 'To retrieve an object and raise a 404 error if it does not exist.' },
            { question: 'What is Django\'s `RequestContext` used for?', options: ['To provide context data for templates during rendering.', 'To handle HTTP request processing.', 'To manage database transactions.', 'To handle form submissions.'], answer: 'To provide context data for templates during rendering.' },
            { question: 'How can you prevent a Django view from being accessed by users who are not authenticated?', options: ['By using the `login_required` decorator.', 'By checking user credentials manually.', 'By using middleware.', 'By defining permissions in the view class.'], answer: 'By using the `login_required` decorator.' },
            { question: 'What is the purpose of the `urls.py` file in a Django project?', options: ['To define URL routing for the application.', 'To configure database settings.', 'To manage static files.', 'To handle user sessions.'], answer: 'To define URL routing for the application.' },
            { question: 'How do you define a custom management command in Django?', options: ['By creating a `management/commands` directory inside an app and adding a Python file.', 'By editing the `manage.py` file directly.', 'By modifying the `settings.py` file.', 'By using the `django-admin` command.'], answer: 'By creating a `management/commands` directory inside an app and adding a Python file.' },
            { question: 'What is Django\'s `admin.site.register()` used for?', options: ['To register models with the Django admin interface.', 'To configure database connections.', 'To define URL patterns for the admin interface.', 'To handle form validation.'], answer: 'To register models with the Django admin interface.' },
            { question: 'How can you change the default behavior of Django\'s form validation?', options: ['By overriding the `clean()` method in the form class.', 'By modifying the `validate()` method in the form class.', 'By using custom validators.', 'By changing the form field attributes.'], answer: 'By overriding the `clean()` method in the form class.' }
        ],
        sql: [
            { question: 'Which SQL keyword is used to sort the result-set?', options: ['ORDER BY', 'SORT', 'GROUP BY', 'FILTER'], answer: 'ORDER BY' },
            { question: 'Which SQL clause is used to filter the results?', options: ['WHERE', 'FILTER', 'ORDER BY', 'HAVING'], answer: 'WHERE' },
            { question: 'Which command is used to retrieve data from a table in SQL?', options: ['SELECT', 'GET', 'RETRIEVE', 'FETCH'], answer: 'SELECT' },
            { question: 'What does the `JOIN` clause do in SQL?', options: ['Combines rows from two or more tables', 'Filters rows based on a condition', 'Groups rows based on a column', 'Sorts rows in ascending or descending order'], answer: 'Combines rows from two or more tables' },
            { question: 'What is the purpose of the `GROUP BY` clause in SQL?', options: ['To filter rows', 'To group rows that have the same values', 'To sort rows', 'To join tables'], answer: 'To group rows that have the same values' },
            { question: 'What is the default sorting order of the `ORDER BY` clause in SQL?', options: ['Ascending', 'Descending', 'Random', 'Unsorted'], answer: 'Ascending' },
            { question: 'Which SQL function is used to find the number of rows in a result set?', options: ['COUNT()', 'SUM()', 'AVG()', 'TOTAL()'], answer: 'COUNT()' },
            { question: 'What is the result of the `DISTINCT` keyword in SQL?', options: ['Removes duplicate values from the result set.', 'Sorts the result set.', 'Filters rows based on a condition.', 'Joins multiple tables.'], answer: 'Removes duplicate values from the result set.' },
            { question: 'Which SQL statement is used to modify existing records in a table?', options: ['UPDATE', 'ALTER', 'INSERT', 'MODIFY'], answer: 'UPDATE' },
            { question: 'How do you remove a table from a database in SQL?', options: ['DROP TABLE', 'DELETE TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE'], answer: 'DROP TABLE' }
        ],
        react: [
            { question: 'Which method is used to update the state in React?', options: ['setState()', 'updateState()', 'modifyState()', 'changeState()'], answer: 'setState()' },
            { question: 'What is the purpose of the `render()` method in React?', options: ['To define how UI elements should be displayed', 'To handle user input', 'To fetch data from an API', 'To manage state'], answer: 'To define how UI elements should be displayed' },
            { question: 'Which React hook is used to manage side effects?', options: ['useEffect', 'useState', 'useContext', 'useReducer'], answer: 'useEffect' },
            { question: 'How do you pass data from a parent component to a child component in React?', options: ['Props', 'State', 'Context', 'Refs'], answer: 'Props' },
            { question: 'What does JSX stand for in React?', options: ['JavaScript XML', 'JavaScript X', 'JavaScript Extension', 'JavaScript Execution'], answer: 'JavaScript XML' },
            { question: 'What is the difference between `useMemo` and `useCallback` hooks in React?', options: ['`useMemo` caches the result of a computation, `useCallback` caches the function instance.', '`useMemo` caches function instances, `useCallback` caches computation results.', 'Both are identical and used interchangeably.', 'None of the above.'], answer: '`useMemo` caches the result of a computation, `useCallback` caches the function instance.' },
            { question: 'What is the purpose of `React.StrictMode`?', options: ['To identify potential problems in the application during development.', 'To optimize the performance of the React application.', 'To handle errors in the application.', 'To improve the user interface.'], answer: 'To identify potential problems in the application during development.' },
            { question: 'How does React handle events compared to traditional HTML?', options: ['React uses a synthetic event system that normalizes events across different browsers.', 'React uses direct DOM events.', 'React events are handled by the browser directly.', 'React does not support event handling.'], answer: 'React uses a synthetic event system that normalizes events across different browsers.' },
            { question: 'What is the purpose of the `key` prop in React lists?', options: ['To provide a unique identifier for each list item.', 'To manage the state of list items.', 'To control the order of list items.', 'To style list items.'], answer: 'To provide a unique identifier for each list item.' },
            { question: 'How can you handle form submissions in React?', options: ['By using controlled components and handling the `onSubmit` event.', 'By using uncontrolled components only.', 'By using global state management.', 'By bypassing the default form submission behavior.'], answer: 'By using controlled components and handling the `onSubmit` event.' }
        ],
        java: [
            { question: 'What is the purpose of the `transient` keyword in Java?', options: ['To prevent serialization of a field.', 'To define a field that should not be modified.', 'To make a field static.', 'To create a constant field.'], answer: 'To prevent serialization of a field.' },
            { question: 'What is the result of the following code snippet: `int x = 10; System.out.println(++x * 10);`?', options: ['110', '100', '90', 'Error'], answer: '110' },
            { question: 'How does Java handle memory management?', options: ['Java uses automatic garbage collection.', 'Java requires manual memory management.', 'Java uses reference counting.', 'Java does not have memory management.'], answer: 'Java uses automatic garbage collection.' },
            { question: 'What is the output of `System.out.println(10 / 3)` in Java?', options: ['3', '3.333', 'Error', '3.0'], answer: '3' },
            { question: 'What does the `final` keyword do in Java?', options: ['It makes a variable constant, prevents method overriding, and inheritance.', 'It marks a method as abstract.', 'It defines a variable that can be changed.', 'It creates a static variable.'], answer: 'It makes a variable constant, prevents method overriding, and inheritance.' },
            { question: 'Which collection class is best suited for a thread-safe implementation in Java?', options: ['ConcurrentHashMap', 'HashMap', 'LinkedList', 'TreeMap'], answer: 'ConcurrentHashMap' },
            { question: 'What is the difference between `==` and `equals()` in Java?', options: ['`==` compares object references, while `equals()` compares object content.', '`==` compares object content, while `equals()` compares object references.', 'Both are identical in functionality.', 'Neither is used for comparison.'], answer: '`==` compares object references, while `equals()` compares object content.' },
            { question: 'What is the result of the following code? `int[] arr = new int[5]; System.out.println(arr[0]);`', options: ['0', 'null', 'Exception', 'undefined'], answer: '0' },
            { question: 'What is an anonymous class in Java?', options: ['A class defined within an expression.', 'A class without a name.', 'A class that extends a class but does not define any methods.', 'A class with a private constructor.'], answer: 'A class defined within an expression.' },
            { question: 'How do you declare an interface in Java?', options: ['Using the `interface` keyword.', 'Using the `class` keyword.', 'Using the `abstract` keyword.', 'Using the `enum` keyword.'], answer: 'Using the `interface` keyword.' }
        ],
        javascript: [
            { question: 'What is the output of `console.log(typeof NaN)`?', options: ['number', 'undefined', 'object', 'NaN'], answer: 'number' },
            { question: 'What is the purpose of `IIFE` in JavaScript?', options: ['To create a self-contained scope.', 'To define a function that is called immediately.', 'To avoid variable hoisting.', 'To optimize memory usage.'], answer: 'To create a self-contained scope.' },
            { question: 'How does JavaScript handle asynchronous code?', options: ['Using callbacks, promises, and async/await.', 'Using synchronous execution only.', 'Using only promises.', 'Using event listeners only.'], answer: 'Using callbacks, promises, and async/await.' },
            { question: 'What is the difference between `null` and `undefined` in JavaScript?', options: ['`null` is a value assigned intentionally, while `undefined` means a variable has not been assigned.', '`null` means a variable is not assigned, while `undefined` is a value.', 'Both are identical.', 'Neither represents any value.'], answer: '`null` is a value assigned intentionally, while `undefined` means a variable has not been assigned.' },
            { question: 'How can you create a new object using a constructor function in JavaScript?', options: ['Using the `new` keyword.', 'Using object literal notation.', 'Using the `Object.create()` method.', 'Using `Object.assign()`.'], answer: 'Using the `new` keyword.' },
            { question: 'What is the purpose of `event delegation` in JavaScript?', options: ['To improve performance by delegating event handling to a parent element.', 'To handle events on multiple elements individually.', 'To avoid using event listeners.', 'To directly manipulate DOM elements.'], answer: 'To improve performance by delegating event handling to a parent element.' },
            { question: 'What will `console.log(2 + 2)` output in JavaScript?', options: ['22', '4', 'Error', 'undefined'], answer: '22' },
            { question: 'What does the `bind()` method do in JavaScript?', options: ['It creates a new function with a specific `this` context.', 'It binds two functions together.', 'It executes a function immediately.', 'It modifies the original function.'], answer: 'It creates a new function with a specific `this` context.' },
            { question: 'What is a closure in JavaScript?', options: ['A function that retains access to its lexical scope even when the function is executed outside that scope.', 'A function that prevents memory leaks.', 'A function that handles asynchronous operations.', 'A method for optimizing performance.'], answer: 'A function that retains access to its lexical scope even when the function is executed outside that scope.' },
            { question: 'What is the output of `[1, 2] == [1, 2]` in JavaScript?', options: ['false', 'true', 'TypeError', 'undefined'], answer: 'false' },
            { question: 'How can you avoid callback hell in JavaScript?', options: ['By using promises or async/await.', 'By using nested callbacks.', 'By avoiding asynchronous operations.', 'By using synchronous functions only.'], answer: 'By using promises or async/await.' }
        ],
        csharp: [
            { question: 'What is the purpose of the `using` statement in C#?', options: ['To manage resources and ensure proper disposal.', 'To import namespaces.', 'To define class methods.', 'To create new objects.'], answer: 'To manage resources and ensure proper disposal.' },
            { question: 'What is the difference between `ref` and `out` parameters in C#?', options: ['`ref` requires the variable to be initialized, while `out` does not.', '`out` requires the variable to be initialized, while `ref` does not.', 'Both are identical in behavior.', 'Both are used for defining class properties.'], answer: '`ref` requires the variable to be initialized, while `out` does not.' },
            { question: 'How do you declare an indexer in C#?', options: ['By using the `this` keyword and defining a property.', 'By using a constructor.', 'By using a method with an index parameter.', 'By using the `index` keyword.'], answer: 'By using the `this` keyword and defining a property.' },
            { question: 'What is the purpose of the `virtual` keyword in C#?', options: ['To allow a method to be overridden in derived classes.', 'To define a static method.', 'To create a constant field.', 'To prevent method overriding.'], answer: 'To allow a method to be overridden in derived classes.' },
            { question: 'What is a `delegate` in C#?', options: ['A type that represents references to methods.', 'A type that defines properties.', 'A type that handles events.', 'A type that manages resources.'], answer: 'A type that represents references to methods.' },
            { question: 'What is the purpose of the `async` and `await` keywords in C#?', options: ['To handle asynchronous operations and improve code readability.', 'To define synchronous operations.', 'To create new threads.', 'To manage resource disposal.'], answer: 'To handle asynchronous operations and improve code readability.' },
            { question: 'What is the difference between `class` and `struct` in C#?', options: ['`class` is a reference type, while `struct` is a value type.', '`struct` is a reference type, while `class` is a value type.', 'Both are identical.', 'Neither can be used for object-oriented programming.'], answer: '`class` is a reference type, while `struct` is a value type.' },
            { question: 'What is a `constructor` in C#?', options: ['A method that initializes an instance of a class.', 'A method that destroys an instance of a class.', 'A method that modifies class properties.', 'A method that manages resources.'], answer: 'A method that initializes an instance of a class.' },
            { question: 'How do you handle exceptions in C#?', options: ['By using `try`, `catch`, and `finally` blocks.', 'By using `if` statements.', 'By using the `throw` keyword only.', 'By using `assert` statements.'], answer: 'By using `try`, `catch`, and `finally` blocks.' },
            { question: 'What is an `interface` in C#?', options: ['A contract that defines methods and properties without implementation.', 'A type that implements classes.', 'A class with abstract methods.', 'A type that handles exceptions.'], answer: 'A contract that defines methods and properties without implementation.' }
        ],
        php: [
            { question: 'What does PHP stand for?', options: ['Hypertext Preprocessor', 'Hypertext Programming', 'Preprocessor Hypertext', 'Programming Hypertext'], answer: 'Hypertext Preprocessor' },
            { question: 'How do you define a constant in PHP?', options: ['Using the `define()` function.', 'Using the `const` keyword.', 'Using the `constant()` function.', 'Using the `var` keyword.'], answer: 'Using the `define()` function.' },
            { question: 'What is the default way to handle error reporting in PHP?', options: ['Errors are displayed on the screen.', 'Errors are logged to a file.', 'Errors are suppressed.', 'Errors are not handled by default.'], answer: 'Errors are displayed on the screen.' },
            { question: 'What is the purpose of the `mysqli` extension in PHP?', options: ['To interact with MySQL databases.', 'To handle file uploads.', 'To manage sessions.', 'To define constants.'], answer: 'To interact with MySQL databases.' },
            { question: 'How can you create a session in PHP?', options: ['By using the `session_start()` function.', 'By using the `create_session()` function.', 'By defining a global variable.', 'By using the `start_session()` function.'], answer: 'By using the `session_start()` function.' },
            { question: 'What is the difference between `include` and `require` in PHP?', options: ['`include` will only produce a warning on failure, while `require` will produce a fatal error.', '`require` will only produce a warning on failure, while `include` will produce a fatal error.', 'Both are identical.', 'Neither is used for file inclusion.'], answer: '`include` will only produce a warning on failure, while `require` will produce a fatal error.' },
            { question: 'How can you handle form submissions in PHP?', options: ['By using the `$_POST` or `$_GET` superglobals.', 'By using the `form_data()` function.', 'By using the `submit_form()` function.', 'By using the `input_data()` function.'], answer: 'By using the `$_POST` or `$_GET` superglobals.' },
            { question: 'What is the purpose of the `header()` function in PHP?', options: ['To send raw HTTP headers.', 'To redirect to another page.', 'To set cookies.', 'To manage sessions.'], answer: 'To send raw HTTP headers.' },
            { question: 'How can you connect to a MySQL database using PHP?', options: ['By using the `mysqli_connect()` function.', 'By using the `mysql_connect()` function.', 'By using the `pdo_connect()` function.', 'By using the `connect()` function.'], answer: 'By using the `mysqli_connect()` function.' },
            { question: 'What is the result of `echo 5 + "10"` in PHP?', options: ['15', '510', 'Error', '5 + "10"'], answer: '15' }
        ],
        ruby: [
            { question: 'What is the output of `2 ** 3` in Ruby?', options: ['8', '6', '9', 'Error'], answer: '8' },
            { question: 'How do you define a class in Ruby?', options: ['Using the `class` keyword.', 'Using the `define_class` method.', 'Using the `new` keyword.', 'Using the `create` method.'], answer: 'Using the `class` keyword.' },
            { question: 'What is the purpose of `self` in Ruby?', options: ['To refer to the current object instance.', 'To create a new class.', 'To define constants.', 'To manage class methods.'], answer: 'To refer to the current object instance.' },
            { question: 'How do you define a method in Ruby?', options: ['Using the `def` keyword.', 'Using the `function` keyword.', 'Using the `method` keyword.', 'Using the `create` keyword.'], answer: 'Using the `def` keyword.' },
            { question: 'What does the `attr_accessor` method do in Ruby?', options: ['Creates getter and setter methods for instance variables.', 'Defines a constant.', 'Creates a class method.', 'Defines a module.'], answer: 'Creates getter and setter methods for instance variables.' },
            { question: 'How can you iterate over an array in Ruby?', options: ['By using the `each` method.', 'By using the `for` loop.', 'By using the `map` method.', 'By using the `while` loop.'], answer: 'By using the `each` method.' },
            { question: 'What is the purpose of the `yield` keyword in Ruby?', options: ['To pass control from a method to a block.', 'To create a new instance.', 'To define a class method.', 'To handle exceptions.'], answer: 'To pass control from a method to a block.' },
            { question: 'How do you create a module in Ruby?', options: ['Using the `module` keyword.', 'Using the `create` keyword.', 'Using the `def` keyword.', 'Using the `class` keyword.'], answer: 'Using the `module` keyword.' },
            { question: 'What is the purpose of the `include` keyword in Ruby?', options: ['To include a module in a class.', 'To define a method in a module.', 'To create a new instance of a class.', 'To handle exceptions.'], answer: 'To include a module in a class.' },
            { question: 'What does the `super` keyword do in Ruby?', options: ['Calls the same method in the parent class.', 'Creates a new method in the child class.', 'Defines a constant.', 'Handles errors.'], answer: 'Calls the same method in the parent class.' }
        ],
        swift: [
            { question: 'What is the purpose of the `guard` statement in Swift?', options: ['To exit early from a block of code if a condition is not met.', 'To handle errors in code.', 'To define a constant.', 'To create a new class.'], answer: 'To exit early from a block of code if a condition is not met.' },
            { question: 'How do you define a constant in Swift?', options: ['Using the `let` keyword.', 'Using the `const` keyword.', 'Using the `define` keyword.', 'Using the `var` keyword.'], answer: 'Using the `let` keyword.' },
            { question: 'What is the purpose of `Optional` in Swift?', options: ['To handle the absence of a value.', 'To define a variable.', 'To create a new class.', 'To handle errors.'], answer: 'To handle the absence of a value.' },
            { question: 'How do you define a class in Swift?', options: ['Using the `class` keyword.', 'Using the `struct` keyword.', 'Using the `object` keyword.', 'Using the `define` keyword.'], answer: 'Using the `class` keyword.' },
            { question: 'What does the `defer` statement do in Swift?', options: ['Schedules a block of code to be executed later.', 'Defines a constant.', 'Creates a new class.', 'Handles errors.'], answer: 'Schedules a block of code to be executed later.' },
            { question: 'How do you handle errors in Swift?', options: ['Using `try`, `catch`, and `throw`.', 'Using `try`, `catch`, and `finally`.', 'Using `throw` only.', 'Using `if` statements.'], answer: 'Using `try`, `catch`, and `throw`.' },
            { question: 'What is the difference between `struct` and `class` in Swift?', options: ['`struct` is a value type, while `class` is a reference type.', '`class` is a value type, while `struct` is a reference type.', 'Both are identical.', 'Neither can be used for object-oriented programming.'], answer: '`struct` is a value type, while `class` is a reference type.' },
            { question: 'What does the `self` keyword represent in Swift?', options: ['The current instance of a class or struct.', 'A new instance of a class.', 'A new class.', 'A constant value.'], answer: 'The current instance of a class or struct.' },
            { question: 'How do you define a function in Swift?', options: ['Using the `func` keyword.', 'Using the `function` keyword.', 'Using the `def` keyword.', 'Using the `create` keyword.'], answer: 'Using the `func` keyword.' },
            { question: 'What is the purpose of the `protocol` keyword in Swift?', options: ['To define a blueprint of methods and properties.', 'To create a new class.', 'To handle errors.', 'To define constants.'], answer: 'To define a blueprint of methods and properties.' }
        ],
        testing: [
            { question: 'What is the primary purpose of unit testing?', options: ['To verify individual components work as expected.', 'To test the entire application.', 'To check integration between systems.', 'To ensure user requirements are met.'], answer: 'To verify individual components work as expected.' },
            { question: 'What is a mock object in unit testing?', options: ['An object that simulates the behavior of real objects.', 'An object that performs real operations.', 'An object used to test integration.', 'An object that stores test results.'], answer: 'An object that simulates the behavior of real objects.' },
            { question: 'What is Test-Driven Development (TDD)?', options: ['A development approach where tests are written before code.', 'A testing approach where tests are written after code.', 'A method for manual testing.', 'A strategy for integrating code changes.'], answer: 'A development approach where tests are written before code.' },
            { question: 'What is the purpose of integration testing?', options: ['To test the interaction between different modules or systems.', 'To test individual components in isolation.', 'To test the user interface.', 'To test performance under load.'], answer: 'To test the interaction between different modules or systems.' },
            { question: 'What is the difference between regression testing and acceptance testing?', options: ['Regression testing checks for new issues in existing functionality, while acceptance testing verifies if the software meets user requirements.', 'Regression testing verifies if the software meets user requirements, while acceptance testing checks for new issues in existing functionality.', 'Both are the same.', 'Both are used for performance testing.'], answer: 'Regression testing checks for new issues in existing functionality, while acceptance testing verifies if the software meets user requirements.' },
            { question: 'What is the purpose of a test case?', options: ['To define a specific scenario to test a particular feature.', 'To document the software requirements.', 'To design the user interface.', 'To outline the development process.'], answer: 'To define a specific scenario to test a particular feature.' },
            { question: 'What is a test plan?', options: ['A document outlining the scope, approach, resources, and schedule for testing activities.', 'A list of test cases.', 'A report on test results.', 'A checklist of software features.'], answer: 'A document outlining the scope, approach, resources, and schedule for testing activities.' },
            { question: 'What is the difference between black-box testing and white-box testing?', options: ['Black-box testing focuses on functionality without knowledge of the internal code, while white-box testing involves knowledge of the internal code.', 'Black-box testing involves knowledge of the internal code, while white-box testing focuses on functionality.', 'Both are the same.', 'Both are used for performance testing.'], answer: 'Black-box testing focuses on functionality without knowledge of the internal code, while white-box testing involves knowledge of the internal code.' },
            { question: 'What is a test stub?', options: ['A minimal implementation of a component used to test other components.', 'A tool for performance testing.', 'A document outlining test cases.', 'A script for automating tests.'], answer: 'A minimal implementation of a component used to test other components.' },
            { question: 'What is exploratory testing?', options: ['Testing without predefined test cases, focusing on discovering defects through exploration.', 'Testing with predefined test cases.', 'Automated testing of features.', 'Testing with a focus on performance.'], answer: 'Testing without predefined test cases, focusing on discovering defects through exploration.' }
        ],
        selenium: [
            { question: 'What is Selenium used for?', options: ['Automating web browser interactions.', 'Automating desktop applications.', 'Creating mobile applications.', 'Managing databases.'], answer: 'Automating web browser interactions.' },
            { question: 'Which component of Selenium is used for browser automation?', options: ['Selenium WebDriver', 'Selenium Grid', 'Selenium IDE', 'Selenium RC'], answer: 'Selenium WebDriver' },
            { question: 'What is the purpose of Selenium Grid?', options: ['To run tests on multiple machines and browsers simultaneously.', 'To record and playback tests.', 'To manage Selenium WebDriver instances.', 'To define test cases.'], answer: 'To run tests on multiple machines and browsers simultaneously.' },
            { question: 'How do you handle alerts in Selenium WebDriver?', options: ['Using the `Alert` interface and its methods.', 'Using the `WebDriver` interface.', 'Using JavaScript directly.', 'Using browser settings.'], answer: 'Using the `Alert` interface and its methods.' },
            { question: 'What is the difference between `findElement` and `findElements` methods in Selenium WebDriver?', options: ['`findElement` returns a single element, while `findElements` returns a list of elements.', '`findElement` returns a list of elements, while `findElements` returns a single element.', 'Both methods return a single element.', 'Both methods return a list of elements.'], answer: '`findElement` returns a single element, while `findElements` returns a list of elements.' },
            { question: 'How can you switch to an iframe in Selenium WebDriver?', options: ['Using the `switchTo().frame()` method.', 'Using the `switchTo().window()` method.', 'Using the `switchTo().alert()` method.', 'Using the `switchTo().defaultContent()` method.'], answer: 'Using the `switchTo().frame()` method.' },
            { question: 'What is the purpose of `wait` in Selenium WebDriver?', options: ['To wait for certain conditions to be met before proceeding.', 'To pause execution for a fixed amount of time.', 'To handle browser pop-ups.', 'To capture screenshots.'], answer: 'To wait for certain conditions to be met before proceeding.' },
            { question: 'What are the types of waits available in Selenium WebDriver?', options: ['Implicit Wait, Explicit Wait, Fluent Wait.', 'Fixed Wait, Dynamic Wait, Thread Wait.', 'Synchronous Wait, Asynchronous Wait.', 'Static Wait, Variable Wait.'], answer: 'Implicit Wait, Explicit Wait, Fluent Wait.' },
            { question: 'How do you handle dropdowns in Selenium WebDriver?', options: ['Using the `Select` class.', 'Using JavaScript directly.', 'Using the `WebDriver` interface.', 'Using the `Actions` class.'], answer: 'Using the `Select` class.' },
            { question: 'What is the purpose of the `Actions` class in Selenium WebDriver?', options: ['To perform complex user interactions like drag-and-drop.', 'To handle browser alerts.', 'To manage cookies.', 'To switch between frames.'], answer: 'To perform complex user interactions like drag-and-drop.' }
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

    retakeQuizButton.addEventListener('click', () => {
        resetQuiz();
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

    function resetQuiz() {
        clearInterval(timer); // Stop the timer
        timeRemaining = initialTime;
        timerDisplay.textContent = '05:00'; // Reset timer display
        selectedLanguage = '';
        questions = [];
        questionsContainer.innerHTML = ''; // Clear previous questions
        resultsContainer.innerHTML = ''; // Clear previous results
        quizSection.classList.add('hidden');
        resultsSection.classList.add('hidden');
        document.getElementById('language-selection').classList.remove('hidden');
    }
});
