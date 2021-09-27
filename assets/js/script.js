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
var timerEl = document.querySelector(".timer-count");
var highScores = document.querySelector(".high-scores")

var question = document.querySelector("#question")
// var newQuestion = document.createElement("h2");

var timer;
var timerCount;

var questionList = [
    "What is an array?",
    "What is the purpose of a function?",
    "What are the 5 primitive data types?",
]


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

function newQuestion () {
    question.textContent = "this is my new question text"
};

// highScores.addEventListeener("click", function (){

// });

startButton.addEventListener("click", function () {
    startButton.style.display="none";
    // newQuestion();
    question.textContent=questionList[0];
    question.setAttribute("text-align", "left");
    countDown();
});
