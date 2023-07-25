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
        question: 'Which of these array methods returns an array?',
        answersArray: [
            { answer: 'Array.splice()', correct: true }, 
            { answer: 'Array.forEach()', correct: false },
            { answer: 'Array.find()', correct: false },
            { answer: 'Array.reduce()', correct: false }]
    },

    {
        question: 'What is the function of `Array.unshift()`?',
        answersArray: [
            { answer: 'Removes first element of array', correct: true },  
            { answer: 'Removes last element of array', correct: false },
            { answer: 'Adds element to end of array', correct: false },
            { answer: 'Adds element to start of array', correct: false }]
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