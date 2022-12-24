#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";
import { randomBytes } from "crypto";

const sleep = ()=>{
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    })
};
async function wellcome() {
    let text = chalkAnimation.rainbow('Lets Start The Game guyz.!');
    await sleep();
    text.stop();

}

let playerLife:number = 3;
async function askQuestion() {
    do {
        playerLife--;
        console.log(`Player Lifes Left ${playerLife}`);
        var randomNumber:number = Math.floor(Math.random() * 10 + 1);
     
    var question = await inquirer
    .prompt([
        {
            type: "number",
            name:"userNumber",
            message:chalk.rgb(250,147,195)("Select the Number Between 1 - 10."),
        //     validate: (answers: number)=>{
        //         if(isNaN(answers)){
        //             return chalk.redBright('Please Enter a Valid Number.');
        //         }
        //         return true;
        //     }
        }
    ]);
    console.log(question);
    
    if(question.userNumber === randomNumber){
        console.log(chalk.yellowBright('Congratulation! You Guessed The Right Number.'));
        
    }else if(question.userNumber < randomNumber){
        console.log(chalk.redBright(`Your Number ${question.userNumber} is Less than the guess number. `));
        
    }else if(question.userNumber > randomNumber){
        console.log(chalk.redBright(`Your Number ${question.userNumber} is greater than the guess number.`));
        
    }

    } while (playerLife > 0 && randomNumber !== question.userNumber);
    if(playerLife == 0 && randomNumber !== question.userNumber){
        console.log(chalk.redBright('GAME OVER!'));
        
    }
}

async function startAgain() {
    do {
        console.clear();
        await wellcome();

        playerLife = 3;
        await askQuestion();
        var again = await inquirer
        .prompt([
            {
                type: "input",
                name: "Restart",
                message: "Do you want to restart the Game ? press y or n. ",
            }
        ])
        
    } while (again.Restart === "y" || again.Restart === "Y" || again.Restart === "YES" || again.Restart === "yes");
}
startAgain();
