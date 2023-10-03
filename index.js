const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require ('./lib/circle')
const Square = require ('./lib/square')
const Triangle = require ('./lib/triangle')

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

inquirer.prompt(questions).then((response) =>{
    // console.log(response)
    let shape;
    if(response.shape === 'Circle'){
        shape = new Circle()
    }
    if(response.shape === 'Triangle'){
        shape = new Triangle()
    }
    if(response.shape === 'Square'){
        shape = new Square()
    }
    shape.setColor(response.scolor)
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.tcolor}">${response.text}</text>
  
  </svg>`
}).then((data) => {
    fs.writeFileSync('./examples/logo.svg', data)
})