
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

}