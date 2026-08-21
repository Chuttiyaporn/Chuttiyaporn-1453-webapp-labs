const isValidNumber = (input) => {
    if (input === null || input.trim() === "") {
        return false;
    }

    const number = Number(input);

    return !Number.isNaN(number) && isFinite(number);
};


const parseValidNumber = (input) => {
    return isValidNumber(input) ? Number(input) : null;
};


const validateNumberInput = (input) => {
    const number = parseValidNumber(input);

    return {
        valid: number !== null,
        value: number
    };
};


const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
};


const getOperationFunction = function (op) {
    switch (op) {
        case "+":
            return add;
        case "-":
            return subtract;
        case "*":
            return multiply;
        case "/":
            return divide;
        default:
            return null;
    }
};


const runTwoNumberCalculator = function () {
    let op;
    let operationFunction;

    do {
        op = prompt("Enter operation (+, -, *, /):");
        operationFunction = getOperationFunction(op);

        if (operationFunction === null) {
            alert("Invalid operation");
        }
    } while (operationFunction === null);


    let firstResult;

    do {
        const firstInput = prompt("Enter first number:");
        firstResult = validateNumberInput(firstInput);

        if (!firstResult.valid) {
            alert("Invalid number format");
        }
    } while (!firstResult.valid);


    let secondResult;

    do {
        const secondInput = prompt("Enter second number:");
        secondResult = validateNumberInput(secondInput);

        if (!secondResult.valid) {
            alert("Invalid number format");
        }
    } while (!secondResult.valid);


    const result = operationFunction(
        firstResult.value,
        secondResult.value
    );


    if (result === null) {
        alert("Cannot divide by zero");
        return;
    }


    alert(
        `${firstResult.value} ${op} ${secondResult.value} = ${result}`
    );
};


const readNumbers = function () {
    const numbers = [];

    while (true) {
        const input = prompt("Enter a number (empty to finish):");

        if (input === "" || input === null) {
            break;
        }

        const result = validateNumberInput(input);

        if (!result.valid) {
            alert("Invalid number format");
            continue;
        }

        numbers.push(result.value);

        alert(`Current numbers: ${numbers.join(", ")}`);
    }

    return numbers;
};


const performCalculationOnNumbers = function (
    numbers,
    operationCallback
) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = operationCallback(result, numbers[i]);

        if (result === null) {
            return null;
        }
    }

    return result;
};


const runMultipleNumberCalculator = function () {
    let op;
    let operationFunction;

    do {
        op = prompt("Enter operation (+, -, *, /):");
        operationFunction = getOperationFunction(op);

        if (operationFunction === null) {
            alert("Invalid operation");
        }
    } while (operationFunction === null);


    const numbers = readNumbers();

    if (numbers.length === 0) {
        alert("No numbers entered");
        return;
    }


    const result = performCalculationOnNumbers(
        numbers,
        operationFunction
    );


    if (result === null) {
        alert("Cannot divide by zero");
        return;
    }


    alert(`${numbers.join(` ${op} `)} = ${result}`);
};


const calculatorType = prompt(
    "Enter calculator type (0 for two numbers, 1 for multiple numbers):"
);

if (calculatorType === "0") {
    runTwoNumberCalculator();
} else if (calculatorType === "1") {
    runMultipleNumberCalculator();
} else {
    alert("No calculator selected");
}