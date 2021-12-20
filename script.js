let display = document.getElementById("display");
let numbers = [];
let num = "";


for (let i = 0; i < 10; i++) {  
    numbers[i] = document.getElementById(`num-${i}`).addEventListener("click", function () {
        num = num + `${i}`;
        display.textContent = num;
    });
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
    if (op == "+") {
        return add(num1, num2)
    } else if (op == "-") {
        return subtract(num1, num2);
    } else if (op == "*") {
        return multiply(num1, num2);
    } else if (op == "/") {
        return divide(num1, num2);
    }
}