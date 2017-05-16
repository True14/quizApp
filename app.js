// Initial state object
var appState = {
  // Questions Options, & Answers
  questions: [],

  fillState: function(arr) {
    let random = 0;
    const check = [];
    let i = 0;
    while (i < 5) {
      random = Math.floor(Math.random() * 10);
      if (check.indexOf(random) === -1) {
        check.push(random);
        this.questions.push(arr[random]);
        i++;
      }
    }
  },

  feedback: {
    cm: 'You got the right answer!',
    im: 'You got the wrong answer...',
  },

  currentQuestion: null,
  score: 0,
  correctAnswer: []
};

const questions = [{
    q: "What is the value of foo, let foo = 10 + '20'?",
    c: ['10+20', 1020, 30, 42],
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
  {
    q: "I'm thinking of a number between 1 and 3. What is it?",
    c: [1, 3, 2, 56],
    a: 2,
  },
  {
    q: 'Not a Number evalutes to?',
    c: ['NaN', 'NotANumber', 'NAM', 'null'],
    a: 0,
  },
  {
    q: 'var numbers = [1,2,3] is an example of what?',
    c: ['a Function', 'an Object', 'a Method', 'an Array'],
    a: 3,
  },
  {
    q: 'What is the javascript file extension?',
    c: ['.Java', '.js', '.javascript', '.xml'],
    a: 1,
  },
  {
    q: 'What... is the air-speed velocity of an unladen swallow?',
    c: ['50 m/s', '25 m/s', '10 m/s', 'An African or European swallow?'],
    a: 3,
  },
];

// Template
const questionTemplate = (state, index) => {
  return `<h2 class="question">${state.questions[index].q}</h2>
        <input type="radio" name="answer" required>${state.questions[index].c[0]}
        <input type="radio" name="answer">${state.questions[index].c[1]}
        <input type="radio" name="answer">${state.questions[index].c[2]}
        <input type="radio" name="answer">${state.questions[index].c[3]}
        <button class='submit'>Submit</button>
        <p class='currentQuestion'>Question #${state.currentQuestion + 1}/5</p>
        <p class='userScore'>Score: ${state.score}</p>`;
};

const correctFeedbackTemplate = (state, index) => {
  return `<p class='questionFeedback'>${readCorrectMessage(state)}</p>
     <button class='nextButton'>Next</button>`;
};

const incorrectFeedbackTemplate = (state, index) => {
  return `<p class='questionFeedback'>${readIncorrectMessage(state)}</p>
   <p class="correctAnswer">The correct answer was ${getCorrectAnswer(state)}.</p>
   <button class='nextButton'>Next</button>`;
};

const finalTemplate = (state) => {
  return `<h1>Quiz Results</h1>
      <p class='resultMessage'></p>
      <p class='userScore'>Your results are: ${state.score} right, ${5-state.score} wrong. </p>
      <button class="tryAgainButton">Try Again?</button>`;
};

// State manipulation functions...
const getCurrentQuestion = function(state) {
  return state.currentQuestion;
}
const getAnswerIndex = function(state) {
  return state.questions[getCurrentQuestion(state)].a;
};
// read question
const readQuestion = function(state, index) {
  return state.questions[index].q;
};
// read answer
const getCorrectAnswer = function(state) {
  return state.questions[getCurrentQuestion(state)].c[getAnswerIndex(state)];
};
// read score
const readScore = function(state) {
  return state.score;
};
// read correct message
const readCorrectMessage = function(state) {
  return state.feedback.cm;
};
// read incorrect message
const readIncorrectMessage = function(state) {
  return state.feedback.im;
};
// update current question
const updateCurrentQuestion = function(state) {
  state.currentQuestion++;
};
// update score
const updateScore = function(state) {
  state.score++;
};
const resetTest = function(state) {
  state.currentQuestion = null;
  state.score = 0;
};

// Render functions...
const feedback = function(state, index, element) {
  const testHTML = element.find(".resultsScreen");
  if (state.questions[getCurrentQuestion(state)].a === index) {
    updateScore(state);
    element.find(".gameScreen").addClass("hidden");
    testHTML.removeClass("hidden");
    testHTML.html(correctFeedbackTemplate(state, index));
  } else {
    element.find(".gameScreen").addClass("hidden");
    testHTML.removeClass("hidden");
    testHTML.html(incorrectFeedbackTemplate(state, index));
  }
};


const renderQuiz = function(state, element) {
  if (state.currentQuestion === null) {
    state.questions = [];
    state.fillState(questions);
    element.find('.startScreen').removeClass('hidden');
    element.find(".gameScreen").addClass("hidden");
    element.find(".resultsScreen").addClass("hidden");
    element.find('.finalScreen').addClass("hidden");
    state.currentQuestion = 0;
  } else if (state.currentQuestion > 4) {
    element.find(".gameScreen").addClass("hidden");
    element.find(".resultsScreen").addClass("hidden");
    element.find('.startScreen').addClass("hidden");
    element.find('.finalScreen').removeClass("hidden");
    element.find('.finalScreen').html(finalTemplate(state));
  } else {
    element.find('.resultsScreen').addClass("hidden");
    element.find('.startScreen').addClass("hidden");
    element.find('.gameScreen').removeClass("hidden");
    element.find(".quizForm").html(questionTemplate(state, getCurrentQuestion(state)));
  }
};


// Event handlers
// When start button is submitted
$('.startButton').on('click', function(event) {
  renderQuiz(appState, $('body'));
});

// Answer is submitted
$('#testForm').submit(function(event) {
  event.preventDefault();
  const checkedIndex = $(this).find("input[name=answer]:checked").index() - 1;
  feedback(appState, checkedIndex, $('body'));
});

$('.resultsScreen').on('click', '.nextButton', function(event) {
  updateCurrentQuestion(appState);
  renderQuiz(appState, $('body'));
});

$('.finalScreen').on('click', '.tryAgainButton', function(event) {
  resetTest(appState);
  renderQuiz(appState, $('body'));
});


//Initialize
$(() => {

  renderQuiz(appState, $('body'));
  $('#wav').get(0).play();
});
