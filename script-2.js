const buttons = document.querySelectorAll("button");

function test(e) {
    console.log(e.target.value);
}

let computerPlay = () => {
    let answer = ["ROCK", "PAPER", "SCISSORS"];
    return answer[Math.floor(Math.random() * 3)];
}

let playRound = (e) => {
    let result = "",
        playerSelection = e.target.value,
        computerSelection = computerPlay();
    switch (playerSelection.toUpperCase()) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    result = `It's a tie! The computer also picked ROCK.`;
                    break;
                case "PAPER":
                    result = `You lose! PAPER beats ROCK.`;
                    break;
                case "SCISSORS":
                    result = `You win! ROCK beats SCISSORS.`;
                    break;
            }
            break;
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    result = `You win! PAPER beats ROCK.`;
                    break;
                case "PAPER":
                    result = `It's a tie! The computer also picked PAPER.`;
                    break;
                case "SCISSORS":
                    result = `You lose! SCISSORS beats PAPER.`;
                    break;
            }
            break;
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    result = `You lose! ROCK beats SCISSORS.`;
                    break;
                case "PAPER":
                    result = `You win! SCISSORS beats PAPER.`;
                    break;
                case "SCISSORS":
                    result = `It's a tie! The computer also picked SCISSORS.`;
                    break;
            }
            break;
    }
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);
    return result;
}

buttons.forEach(button => button.addEventListener('click', playRound));