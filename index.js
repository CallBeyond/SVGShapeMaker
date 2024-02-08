// Importing necessary modules
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js'); // Object destructuring to import specific shapes
const fs = require('fs');

// Function to prompt the user for input
const promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "characters",
                message: "What text? Enter up to 3 characters.",
            },
            {
                type: 'input',
                name: "textColor",
                message: "What color for the text?",
            },
            {
                type: 'list',
                name: "shape",
                message: "What shape do you want?",
                choices: (["Circle", "Square", "Triangle"]),
            },
            {
                type: 'input',
                name: "color",
                message: "What color shape?",
            }
        ])
        .then(res => {
            // Variable to store the chosen shape
            let shape; 
            // Depending on the shape chosen, create the corresponding shape object
            if (res.shape === "Circle") {
                shape = new Circle(res.characters, res.textColor, res.color);
            } else if (res.shape === "Square") {
                shape = new Square(res.characters, res.textColor, res.color);
            } else if (res.shape === "Triangle") {
                shape = new Triangle(res.characters, res.textColor, res.color);
            }
            // Log the created shape and its render method
            console.log(shape);
            console.log(shape.render);
            // Write the rendered SVG to a file
            fs.writeFileSync("./examples/logo.svg", shape.render());
        });
};

const init = () => {
    promptUser(); 
};

init();
