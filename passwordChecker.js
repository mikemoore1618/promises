const passwordCheck = (attempt) => {
    const password = 'password'

    return new Pormise((resolve, reject) => {
        console.log('pending...')

        setTimeout(() => {
            if (attempt === password){
                resolve('fullfilled logging in')
            } else {
                reject('rejected, try again')
            }
        }, 3000)
    })
}

function redirectToProfile(response) {
    console.log(response)
}

function handleError(e) {
    console.log(e)
    return "password"
}

passwordCheck('password')
    .then(redirectToProfile)
    .catch(handleError).then(passwordCheck)
    .then(redirectToProfile)