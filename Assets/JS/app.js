const inquirer = require('inquirer');

console.log(inquirer);


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
// const fs = require('fs');

// const generatePage = require('./page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html' , pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });

