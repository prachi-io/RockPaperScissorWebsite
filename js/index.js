
const handOptions = {
    "rock" : "./images/Rock.png",
    "paper" : "./images/Paper.png",
    "scissors" : "./images/Scissors.png"
}
let SCORE = 0;
const pickUserHand = (hand) => {
    console.log(hand);

    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    // show the next page with hand u picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pic
    /*if(hand === "rock") {
        document.getElementById("userPickImage").src = "./images/Rock.png";
    }
    if(hand === "scissors") {
        document.getElementById("userPickImage").src = "./images/Scissors.png";
    }
    if (hand === "paper") {
        document.getElementById("userPickImage").src = "./images/Paper.png";
    }*/
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = picComputerHand();

    referee(hand , cpHand)

}

const picComputerHand = () => {
    let hands = ["rock" , "paper" , "scissors"]
    let cpHand = hands[Math.floor (Math.random() * 3)]

    console.log(cpHand);
    // set computer hand
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;
}

const referee = (userHand , cpHand) => {
    if(userHand === "paper" && cpHand === "scissors") {
        setDecision("YOU LOSE! ")
    }
    else if(userHand === "paper" && cpHand === "rock") {
        setDecision("YOU WIN! ")
        setScore(SCORE + 1)
    }
    else if(userHand === "paper" && cpHand === "paper") {
        setDecision("It's a Tie")
    }
    else if(userHand === "rock" && cpHand === "paper") {
        setDecision("YOU LOSE! ")
    }
    else if(userHand === "rock" && cpHand === "rock") {
        setDecision("It's a Tie")
    }
    else if(userHand === "rock" && cpHand === "scissors") {
        setDecision("YOU WIN! ")
        setScore(SCORE + 1)
    }
    else if(userHand === "scissors" && cpHand === "paper") {
        setDecision("YOU WIN! ")
        setScore(SCORE + 1)
    }
    else if(userHand === "scissors" && cpHand === "rock") {
        setDecision("YOU LOSE! ")
    }
    else if(userHand === "scissors" && cpHand === "scissors") {
        setDecision("It's a Tie")
    }
}

const setDecision = (decision) => {
    console.log(decision)
    document.querySelector(".decision h1").innerText = decision
}
const setScore = (score) => {
    console.log(score)
    SCORE = score;
    document.querySelector(".score h1").innerText = score
}

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}