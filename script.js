const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%&_"

const passwordGenerate = document.getElementById("passwordGenerate");
const lengthRange = document.getElementById("length");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generateBtn");

const generateRandom = (getData) => {
    return getData[Math.floor(Math.random() * getData.length)]
}


const generatePassword = (password = "") => {
    let selectOption = 0;

    if (lower.checked) {
        password += generateRandom(lowerSet)
        selectOption++
    }
    if (upper.checked) {
        password += generateRandom(upperSet)
        selectOption++
    }
    if (number.checked) {
        password += generateRandom(numberSet)
        selectOption++
    }
    if (symbol.checked) {
        password += generateRandom(symbolSet)
        selectOption++
    }

    if (parseInt(lengthRange.value) < selectOption) {
        lengthRange.value = selectOption
    }

    if (!password) {
        return alert("Please select al least one option to generate a Password.")
    }

    if (password.length < lengthRange.value) {
        return generatePassword(password)
    } else {
        passwordGenerate.value = password.substring(0, lengthRange.value)
    }
}

generateBtn.addEventListener("click", () => {
    generatePassword()
})

document.getElementById("copyBtn").addEventListener("click", () => {
    let inpValue = passwordGenerate.value;

    if (!inpValue) {
        alert("Nothing to Copy!")
        return
    }

    navigator.clipboard.writeText(inpValue)
        .then(() => {
            alert("Password Copied!")
        })
        .catch(() => {
            alert("Failed to copy!")
        })
})