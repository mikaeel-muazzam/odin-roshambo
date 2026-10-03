console.log("Hello World");
// get computer choice
function getComputerChoice() {
    const rand = Math.floor(Math.random()*3); //generate a random integer from 0-2 (both inclusive)
    // console.log(rand);
    let choice;
    switch(rand) { //select choice based on value of rand
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors"
    }
    // console.log(choice);
    return choice;
}

//get human choice
function getHumanChoice() {
    let choice;
    choice = prompt("Choose rock, paper, or scissors"); //prompts the user to type in their choice
    // console.log(choice);
    return choice;
}

//declarations
let humanScore = 0;
let computerScore = 0;