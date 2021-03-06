const add = (a, b) => {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return null;
    }
    return a+b;
}
const subtract = (a, b) => {
    return a-b;
}
const divide = (a, b) => {
    return a/b;
}
const multiply = (a, b) => {
    return a*b;
}

const calculator = {
    'add': add,
    'subtract': subtract,
    'divide': divide,
    'multiply': multiply
}

module.exports = calculator;