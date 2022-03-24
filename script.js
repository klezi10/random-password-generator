// create a function that returns a random item from the array
//modify function so that it returns multiple items from the array

const chars = `~!@$%^&()_+-=qwertyuiopQWERTYUIOPasdfghjklASDFGHJKLzxcvbnmZXCVBNM<>?`.split('')

const displayPasswords = document.querySelectorAll('.passwords')
const containerBottom = document.querySelector('.container-bottom')
// console.log(displayPasswords)

const btn = document.getElementById('generate-btn')
btn.addEventListener("click", (event) => {
    event.preventDefault()
    getRandomChars()
    getRandomChars()
    getRandomChars()
    getRandomChars()
})

// function getRandomChars() {
//     let randoms = chars[Math.floor(Math.random() * chars.length)]
//     // console.log(randoms)
//     const shuffled = chars.sort(() => 0.5 - Math.random()).slice(0)
//     console.log(shuffled.join(''))
// }

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function getRandomChars() {
    let result = ''
    for (let i = 0; i < 8; i++) {
        result += randomElement(chars)
    }
    // console.log(result)
    // displayFourPasswords(result)
    // for (let i = 0; i < displayPasswords.length; i++) {
        // console.log(displayPasswords[i])
        let newArray = []


        newArray.push(result)
       
        console.log(newArray)
        displayFourPasswords(newArray)
    }
// }

function displayFourPasswords(newArray) {
    // console.log(newArray)
    let displayPassHTML = `
    <div class="flex-1">
            <p class="passwords">${newArray}</p>
                <p class="passwords">${newArray}</p>
            </div>
            <div class="flex-2">
                <p class="passwords">${newArray}</p>
                <p class="passwords">${newArray}</p>
                </div>
            `
        // }
    // });
    displayPassHTML += `
    </div>
    `
    containerBottom.innerHTML = displayPassHTML;
    // console.log(displayPassHTML)
}