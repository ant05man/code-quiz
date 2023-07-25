const questionBank = [

    {
        question: 'String values must be enclosed within ____ when being assigned to variables',
        answersArray: [
            { answer: 'commas', correct: false },  
            { answer: 'curly brackets', correct: true },
            { answer: 'quotes', correct: false },
            { answer: 'parenthesis', correct: false }]
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answersArray: [
            { answer: 'JavaScript', correct: true }, 
            { answer: 'termina/bash', correct: false },
            { answer: 'for loops', correct: false },
            { answer: 'console log', correct: false }]
    },

    {
        question: 'Commonly used data types DO NOT include',
        answersArray: [
            { answer: 'strings', correct: false },  
            { answer: 'booleans', correct: false },
            { answer: 'alerts', correct: true },
            { answer: 'numbers', correct: false }]
    },

    {
        question: 'Which of these statements returns the number 2?',
        answersArray: [
            { answer: 'parseInt("2.9")', correct: true },
            { answer: 'Math.floor(1.9)', correct: false },
            { answer: 'Math.round(2.9)', correct: false },
            { answer: 'parseFloat("2.9")', correct: false }]
    },

    {
        question: 'Which of the following is a comparison operator?',
        answersArray: [
            { answer: '!==', correct: true },  
            { answer: '=', correct: false },
            { answer: '+=', correct: false },
            { answer: '--', correct: false }]
    }

];

function shuffleQB() {
    // clone questionBank
    let questionBankClone = questionBank;
    // For each question, shuffle answer order
    for (let i = 0; i < questionBankClone.length; i++) {

        let answersArray = questionBankClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    // Shuffle question order
    questionBankClone = questionBankClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionBankClone;
};