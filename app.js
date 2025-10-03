// 1.press one number - we save that number
// 2.press the opearator -  we save that operator
// 3.press the second number - we save that number
// 4.press equal sign - make calculation
var firstNumber
var secondNumber
var step = 0
var operation
var result = 0
var Display = document.getElementById('display');
var numArray = []
var secondnumArray = []

function getNumber(num) {
    // Display.value = num
    if (step === 0 || step === 1) {
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(''))//merge into one string
        Display.value = firstNumber
    } else if (step === 2) {
        secondnumArray.push(num)
        secondNumber = Number(secondnumArray.join(''))//merge into one string
        Display.value = secondNumber
        // Display.value = firstNumber + " " + operation + " " + secondNumber;
    }

}
function getOperator(op) {
    step = 2
    operation = op
    secondnumArray = []

}

function calculateEquals() {
    if (secondnumArray.length === 0) {
        secondNumber = Number(Display.value) || 0;
    }
    if (operation === '+') {
        result = firstNumber + secondNumber
        Display.value = result
    } else if (operation === '-') {
        result = firstNumber - secondNumber
        Display.value = result
    } else if (operation === '*') {
        result = firstNumber * secondNumber
        Display.value = result
    } else if (operation === '/') {
        result = firstNumber / secondNumber
        Display.value = result
    }
    firstNumber = result
    secondNumber = null
    secondnumArray =[]
    step =1


}
function clearDisplay() {
    Display.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0
    operation = null;
    numArray = []
    secondnumArray = []

}