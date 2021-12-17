function add(num1, num2) {
    let result = num1 + num2;

    console.log(result);
    // return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;

    console.log(result);
    // return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;

    console.log(result);
    // return result;
}

function divide(num1, num2) {
    let result = num1 / num2;

    console.log(result);
    // return result;
}

function operate(op, num1, num2) {
    if (op == "+") {
        console.log(add(num1, num2));
        // return add(num1, num2)
    } else if (op == "-") {
        console.log(subtract(num1, num2));
        // return subtract(num1, num2);
    } else if (op == "*") {
        console.log(multiply(num1, num2));
        // return multiply(num1, num2);
    } else if (op == "/") {
        console.log(divide(num1, num2));
        // return divide(num1, num2);
    }

}

operate("+", 2, 6);