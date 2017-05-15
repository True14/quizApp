// Initial state object
var appState = {
    // Questions Options, & Answers
    questions: [
        {
            q: 'i am thinking of a number between 1 and 3, what is it?',
            c: [1, 2, 3, 42],
            a: 1,
        },
        {
            q: 'Who created JavaScript?',
            c: ['Rich Greenhill', 'Bill Gates', 'Brendan Eich', 'Steve Jobs'],
            a: 2,
        },
        {
            q: 'What was JavaScript originally called?',
            c: ['Mocha', 'Java', 'CoffeeScript', 'ES1'],
            a: 0,
        },
        {
            q: 'What is this, (i = 1, i < car.length, i++)?',
            c: ['ternary operator', 'while loop', 'DOM', 'for loop'],
            a: 3,
        },
        {
            q: 'How long did it take to make JavaScript?',
            c: ['10 days', '5 years', '3 months', '15 days'],
            a: 0,
        },
    ],


    feedback: {
        cm: 'correct message',
        im: 'incorrect message',
    },
    
    currentQuestion: null,
    score: 0,
    correctAnswer: []
};

// Template
    const questionTemplate = (
    `<form class='quizForm'>
     <h2 class="question">${Q}</h2>
     <input type="radio" name="answer" required>${C1}<br>
     <input type="radio" name="answer">${C2}<br>
     <input type="radio" name="answer">${C3}<br>
     <input type="radio" name="answer">${C4}<br>
     <button class='submit'>Submit</button>
                
     <p class='currentQuestion'>${currentQuestion}/5</p>
     <p class='userScore'>${score}</p>
    `
    );

    const feedbackTemplate = (
    `<p class='questionFeedback'>${feedback}</p>
     <p class="correctAnswer">${correctAnswer}</p>
     <button class='nextButton'>Next</button>
    `
    );

// State manipulation functions...
read question 
const readQuestion = function(state, index) {
    return state.questions[index].q;
};
read answer
const readAnswer = function(state, index) {
    return state.question[index].c;
};
read score
const readScore = function(state) {
    return state.score;
};
read correct message 
const readCorrectMessage = function(state) {
    return state.feedback.cm;
};
read incorrect message
const readIncorrectMessage = function(state) {
    return state.feedback.im;
};
update current question
const updateCurrentQuestion = function(state) {
    state.currentQuestion++;
};
update score
const updateScore = function(state) {
    state.score++;
};

// worry here function


function feedback(state, index)

read current question maybe
toggle class
comparison index to correct answer 
if true, display correct message and update score 
if false, display incorrect message

trigger render functions here maybe

// Render functions...
function renderQuestion (state, index) {
    
};
render quiz (state, element) if currentQuestion === null render start page
           else if currentQuestion > 5 render last page
           else 
render current question of 5



// Event handlers
// When start button is submitted
$('.start').submit(function(event) {
  // 1. Change state with state mod function
  // 2. Invoke render function
});

// Answer is submitted
$('.answer').submit(function(event) {
  // 1. Retrieve from DOM - which answer was clicked?
  // 2. Change state with state mod function
  // 3. Invoke render function
});

$('.next').submit(function(event) {
  // 1. Next
});

$('.reset').submit(function(event) {
  // 1. reset
});



feedback();