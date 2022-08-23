let firstnum = ''
let secondnum = ''
let currentOperation = null

const numbers = document.querySelectorAll('.num')
const operations = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clearbutton')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.decimal')
const currentScreen = document.querySelector('.lowerscreen')
const pastScreen = document.querySelector('.upperscreen')

numbers.forEach((number) =>
    number.addEventListener('click', () => {
      let content = number.textContent
      currentScreen.textContent += content
      pastScreen.textContent += `${content}`
    })
)

operations.forEach((operator) =>
    operator.addEventListener('click', () => {
        let operation = operator.textContent
        firstnum = Number(currentScreen.textContent)
        currentOperation = operation
        console.log(firstnum, currentOperation)
        pastScreen.textContent += ` ${operation} `
        currentScreen.textContent = ''

    })
)
// Functions to add, subtract, multiply, and divide
function add(a,b) {
    return (a + b)
}

function subtract(a,b) {
    return (a - b) 
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function addDecimal() {
    currentScreen.textContent += '.'
    pastScreen.textContent += '.'
}

function clear() {
    currentScreen.textContent = ''
    pastScreen.textContent = ''
}

// When User presses "equal" button, run this function.
// The function will check what operator the user chose and display the answer using the above basic functions
function evaluate(operatorUsed, a, b) {
    pastScreen.textContent += ` =`
    let secondnum = Number(currentScreen.textContent)
    operatorUsed = currentOperation
    console.log(firstnum, operatorUsed, secondnum)
    if (operatorUsed === '+') {
        let added = add(firstnum,secondnum)
        currentScreen.textContent = `${added.toFixed(3)}`
        pastScreen.textContent += ` ${added.toFixed(3)}`
    } else if (operatorUsed === '-') {
        let subtracted = subtract(firstnum,secondnum)
        currentScreen.textContent = `${subtracted.toFixed(3)}`
        pastScreen.textContent += ` ${subtracted.toFixed(3)}`
    } else if (operatorUsed === '×') {
        let multiplied = multiply(firstnum,secondnum)
        currentScreen.textContent = `${multiplied.toFixed(3)}`
        pastScreen.textContent += ` ${multiplied.toFixed(3)}`   
        console.log('multiply!')
    } else if (operatorUsed === '÷') {
        if (secondnum === 0) {
            alert("You can't divide by zero!")
        } else {
            let divided = divide(firstnum,secondnum)
            currentScreen.textContent = `${divided.toFixed(3)}`
            pastScreen.textContent += ` ${divided.toFixed(3)}`
        }
    }
}

clearButton.addEventListener('click', clear)
equalButton.addEventListener('click', evaluate)
decimalButton.addEventListener('click', addDecimal)


