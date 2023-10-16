let gameSeq = []; //for storing game generated color
let userSeq = []; //for storing user genereted color


let started = false;
let level = 0;

// press any to stsrt the game
document.addEventListener("keypress", function(){
    if(started == false){
    console.log("Hey gamer! Game started.");
    started = true;
    };

    levelUp();
});

//create a function for button flash
function buttonFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},50);
}

//flash button and level up and also update the value of <h3>
function levelUp(){
    userSeq = [];
    level++;
    let h3 = document.querySelector("h3"); //access the h3 element for updating
    h3.innerText = `level : ${level}`;     //print level no.

    //random button choose
    let btns = ["red","yellow","green","purple"];
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`); //choose the button and pass into the function
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    //call the buttonFlash function
    buttonFlash(randomBtn);  
}

//button press function : After pressing the button what happening that is contained by this function
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
//this function is for check the user generated color is match with gameSeq or not
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML=`Game over! Your score is :<b>${level}</b>  <br><br>press any key to start again.`;
        reset();
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "slategray";
        },150);
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    // extract user generated color
    userColor = btn.getAttribute("id");
    userSeq.push(userColor); //check this color is match with gameSeq or not for this make a function checkAns() where we pass current level
    checkAns(userSeq.length-1);
}
//access all button
let allBtns = document.querySelectorAll(".btn");
    // for(let btn = 0;btn<allBtns.length;btn++) {
        for(btn of allBtns){
        btn.addEventListener("click", btnPress);
    }

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
    