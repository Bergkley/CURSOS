const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    name: "p1",
    message: "Qual é seu nome? ",
  },
  {
    name: "p2",
    message: "Qual é sua idade? ",
  }
]).then((answers) => {
  console.log(chalk.bgYellow.black(`Ola ${answers.p1}, voce tem ${answers.p2} anos`))
}).catch((err) => {
  console.log(err)
})

