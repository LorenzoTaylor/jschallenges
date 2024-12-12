function calculator(a, b, o) {
    if (o == '+') {
        return a + b;
    } else if (o == '*'){
        return a * b;
    } else if (o == '/'){
        return a / b;
    } else {
        return a - b;
    }
}

module.exports = calculator;
