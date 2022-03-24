// create a function that returns a random item from the array
//modify function so that it returns multiple items from the array

const chars = ["a", "b", "c", "d", "e", "A", "B", "?", "/", "!", "+", "@", "U", "x", ")"]

const btn = document.getElementById('generate-btn')
btn.addEventListener("click", (event) => {
    event.preventDefault()
    getRandomChars()
    // getRandomChars()
    // getRandomChars()
    // getRandomChars()
})

// console.log(chars.length)

function getRandomChars() {
    let randoms = chars[Math.floor(Math.random() * chars.length)]
    // console.log(randoms)
    const shuffled = chars.sort(() => 0.5 - Math.random()).slice(0)
    console.log(shuffled.join(''))
}

