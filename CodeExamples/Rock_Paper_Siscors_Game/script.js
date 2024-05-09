const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

document.querySelectorAll('.choice-btn').forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.id;
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById('result').textContent = `You chose  ${playerChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('result').style.fontWeight = 'bold';

  });
});
