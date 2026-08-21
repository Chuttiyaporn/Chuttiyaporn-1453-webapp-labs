const readInput = () => {
    const numbers = [];

    while (true) {
        const input = prompt("Enter an integer (a negative integer to quit):");
        const number = Number(input);

        if (
            input === null ||
            input.trim() === "" ||
            Number.isNaN(number) ||
            !Number.isInteger(number)
        ) {
            continue;
        }

        if (number < 0) {
            break;
        }

        if (number > 0) {
            numbers.push(number);
        }
    }

    return numbers;
};


const displayStats = (list) => {
    let sum = 0;

    for (let number of list) {
        sum += number;
    }

    const average = list.length === 0
        ? 0
        : sum / list.length;

    const minimum = list.length === 0
        ? 0
        : Math.min(...list);

    const maximum = list.length === 0
        ? 0
        : Math.max(...list);

    alert(
        `For the list ${list}, the average is ${average.toFixed(2)}, ` +
        `the minimum is ${minimum}, and the maximum is ${maximum}`
    );
};


const numbers = readInput();
displayStats(numbers);