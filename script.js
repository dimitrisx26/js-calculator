let display = document.getElementById("display");
const numbers = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operation]");
const del = document.querySelector("[data-del]");
const equal = document.querySelector("[data-equal]");
const clearBtn = document.querySelector("[data-clear]");
let num1 = "";
let num2 = "";
let num3 = "";
let op = "";


numbers.forEach(number => {
    number.addEventListener("click", function () {
        if (op == "") {
            num1Check(number.textContent);
            display.textContent = num1;
        } else {
            num2Check(number.textContent);
            display.textContent = num2;
        }
    });

});

function num1Check(num) {
    if (num === "." && num1.includes(".")) {
        return;
    }

    num1 = num1 + num;

    if (num === "." && num1 ===".") {
        num1 = "0.";
    }
}

function num2Check(num) {
    if (num === "." && num2.includes(".")) {
        return;
    }

    num2 = num2 + num;

    if (num === "." && num2 ===".") {
        num2 = "0.";
    }
}

operators.forEach(operator => {
    operator.addEventListener("click", function () {
        selectOperator(operator.textContent);
        console.log(op);
    });
});

function selectOperator(oper) {
    if (op === "") {
        op = oper;
    } else {
        return;
    }
    
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

function operate() {
    if (op == "+") {
        finalNum = add(Number(num1), Number(num2))
    } else if (op == "-") {
        finalNum = subtract(Number(num1), Number(num2));
    } else if (op == "*") {
        finalNum = multiply(Number(num1), Number(num2));
    } else if (op == "/") {
        finalNum = divide(Number(num1), Number(num2));
    }

    display.textContent =  finalNum;
    num1 = finalNum.toString();
    num2 = "";
    op = "";
}

del.addEventListener("click", function () {
    if (op === "") {
        num3 = num1.slice(0,-1);
        num1 = num3;
        display.textContent = num1;
    } else {
        num3 = num2.slice(0,-1);
        num2 = num3;
        display.textContent = num2;
    }
})

clearBtn.addEventListener("click", function () {
    display.textContent = "";
    num1 = "";
    num2 = "";
    finalNum = "";
    op = "";
})

equal.addEventListener("click", function () {
    operate();
})