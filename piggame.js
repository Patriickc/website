//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1"); //supposed to be a little bit faster
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//Starting conditions
/*state variable which kind of tells us the condition
of a system; is the game playing or not ?
as soon as the game is finished we can no longer click on these
buttons.
*/
let scores, currentScore, activePLayer, playing;
     //they lives out here
const initialization = function(){
    //declaring a variable is not the same as assigning them a value
     
     scores = [0,0]; //we only reassign their values
     currentScore = 0;
     activePLayer = 0;
     playing = true;

    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEL.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
}
initialization();


const switchPlayer = function(){
    document.getElementById(`current--${activePLayer}`).textContent = 0;
        currentScore = 0;
        activePLayer = activePLayer === 0?1:0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");

}


// dice functionality
btnRoll.addEventListener("click", function(){
    if(playing){

    
    const dice = Math.trunc(Math.random() *6)+1;
    console.log(dice);
    
    //display dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;
    
    if(dice !==1){
        currentScore =currentScore+dice;
        document.getElementById(`current--${activePLayer}`).textContent = currentScore;
        // curent0El.textContent = currentScore

    }else{
        switchPlayer();
    }
}
});

btnHold.addEventListener("click", function(){
    if(playing){

    
    scores[activePLayer] += currentScore;
    // scores[1]=scores[1]+currentScore;
    
    document.getElementById(`score--${activePLayer}`).textContent = scores[activePLayer];
    // console.log(scores[activePLayer]);
if(scores[activePLayer] >= 20){
    // alert("game is finished");
    //finish game
    playing = false;
    diceEL.classList.add("hidden"); 
    document.querySelector(`.player--${activePLayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activePLayer}`).classList.remove("player--active");
    
}
else{
    switchPlayer();

}
}
});






btnNew.addEventListener("click", initialization);


