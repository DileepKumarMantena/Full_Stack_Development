class Question:
    def __init__(self, prompt, answer):
        self.prompt = prompt
        self.answer = answer

def run_quiz(questions):
    score = 0
    for question in questions:
        answer = input(question.prompt).strip().lower()
        if answer == question.answer.lower():
            score += 1
            print("Correct!\n")
        else:
            print(f"Wrong! The correct answer is {question.answer}\n")
    print(f"You got {score} out of {len(questions)} questions correct.")

if __name__ == "__main__":
    question_prompts = [
        "What is the keyword to define a function in Python?\n(a) def\n(b) func\n(c) function\n\n",
        "Which of the following is a mutable data type in Python?\n(a) tuple\n(b) list\n(c) string\n\n",
        "What does the 'len()' function do?\n(a) Returns the number of elements in a list\n(b) Returns the length of a string\n(c) Both a and b\n\n",
        "What is the correct file extension for Python files?\n(a) .pyth\n(b) .pt\n(c) .py\n\n",
        "What is the correct way to create an empty dictionary in Python?\n(a) {}\n(b) []\n(c) ()\n\n"
    ]

    questions = [
        Question(question_prompts[0], "a"),
        Question(question_prompts[1], "b"),
        Question(question_prompts[2], "c"),
        Question(question_prompts[3], "c"),
        Question(question_prompts[4], "a")
    ]

    run_quiz(questions)
