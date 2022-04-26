// const userChoice=document.querySelectorAll(".heading-icons");
// let choice;
// userChoice.forEach(userChoice=>userChoice.addEventListener(click,(e)=>{
//     preventDefault();
//     choice=e.target.id;
//     console.log(choice)
// }));

// console.log(document.getElementsByClassName("heading-images"));
// console.log(document.querySelectorAll(".heading-images"));
// console.log(document.querySelectorAll(".heading-icons"));
let userChoice,computerChoice,randomNumber;
let result;

const possibleChoices=document.querySelectorAll(".heading-icons");
console.log(possibleChoices);
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener("click",(e)=>{
    // console.log(possibleChoices.id);
    userChoice=possibleChoices.id;
    console.log("user choice - "+userChoice);
    check();

  })) 

function check(){
    randomNumber=Math.floor(Math.random()*3)+1;
    // console.log(randomNumber);

    if(randomNumber===1){
        computerChoice="rock";
    }
    if(randomNumber===2){
        computerChoice="paper";
    }
    if(randomNumber===3){
        computerChoice="scissor";
    }

    console.log("computer choice - "+computerChoice);



    if(userChoice===computerChoice){
        result="IT'S A DRAW";
    }

    if(userChoice==="rock"&&computerChoice==="paper"){
        result="COMPUTER WON";
    }
    if(userChoice==="rock"&&computerChoice==="scissor"){
        result="YOU WON";
    }
    if(userChoice==="paper"&&computerChoice==="scissor"){
        result="COMPUTER WON";
    }
    if(userChoice==="paper"&&computerChoice==="rock"){
        result="YOU WON";
    }
    if(userChoice==="scissor"&&computerChoice==="paper"){
        result="YOU WON";
    }
    if(userChoice==="scissor"&&computerChoice==="rock"){
        result="COMPUTER WON";
    }
   
    console.log(result);

    document.getElementById("user-choice").innerHTML=userChoice;
    document.getElementById("computer-choice").innerHTML=computerChoice;
    document.getElementById("result").innerHTML=result;

}





