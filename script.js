let userCount = 0;
let compCount = 0;

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");

const getCompInput = () => {
    const arr = ["stone","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    return arr[idx];
}

function draw(){
    msg.innerText = "DRAW !! Play again...";
    msg.style.backgroundColor = "black";
    
}

function result(flag, userinput, compinput){
    if(flag){
        msg.innerText = `WIN !! your ${userinput} beats ${compinput}`;
        msg.style.backgroundColor = "green";
        userCount++;
        userScore.innerText = userCount;
        
    }
    else{
        msg.innerText = `LOSS !! ${compinput} beats your ${userinput}`;
        msg.style.backgroundColor = "red";
        compCount++;
        compScore.innerText = compCount;
    }
}

function getWinner(selected){
    let userinput = selected;
    let compinput = getCompInput();
    if(userinput == compinput){
        draw();
    }
    else{
        let flag = true;
        if(userinput == "stone"){
            flag = (compinput == "paper")?false:true;
        }
        else if(userinput == "paper"){
            flag = (compinput == "scissor")?false:true;
        }
        else{
            flag = (compinput == "stone")?false:true;
        }
        result(flag, userinput, compinput);
    }
}

let cards = document.querySelectorAll(".card");


cards.forEach((card) => {
    card.addEventListener("click",() => {
        const selected = card.getAttribute("id");
        getWinner(selected);
    })
})
