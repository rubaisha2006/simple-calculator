#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Wellcome Message
console.log("\n\tWellcome To \'Rubaisha\' - CLI Simple Calculator\n");
// Asking Questions from Users through Inquirer
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perfom operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
// conditinal statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
