const chars = `~!@$%^&()_+-=qwertyuiopQWERTYUIOPasdfghjklASDFGHJKLzxcvbnmZXCVBNM?`;
let updatedPasswordList = [];

const displayPasswords = document.querySelectorAll(".passwords");
const containerBottom = document.querySelector(".container-bottom");
const passwordLength = document.querySelector("input");

const btn = document.getElementById("generate-btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  getRandomChars();
});

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomChars() {
  let chosenLength = Number(passwordLength.value);
  let firstResult = "";
  let secondResult = "";
  let thirdResult = "";
  let fourthResult = "";
  for (let i = 1; i <= chosenLength; i++) {
    if (chosenLength >= 8 && chosenLength <= 18) {
      firstResult += randomElement(chars);
      secondResult += randomElement(chars);
      thirdResult += randomElement(chars);
      fourthResult += randomElement(chars);
    } else {
      alert("Please choose between 8 and 18");
      chosenLength = null;
    }
  }
  updatedPasswordList.unshift(
    firstResult,
    secondResult,
    thirdResult,
    fourthResult
  );
  displayFourPasswords();
}

function displayFourPasswords() {
  let displayPassHTML = "";
  updatedPasswordList.forEach(function (element, index) {
    if (index < 4) {
      displayPassHTML += `
            <input type="text" value="${element}" class="passwords" title="copy to clipboard" readonly>
            `;
    }
  });
  containerBottom.innerHTML = displayPassHTML;
  copyPassword();
}

function copyPassword() {
  let inputs = document.querySelectorAll(".passwords");
  for (const input of inputs) {
    input.addEventListener("click", (event) => {
      let copyText = event.target.value;
      navigator.clipboard.writeText(copyText);
      alert("Password copied to clipboard");
    });
  }
}
