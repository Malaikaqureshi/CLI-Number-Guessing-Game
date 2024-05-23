#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWellcome to CodewithMalaika - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:"Enter your guess number(Number Limit from 1 to 5):",

    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations ! You guess a corect number.");
}
else{
    console.log("Sorry, You guess a wrong number");
}
    

