let users=0;
let comps=0;

let node=document.querySelectorAll(".image");
let nodee=document.querySelector("#play");
let userscore=document.querySelector("#users");
let compscore=document.querySelector("#comps");

let gencompchoices =()=>{
    let options=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return options[random];
}

node.forEach((image)=>{
image.addEventListener("click",()=>{
 let user=image.getAttribute("id");
   console.log("UserChoice",user);
   let comp=gencompchoices();
   console.log("computer choices",comp);
   

   if(user===comp){
     console.log("game is draw");
     play.innerText="game was draw,play again!";  
        play.style.backgroundColor="black";
   }
    else if(user==="rock" && comp==="scissors" || user==="paper" && comp==="rock" || user==="scissors" && comp==="paper"){
    console.log("you win");
    play.innerText='you win your {$user} ';
    play.style.backgroundColor="green";
    users++;
    userscore.innerText=users;
    }

    else{
        console.log("you lose");
        play.innerText="YOU LOSE";
        play.style.backgroundColor="red";
        comps++;
        compscore.innerText=comps;     
    }
});
});