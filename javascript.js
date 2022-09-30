const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playerNumber(playerChoice) {
    let playerSelection;
    if (playerChoice==="rock") {
        playerSelection=0;
    } else if (playerChoice==="paper") {
        playerSelection=1;
    } else if (playerChoice==="scissors") {
        playerSelection=2;
    }
    return playerSelection;
}

function choice(number) {
    let result;
    if (number === 0) {
        result = "rock";
    } else if (number ===1) {
        result = "paper";
    } else if (number ===2) {
        result = "scissors";
    }
    return result;
}



function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection===computerSelection) {
        console.log("Tie");
        result=0;
    }
    if (playerSelection===0 && computerSelection===1) {
        console.log("You lose");
        result=0;
    }
    if (playerSelection===0 && computerSelection===2) {
        console.log("You win");
        result=1;
    }
    if (playerSelection===1 && computerSelection===0) {
        console.log("You win");
        result=1;
    }
    if (playerSelection===1 && computerSelection===2) {
        console.log("You lose");
        result=0;
    }
    if (playerSelection===2 && computerSelection===0) {
        console.log("You lose");
        result=0;
    }
    if (playerSelection===2 && computerSelection===1) {
        console.log("You win");
        result=1;
    }
    return result;
}



function playerSelect(e, playerChoice) {
    const rock = document.getElementById('rock');
    rock.addEventListener('click', () =>
        playRound(0,getComputerChoice()));
    const paper = document.getElementById('paper');
    paper.addEventListener('click', () =>
        playRound(1,getComputerChoice()));
    const scissors = document.getElementById('scissors');
    scissors.addEventListener('click', () =>
        playRound(2,getComputerChoice()));
    
  }


function game() {
   /* let rounds = 4;
    let myWins=0;
   // for (let i=0; i<rounds; i++) {*/
        let playerChoice;
        playerSelect(playerChoice);
        
        /*let comp = getComputerChoice();
        let you =  playerChoice;
        console.log("Computer: "+ choice(comp));
        console.log("You: "+choice(you));
       // myWins += playRound(you, comp);
    /*}
    if (rounds%2 != 0) {
        if (myWins >= rounds/2) {
            console.log("You win!!!!");
         } else {
             console.log("You lose!!!");
         }
    } else if (rounds%2==0) {
        if (myWins===rounds/2)  {
            console.log("Tie!!!");
        } else if (myWins > rounds/2) {
            console.log("You win!!!!");
         } else {
             console.log("You lose!!!");
         }
    }*/
    
}

game();