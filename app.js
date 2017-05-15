// Initial state object
var appState = {
    // Questions Options, & Answers
    questions: [
        {
            q: 'question one?',
            c: [1, 2, 3, 4],
            a: answer,
        },
        {
            q: 'question two?',
            c: ['1', '2', '3', '4'],
            a: answer,
        },
        {
            q: question three?,
            c: [1, 2, 3, 4],
            a: answer,
        },
        {
            Q: question four?,
            C: [1, 2, 3, 4],
            A: answer,
        },
        {
            Q: question five?,
            C: [1, 2, 3, 4],
            A: 4,
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


// Render functions...

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



renderMe();