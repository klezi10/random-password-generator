const chars = `~!@$%^&()_+-=qwertyuiopQWERTYUIOPasdfghjklASDFGHJKLzxcvbnmZXCVBNM?`
let newArray = []

const displayPasswords = document.querySelectorAll('.passwords')
const containerBottom = document.querySelector('.container-bottom')

const btn = document.getElementById('generate-btn')
btn.addEventListener("click", (event) => {
    event.preventDefault()
    getRandomChars()
})

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function getRandomChars() {
    let firstResult = ''
    let secondResult = ''
    let thirdResult = ''
    let fourthResult = ''
    for (let i = 0; i < 8; i++) {
        firstResult += randomElement(chars)
        secondResult += randomElement(chars)
        thirdResult += randomElement(chars)
        fourthResult += randomElement(chars)
    }
        newArray.unshift(firstResult, secondResult, thirdResult, fourthResult)
        displayFourPasswords()
    }

function displayFourPasswords() {
    let displayPassHTML = `
    <div class="container-bottom">`
    console.log(newArray)
    newArray.forEach(function(element, index) {
        if (index < 4) {
console.log(element)
        displayPassHTML += `
            <p class="passwords">${element}</p>
            `;
        }
    });
    displayPassHTML += `
    </div>
    `
    containerBottom.innerHTML = displayPassHTML;
}