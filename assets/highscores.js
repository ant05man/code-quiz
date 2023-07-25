function populateHighScores() {
    //stores high scores on the following screen
    let highScoresList = JSON.parse(localStorage.getItem('highScores')) || []; 
    // populate highscores list
    let list = '';
    highScoresList.forEach(score => {
        list = list + '<p>' + score.initials + '  :  ' + score.score + '</p>';
    });
    highScoresListEl.innerHTML = list;
}

function resetScores() {
    localStorage.clear();
    populateHighScores();
}

populateHighScores();
