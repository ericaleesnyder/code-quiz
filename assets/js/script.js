var startButton = document.querySelector(".start-button");
var homeButton = document.querySelector(".home");
var highScores = document.querySelector(".high-scores");
var timerEl = document.querySelector(".timer-count");
var answerChoices = document.querySelector(".answer-choices");
var intro = document.querySelector(".intro");
var saveScore = document.querySelector(".save-score")
var scoreList = document.querySelector(".score-list")
var mainCard = document.querySelector(".main-card")

var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");

var question = document.querySelector("#question");

var submit = document.querySelector("#submit");
var initialsInput = document.querySelector("#init")
var scoreEntry = document.querySelector("#score-entry");
var scoreRankings = document.querySelector('#score-rankings');

var score = document.querySelector('#score');

var questionList = [
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    quest: 'A _____ is a primitive value that can only be True or False?',
    A: "Number",
    B: "String",
    C: "Boolean",
    D: "Null",
    correctAnswer: "Boolean"},
    {
    quest: 'DOM stands for:',
    A: "Declaration of the Month ",
    B: "Document Object Model",
    C: "Delete On Main",
    D: "Drastically Overriding Material",
    correctAnswer: "Document Object Model" },
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},  
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
    A: "Array",
    B: "Object",
    C: "CSS Element",
    D: "Class",
    correctAnswer: "Array"},
    {
    quest: 'A(n) _____ is a variable that can hold multiple values.',
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
    question.style.display="block";

    question.textContent = q.quest;
    
    first.textContent=q.A;
    second.textContent=q.B;
    third.textContent=q.C;
    fourth.textContent=q.D;
    
    questionIndex++;
}

function enterScore() { // brings up the page with the form 
    clearInterval(timer); //stops the timer at current score
    score.textContent = "Congrats! Your score is: " + timerCount;

    mainCard.style.display="none"; // hides question/answer portion
    saveScore.style.display="block"; // shows the section in which we are building the form;
}

function viewHighScore () {
    mainCard.style.display="none";
    saveScore.style.display="block";
    scoreEntry.style.display="none";
    score.textContent= "High Scores:"
}


//Score display/entry code:
highScores.addEventListener("click", viewHighScore);

var rankings = []

submit.addEventListener('click', function (event) {
    event.preventDefault();
     
    var scoreText = initialsInput.value.trim() + ": " + timerCount;
    if (scoreText === ''){
        return;
    }

    saveScore.style.display="block",
    rankings.push(scoreText);
    initialsInput.value = '',

    storeRank();
    renderScore();
});

function renderScore() {
    scoreRankings.innerHTML = '';

  for (var i = 0; i < rankings.length; i++) {
    var rank = rankings[i];

    var li = document.createElement('li');
    li.textContent = rank;

    scoreRankings.appendChild(li);
  }
}

function init (){
    var storeScore = JSON.parse(localStorage.getItem('savedRanking'));

    if (storeScore !== null) {
        rankings = storeScore;
    }
   renderScore()
}

function storeRank(){
    localStorage.setItem('savedRanking', JSON.stringify(rankings))
}

// general button event listeners:
startButton.addEventListener("click", function (event) {
    intro.style.display="none";
    displayQuestion();
    countDown();
    event.stopPropagation;
});

homeButton.addEventListener('click', function (event) {
    mainCard.style.display="block";
    intro.style.display="block";
    answerChoices.style.display="none";
    saveScore.style.display="none";
    question.style.display="none";
    questionIndex=0;
    return;
})

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

init();