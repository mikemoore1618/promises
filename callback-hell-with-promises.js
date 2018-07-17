function levelOne(value) {
    let newScore = value + 5
    return new Promise(resolve => {
        resolve( { level:'One', score: newScore } ) 
    })
}

function levelTwo(value) {
    let newScore = value + 15
    return new Promise(resolve => {
        resolve( { level:'Two', score: newScore } ) 
    })
}

function levelThree(value) {
    let newScore = value + 30
    return new Promise(resolve => {
        resolve( { level:'Three', score: newScore } ) 
    })
}


function startGame() {
    let currentScore = 5
    console.log('starting game')

    return new Promise(resolve => {
        resolve(currentScore)
    })
}

function levelComplete (response) {
    console.log(`Your have reached level ${response.level}, and your score is ${response.score} `)
    return response.score
}

startGame()
    .then(levelOne)
    .then(levelComplete).then(levelTwo)
    .then(levelComplete).then(levelThree)
    .then(levelComplete)

