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