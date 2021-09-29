var startButton = document.querySelector(".start-button");
var highScores = document.querySelector(".high-scores");
var timerEl = document.querySelector(".timer-count");
var answerChoices = document.querySelector(".answer-choices");
var intro = document.querySelector(".intro");
var answerChoices = document.querySelector(".answer-choices");
var saveScore = document.querySelector(".save-score")
var scoreList = document.querySelector(".score-list")
var mainCard = document.querySelector(".main-card")
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");
var question = document.querySelector("#question");
var submit = document.querySelector("#submit");

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

// timer specific variables 
var timer;
var timerCount;
var timerSubtracted;

function countDown () {
    timerCount = 120;
    timerEl.textContent = "Time: " + timerCount;
    
    timer = setInterval(function() {
        if (timerCount <= 0) {
            enterScore();
            clearInterval(timer);
        } else {
            timerCount--; 
            timerEl.textContent = "Time: " + timerCount;
        }
    }, 1000);
}; 

// displayQuestion specific variables 
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

function enterScore() {
    var score = document.querySelector("#score");
    score.textContent = "Score: " + timerCount;

    clearInterval(timer); //stops the timer at current score
    
    mainCard.style.display="none"; // hides question/answer portion
    saveScore.style.display="block"; // shows the section in which we are building the form;
}

function viewHighScore (event) {
   event.preventDefault();

   mainCard.style.display="none";
   saveScore.style.display="none";
   
   scoreList.style.display="block";
}

highScores.addEventListener("click", viewHighScore);
submit.addEventListener('click', viewHighScore);

startButton.addEventListener("click", function () {
    intro.style.display="none";
    displayQuestion();
    countDown();
});

first.addEventListener('click', function () {
    if (questionIndex >= questionList.length || timerCount<= 0){
        enterScore();
        return;
    }

    if (first.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
    

    } else {
        console.log("correct")
        displayQuestion();
        }
});

second.addEventListener('click', function () {
    if (questionIndex >= questionList.length || timerCount<= 0){
        enterScore();
        return;
    }

    if (second.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
    
    } else {
        console.log("correct")
        displayQuestion();
        }
});

third.addEventListener('click', function () {
    if (questionIndex >= questionList.length || timerCount<= 0){
        enterScore();
        return;
    }

    if (third.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;

    } else {
        console.log("correct")
        displayQuestion();
        }
});

fourth.addEventListener('click', function () {
    if (questionIndex >= questionList.length || timerCount<= 0){
        enterScore();
        return;
    }
    
    if (fourth.textContent !== q.correctAnswer) {
        console.log("wrong");
        timerCount = timerCount-10;
        
    } else {
        console.log("correct")
        displayQuestion();
        }
});
