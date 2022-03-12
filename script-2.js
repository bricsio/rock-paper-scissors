function test(e) {
    console.log(e.target.value);
}

let computerPlay = () => {
    let answer = ["ROCK", "PAPER", "SCISSORS"];
    return answer[Math.floor(Math.random() * 3)];
}

let playerScore = 0,
    computerScore = 0;

let resetGame = () => {
    document.getElementById("sub1").textContent = "Let's Play";
    document.getElementById("sub2").textContent = "First player to score 5 points wins the game";
    document.getElementById("player-choice").innerHTML = "&#10068";
    document.getElementById("computer-choice").innerHTML = "&#10068";
    document.getElementById("player-score").textContent = `Player: 0`;
    document.getElementById("computer-score").innerText = `Computer: 0`;
    playerScore = 0;
    computerScore = 0;
}

let playRound = (e) => {
    let result = "",
        playerSelection = e.target.value,
        computerSelection = computerPlay();
    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    result = `It's a tie! The computer also picked ROCK.`;
                    break;
                case "PAPER":
                    result = `You lose! PAPER beats ROCK.`;
                    computerScore++;
                    break;
                case "SCISSORS":
                    result = `You win! ROCK beats SCISSORS.`;
                    playerScore++;
                    break;
            }
            break;
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    result = `You win! PAPER beats ROCK.`;
                    playerScore++;
                    break;
                case "PAPER":
                    result = `It's a tie! The computer also picked PAPER.`;
                    break;
                case "SCISSORS":
                    result = `You lose! SCISSORS beats PAPER.`;
                    computerScore++;
                    break;
            }
            break;
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    result = `You lose! ROCK beats SCISSORS.`;
                    computerScore++;
                    break;
                case "PAPER":
                    result = `You win! SCISSORS beats PAPER.`;
                    playerScore++;
                    break;
                case "SCISSORS":
                    result = `It's a tie! The computer also picked SCISSORS.`;
                    break;
            }
            break;
    }

    // Update subheadings
    document.getElementById("sub1").textContent = result.substring(0, result.indexOf("!") + 1);
    document.getElementById("sub2").textContent = result.substring(result.indexOf("!") + 1);


    // Update player and computer's choices
    playerChoice = document.querySelector(`button[value="${e.target.value}"]`).innerText;
    computerChoice = document.querySelector(`button[value="${computerSelection}"]`).innerText;
    document.getElementById("player-choice").textContent = playerChoice;
    document.getElementById("computer-choice").textContent = computerChoice;

    // Update score
    document.getElementById("player-score").textContent = `You: ${playerScore}`;
    document.getElementById("computer-score").innerText = `Computer: ${computerScore}`;

    if (playerScore == 5) {
        window.alert("Congratulaitons, you won!");
        resetGame();
    } else if (computerScore == 5) {
        window.alert("You lost, good try!");
        resetGame();
    }
    return;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', playRound));