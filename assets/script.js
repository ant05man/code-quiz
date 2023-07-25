const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');
const highScoresListEl = document.getElementById('highscores-list')
const shuffledQuestionBank = shuffleQB();

let secondsLeft = 60;
let currentScore = 0;
let currentQ = -1;
let finalScore;

// Move to next div # from current div #
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add('hide');
    document.getElementById(next).removeAttribute('class')
};

// Handle Start button click
function startGame() {
    changeDiv('start-page', 'question-container');
    nextQuestion();
    startTimer();
};

// Timer function
function startTimer() {
    timerEl.textContent = secondsLeft;
    let timerInterval = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
};

function nextQuestion() {
    currentQ++;
    // If there are no more questions, end the game
    if (currentQ === shuffledQuestionBank.length) {
        secondsLeft = 0;
        endGame();
    } else {
        // Otherwise populate questionEl
        questionEl.textContent = shuffledQuestionBank[currentQ].question;
        // and populate answer buttons
        let arr = [answerOne, answerTwo, answerThree, answerFour];
        let i = 0;
        arr.forEach(element => {
            element.textContent = shuffledQuestionBank[currentQ].answersArray[i].answer;
            i++
        }, i);
    };
};
