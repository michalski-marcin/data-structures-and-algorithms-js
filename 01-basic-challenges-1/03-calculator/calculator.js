function calculator(a, b, parameter) {
    switch (parameter) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            console.log('error')
    }
}

module.exports = calculator;
