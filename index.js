const inquirer = require('inquirer')
const fs = require(`fs`)
const shape  = require ('./lib/shapes.js')
const { kMaxLength } = require("buffer")
const MaxLengthInputPrompt = require('inquirer-maxLength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)



const questions = [
    {
        type: "list",
        name: "shape",
        message: "Select the shape for your logo",
        choices: ['square','triangle','circle']
    },
    {
        type: "input",
        name: "color",
        message: "Input the color you want for your logo."
    },
    {
        type: "MaxLengthInputPrompt",
        name: 'LogoName',
        message: "Input 3 characters for your logo.",
        maxLength: 3,
    },
    {
        type: "input",
        name: "FontColor",
        message: "Input font color",
    },
]

const prompt = inquirer.createPromptModule();

function writeToFile (fileName, data) {
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
        fs.writeFile(`examples/NewLogo.svg`, shape.generateLogo(res),
        err =>{
         err ? console.log(err) : console.log('SVG MADE')
        });

    })
    
}
// (async () => {
//     const { fileTypeFromFile } = await import('file-type');
  
//     const type = await fileTypeFromFile('fixture/fixture.gif');
//     console.log(type);
//   })();

init()