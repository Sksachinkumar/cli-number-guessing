import inquirer from "inquirer";
// 1) computer will generate a random number - Done
// 2) user input for guessing a number - Done 
// 3) compare user input with copmuter generated number and show result - Done 
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guessed a number between 1-10:",
    }
]);
if (answers.userGussedNumber === randomNumber) {
    console.log("congtratulation you guessed right number.");
}
else {
    console.log("you guessed wrong number ");
}
