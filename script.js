function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() {
  let x = getRandomInt(0, 3);
  switch (x) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }

  return "rock";
}

function playRound(playerSelection, computerSelection) {
  const map = new Map();
  map.set("rock", 1);
  map.set("scissor", 0);
  map.set("paper", -1);
  const player = map.get(playerSelection.trim().toLowerCase());
  if (player == undefined) return null;
  const computer = map.get(computerSelection);
  if (player == computer) return -1;
  if (player > computer && Math.abs(player) != Math.abs(computer)) return 1;
  else if (Math.abs(player) === Math.abs(computer) && player < computer)
    return 1;
  else return 0;
}

function game() {
  for (let i = 0; i <= 5; i++) {
    let player = prompt("Enter one of the following: \n rock paper scissor");
    let computer = computerPlay();
    let result = playRound(player, computer);
    switch (result) {
      case null:
        alert("You Did not enter a valid option");
        break;
      case 1:
        console.log("You Win! " + player + " beats " + computer);
        break;
      case 0:
        console.log("You Lose! " + computer + " beats " + player);
        break;
      case -1:
        console.log("Draw!");
    }
  }
}

setTimeout(game, 1500);
