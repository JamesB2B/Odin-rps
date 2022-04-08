function computerPlay()
{
    let choice= ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}
      

function getUserPlay()
{
    let choice= ['rock', 'paper', 'scissors']
    choice= prompt("Type rock, paper, or scissors")
    return choice;
}

function playRound()
{
    let computerSelection;
    let playerSelection;
    let playerScore=0;
    let computerScore=0;
    for(let i = 0; i < 5; i++)
    {
        playerSelection=getUserPlay();
        console.log(playerSelection);
        computerSelection = computerPlay();
        console.log(computerSelection);

        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
        {
            alert("youwin");
            playerScore++;
        }
        else if(playerSelection == computerSelection)
        {
            alert("youtie");
        }
        else
          {
            alert("youlose");
            computerScore++;
          }
          console.log("playerscore: " ,playerScore);
          console.log("computerScore: ", computerScore)
        }
      }