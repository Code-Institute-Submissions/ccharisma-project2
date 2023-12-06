let playerName = "";
let playerScore = 0;
let computerScore = 0;

function startGame() {
    playerName = document.getElementById("playerName").value;
    if(playerName == '')
    {
        playerName = "Player";
    }
    document.getElementById("gameRules").style.display = "block";
    document.getElementById("gamePlay").style.display = "block";
    document.getElementById("playerName").style.display = "none";
    document.getElementById("gameStart").style.display = "none";
}

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display result in the modal
    const modal = document.getElementById("resultModal");
    const modalResult = document.getElementById("modalResult");

    // Set up image sources
    const userChoiceImg = document.getElementById("userChoiceImg");
    const computerChoiceImg = document.getElementById("computerChoiceImg");

    userChoiceImg.src = `images/${playerChoice}.png`; // Assuming your image filenames correspond to the choices
    computerChoiceImg.src = `images/${computerChoice}.png`; // Assuming your image filenames correspond to the choices


    if (playerChoice === computerChoice) {
        modalResult.innerHTML = "<span class='message'>It's a tie!</span>";
    } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
        modalResult.innerHTML = `<span class='message'>${playerName} wins!</span>`;
        playerScore++;
    } else {
        modalResult.innerHTML = `<span class='message'>Computer wins!</span>`;
        computerScore++;
    }

    // Update scores
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    // Show the modal
    modal.style.display = "flex";

}

function restartGame() {
    document.getElementById("gamePlay").style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerName").style.display = "block";
    document.getElementById("gameStart").style.display = "block";
    document.getElementById("gameStart").style.marginLeft = "auto";
    document.getElementById("gameStart").style.marginRight = "auto";
    document.getElementById("playerName").style.marginLeft = "auto";
    document.getElementById("playerName").style.marginRight = "auto";
    document.getElementById("result").innerHTML = "";

}



function closeModal() {
    // Hide the modal
    const modal = document.getElementById("resultModal");
    modal.style.display = "none";
}


function gameRules() {
    const modal = document.getElementById("rulesModal");
    modal.style.display = "flex";
}

function closeRulesModal() {
    // Hide the modal
    const modal = document.getElementById("rulesModal");
    modal.style.display = "none";
}