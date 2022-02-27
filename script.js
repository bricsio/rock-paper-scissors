let computerPlay = () => {
    let answer = ["ROCK", "PAPER", "SCISSORS"];
    return answer[Math.floor(Math.random() * 3)];
}

let playRound = (playerSelection, computerSelection) => {
    let result = "";
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
    return result;
}

let game = () => {
    counter = 1;
    while (counter < 6) {
        const playerSelection = window.prompt("Rock, paper or scissors?");
        const computerSelection = computerPlay();
        console.log(`Player selection: ${playerSelection} -- Computer selection: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        counter++;
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(game());