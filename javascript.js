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
        tie.textContent='Tie for this round';
        tie.style.color= '#e5e5e5';
    const win = document.createElement('p');
    win.textContent='You Win this round';
    win.style.color=  '#e5e5e5';
    const lose = document.createElement('p');
    lose.textContent='You Lose this round';
    lose.style.color=  '#e5e5e5';

    const yourScoreContainer = document.getElementById('you');
    const compScoreContainer = document.getElementById('comp');
    const yourScore = document.createElement('div');
    const comptScore = document.createElement('div');
    const oldyouScore = document.querySelector("#you div");
    const oldcompScore = document.querySelector("#comp div");
    
    if (playerSelection===computerSelection) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(tie,oldChild);
        } else {
            container.appendChild(tie);
        }
       
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }
    if (playerSelection===0 && computerSelection===1) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(lose,oldChild);
        } else {
            container.appendChild(lose);
        }
        compScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }
    if (playerSelection===0 && computerSelection===2) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(win,oldChild);
        } else {
            container.appendChild(win);
        }  
        youScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }
    if (playerSelection===1 && computerSelection===0) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(win,oldChild);
        } else {
            container.appendChild(win);
        }  
        youScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }
    if (playerSelection===1 && computerSelection===2) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(lose,oldChild);
        } else {
            container.appendChild(lose);
        }        
        compScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }
    if (playerSelection===2 && computerSelection===0) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(lose,oldChild);
        } else {
            container.appendChild(lose);
        }        
        compScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }
    if (playerSelection===2 && computerSelection===1) {
        const oldChild = document.querySelector("#results p");
        if (oldChild) {
            container.replaceChild(win,oldChild);
        } else {
            container.appendChild(win);
        }        
        youScore+=1;
        yourScore.textContent=youScore.toString();
        comptScore.textContent=compScore.toString();
        if (oldyouScore) {
            yourScoreContainer.replaceChild(yourScore,oldyouScore);
        } else {
            yourScoreContainer.appendChild(yourScore);        
        }
        if (oldcompScore) {
            compScoreContainer.replaceChild(comptScore,oldcompScore);
        } else {
            compScoreContainer.appendChild(comptScore);
        } 
    }

    
    const finalRes = document.querySelector("#results div");
    const playagainContainer = document.querySelector("#results #playagain");
    const playagainButton = document.createElement('button');
   // playagainButton.style.width='250px';
   // playagainButton.style.height='60px';
    playagainButton.textContent='Play Again';
    playagainButton.style.backgroundColor='#e5e5e5';
    playagainButton.style.color='gray';
    playagainButton.style.fontSize='15px';

    
        if (youScore ===5 && compScore ===5) {
            const oldChild = document.querySelector("#results p");
            container.removeChild(oldChild);
            const finalTie = document.createElement('div');
            finalTie.textContent="TIE";
            finalTie.style.textAlign='center';
            finalRes.appendChild(finalTie);
            document.getElementById('rock').setAttribute('disabled','disabled');
            document.getElementById('paper').setAttribute('disabled','disabled');
            document.getElementById('scissors').setAttribute('disabled','disabled');

            playagainContainer.appendChild(playagainButton);
            playagainButton.addEventListener('click', function refresh() {
                window.location.reload(true);
            });

        } else if (youScore===5) {
            const oldChild = document.querySelector("#results p");
            container.removeChild(oldChild);
            const finalWin = document.createElement('div');
            finalWin.textContent="YOU WIN!!!";
            finalWin.style.textAlign='center';
            finalRes.appendChild(finalWin);
            document.getElementById('rock').setAttribute('disabled','disabled');
            document.getElementById('paper').setAttribute('disabled','disabled');
            document.getElementById('scissors').setAttribute('disabled','disabled');
            playagainContainer.appendChild(playagainButton);
            playagainButton.addEventListener('click', function refresh() {
                window.location.reload(true);
            });
        } else if (compScore===5) {
            const oldChild = document.querySelector("#results p");
            container.removeChild(oldChild);
            const finalLose = document.createElement('div');
            finalLose.textContent="YOU LOSE...";
            finalLose.style.textAlign='center';
            finalRes.appendChild(finalLose);
            document.getElementById('rock').setAttribute('disabled','disabled');
            document.getElementById('paper').setAttribute('disabled','disabled');
            document.getElementById('scissors').setAttribute('disabled','disabled');
            playagainContainer.appendChild(playagainButton);
            playagainButton.addEventListener('click', function refresh() {
                window.location.reload(true);
            });
        }
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