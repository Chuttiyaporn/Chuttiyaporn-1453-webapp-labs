import inquirer from "inquirer";

const args = process.argv.slice(2);

if (args.length < 2 || isNaN(args[0]) || isNaN(args[1])) {
    console.log("Please enter two numbers");
    process.exit();
}

const n1 = parseFloat(args[0]);
const n2 = parseFloat(args[1]);

var questions = [
    {
        type: "input",
        name: "operator",
        message: "add | subtract",
    },
];

inquirer.prompt(questions).then((answers) => {
    if (answers.operator === "add") {
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
    } else if (answers.operator === "subtract") {
        console.log(`${n1} - ${n2} = ${n1 - n2}`);
    } else {
        console.log("Unknown operator");
    }
});