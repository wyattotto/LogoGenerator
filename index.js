const inquirer = require('inquirer')
const fs = require(`fs`)
const {circle, square, triangle} = require (`.lib/shapes.js`)
const { kMaxLength } = require("buffer")
const MaxLengthInputPrompt = require('inquirer-maxLength-input-prompt')




const questions = [
    {
        type: "list",
        name: "shape",
        message: "Select the shape for your logo",
        Choices: ['square','triangle','circle']
    },
    {
        type: "input",
        name: "color",
        message: "Input the color you want for your logo"
    },
    {
        type: "MaxLengthInputPrompt",
        name: 'LogoName',
        message: "Input 3 characters for your logo",
        maxLength: 3,
    },
    {
        type: "input",
        name: "FontColor",
        message: "Input font color",
    },
]

const prompt = inquire.createPromptModule();

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function (err){
        if (err) {
            return console.log(err);
        }
        console.log("Your Logo has been generated")
    })
}

function init() {
    inquirer.prompt(questions).then((res) =>{
        console.log("Your Logo is being made as we speak!")
        fs.writeToFile(`example/newLogo.svg`, shape.newLog(res),
        err =>{
         err ? console.err() : console.log('SVG MADE')
        });

    })
    
}
// (async () => {
//     const { fileTypeFromFile } = await import('file-type');
  
//     const type = await fileTypeFromFile('fixture/fixture.gif');
//     console.log(type);
//   })();

init()