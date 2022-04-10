const game = () => {
  let pScore = 0;
  let cScore = 0;

  const playMatch = () => {
    const options = document.querySelectorAll('.options button')

    const computerOptions = ['rock','paper','scissors'];

    options.forEach(option =>{
      option.addEventListener("click", function(){
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        compareChoice(this.textContent, computerChoice);
      });
    });
  };

  const updateScore = () =>{
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

  }



  const compareChoice = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice) {
      winner.textContent = 'You Tied!';
      return;
    }
    if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        winner.textContent = 'Computer Chose Scissors, You Win!';
        pScore++;
        updateScore();
        return
      }
      else {
        winner.textContent = 'Computer Chose Paper, You Lose!';
        cScore++;
        updateScore();
        return;
      }
    }
    if(playerChoice === 'paper') {
      if(computerChoice === 'rock') {
        winner.textContent = 'Computer Chose Rock, You Win!';
        pScore++;
        updateScore();
        return
      }
      else {
        winner.textContent = 'Computer Chose Scissors, You Lose!';
        cScore++;
        updateScore();
        return;
      }
    }
    if(playerChoice === 'scissors') {
      if(computerChoice === 'paper') {
        winner.textContent = 'Computer Chose paper, You Win!';
        pScore++;
        updateScore();
        return
      }
      else {
        winner.textContent = 'Computer Chose Rock, You Lose!';
        cScore++;
        updateScore();
        return;
      }
    }
  }


  playMatch();
}
game();