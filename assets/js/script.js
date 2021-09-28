// WHEN the page loads:

// The following elements are shown:
// - high scores link
// - timer at 0
// - title
// - welcome message
// - start button

// WHEN the user clicks start

// - Hide/remove title, welcome message, and start button

// - Display question: What keyword can be used to print the type of a value?

// - display buttons with the following text below the question:
//   - A true
//   - B string
//   - C typeof
//   - D function

// - Start countdown: display "Time: 120" to start.
// - Update the time display each second counting down.


// WHEN the user clicks a button
// IF the user clicked "C typeof" button


// IF the user clicked "A true", "B string", or "D function"


// WHEN the time remaining reaches 0 or less

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var startButton = document.querySelector(".start-button");
var highScores = document.querySelector(".high-scores");
var timerEl = document.querySelector(".timer-count");

var answerChoices = document.querySelector(".answer-choices");
var intro = document.querySelector(".intro");
var answerChoices = document.querySelector(".answer-choices");

var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");

var question = document.querySelector("#question")

var timer;
var timerCount;
var timerSubtracted;

var questionList = [
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    question: 'A _____ is a primitive value that can only be True or False?',
    A: "Number",
    B: "String",
    C: "Boolean",
    D: "Null",
    correctAnswer: "Boolean"},
    {
    question: 'DOM stands for:',
    A: "Declaration of the Month ",
    B: "Document Object Model",
    C: "Delete On Main",
    D: "Drastically Overriding Material",
    correctAnswer: "Document Object Model" },
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},  
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    question: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
];

function countDown () {
    timerCount = 120;
    timerEl.textContent = "Time: " + timerCount;
    
    timer = setInterval(function() {
        if (timerCount <= 0) {
            clearInterval(timer);
        } else {
            timerCount--; 
            timerEl.textContent = "Time: " + timerCount;
        }
    }, 1000);
}; 

var lastQuestionIndex = questionList.length-1;
var questionIndex = 0
var q;

function displayQuestion () {
    q = questionList[questionIndex];
    
    answerChoices.style.display="block";
    
    question.textContent = q.question;
    first.textContent=q.A;
    second.textContent=q.B;
    third.textContent=q.C;
    fourth.textContent=q.D;
    
    questionIndex++;
}

startButton.addEventListener("click", function () {
    intro.style.display="none";
    displayQuestion();
    countDown();
});

first.addEventListener('click', function () {
    if (first.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
    }
    else {
        console.log("correct")
        displayQuestion();
        }
});

second.addEventListener('click', function () {
    if (second.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
    }
    else {
        console.log("correct")
        displayQuestion();
        }
});

third.addEventListener('click', function () {
    if (third.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
    }
    else {
        console.log("correct")
        displayQuestion();
        }
});

fourth.addEventListener('click', function () {
    if (fourth.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
    }
    else {
        console.log("correct")
        displayQuestion();
        }
});
