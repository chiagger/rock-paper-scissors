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

let youScore=0;
let compScore=0;

function playRound(playerSelection, computerSelection) {
    const container = document.getElementById('results');
    const tie = document.createElement('p');
        tie.textContent='Tie';
        tie.style.color= '#e5e5e5';
    const win = document.createElement('p');
    win.textContent='You Win';
    win.style.color=  '#e5e5e5';
    const lose = document.createElement('p');
    lose.textContent='You Lose';
    lose.style.color=  '#e5e5e5';

    const yourScoreContainer = document.getElementById('you');
    const compScoreContainer = document.getElementById('comp');
    const yourScore = document.createElement('div');
    const comptScore = document.createElement('div');
    let oldchild;
    
    if (playerSelection===computerSelection) {
        container.appendChild(tie);
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }
    if (playerSelection===0 && computerSelection===1) {
        container.appendChild(lose);
        compScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }
    if (playerSelection===0 && computerSelection===2) {
        container.appendChild(win);
        youScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }
    if (playerSelection===1 && computerSelection===0) {
        container.appendChild(win);
        youScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }
    if (playerSelection===1 && computerSelection===2) {
        container.appendChild(lose);
        compScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }
    if (playerSelection===2 && computerSelection===0) {
        container.appendChild(lose);
        compScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }
    if (playerSelection===2 && computerSelection===1) {
        container.appendChild(win);
        youScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        yourScoreContainer.appendChild(yourScore);
        compScoreContainer.appendChild(comptScore);
    }

    
    const finalRes = document.getElementById('score');
    
        if (youScore ===5 && compScore ===5) {
            const finalTie = document.createElement('div');
            finalTie.textContent="TIE";
            finalRes.appendChild(finalTie);
            document.getElementById('rock').setAttribute('disabled','disabled');
            document.getElementById('paper').setAttribute('disabled','disabled');
            document.getElementById('scissors').setAttribute('disabled','disabled');
        } else if (youScore===5) {
            const finalWin = document.createElement('div');
            finalWin.textContent="YOU WIN!!!";
            finalRes.appendChild(finalWin);
            document.getElementById('rock').setAttribute('disabled','disabled');
            document.getElementById('paper').setAttribute('disabled','disabled');
            document.getElementById('scissors').setAttribute('disabled','disabled');
        } else if (compScore===5) {
            const finalLose = document.createElement('div');
            finalLose.textContent="YOU LOSE...";
            finalRes.appendChild(finalLose);
            document.getElementById('rock').setAttribute('disabled','disabled');
            document.getElementById('paper').setAttribute('disabled','disabled');
            document.getElementById('scissors').setAttribute('disabled','disabled');
        }
    //console.log(btn);
    

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
   
    if (youScore === 5 ) {
        window.alert("YOU WIN!");
    }
        let playerChoice;
        playerSelect(playerChoice);
        
        
    
}

game();