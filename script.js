// create a function that returns a random item from the array
//modify function so that it returns multiple items from the array

const chars = ["rock", "paper", "scissors", "foot", "a", "b", "c", "d"]

function getRandomChars() {
    let randoms = chars[Math.floor(Math.random() * chars.length)]
    // console.log(randoms)
    const shuffled = chars.sort(() => 0.5 - Math.random()).slice(4, chars.length)
    console.log(shuffled)
}

getRandomChars()