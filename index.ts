#! /usr/bin/env node
import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name:"firstNumber"}, 
    {message: "Enter Second Number", type: "number", name:"secondNumber"},
{ 
    message: "Select one Operator to perform Operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
}
]);  

// Conditional Statement if-Else  

if (answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
} 
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
} 
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
} 

else {
    console.log("Please select valid operator")
}