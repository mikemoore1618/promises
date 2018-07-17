
function levelOne(value, callback) {
    let newScore = value + 5;
    callback(newScore);
}

function levelTwo(value, callback) {
  let newScore = value + 15;
  callback(newScore);
}

function levelThree(value, callback) {
  let newScore = value + 30;
  callback(newScore);
}


function startGame() {
    let currentScore = 5;
    console.log(`Game has started! Your current score is ${currentScore}`);
    
    // Starting the game.
    levelOne(currentScore, (levelOneScore) => {
        console.log(`Level one reached! New score is ${levelOneScore}`);

        levelTwo(levelOneScore, (levelTwoScore) => {
            console.log(`Level Two reached! New score is ${levelTwoScore}`);

            levelThree(levelTwoScore, (levelThreeScore) => {
                console.log(`Level Two reached! New score is ${levelThreeScore}`);
            })
        })
    })
}

startGame()




/////////////////////
