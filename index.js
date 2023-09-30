const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter your text: "
    },
    {
        type: "input",
        name: "tcolor",
        message: "What color what you like your text?(Red, Green, Blue)"
    },
    {
        type: "input",
        name: "shape",
        message: "Which shape would you like?(Circle, Triangle, or Square)"
    },
    {
        type: "input",
        name: "scolor",
        message: "What color would you like your shape?(Red, Green, Blue)"
    }
];

inquirer.prompt(questions)