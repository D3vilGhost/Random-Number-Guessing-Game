//Number section
let x = 101, attempts = 10;
//Home page
function home(){
    document.getElementById("win-page").hidden=true;
    document.getElementById("lose-page").hidden = true;
    document.getElementById("start").hidden = false;
}

//new game setup
function reset() {
    attempts = 10;
    document.getElementById("value").innerHTML = attempts;
    a = 0;
    attemptsempts = 0;
    x = Math.floor(Math.random() * 100);
    document.getElementById("message").innerHTML = "";
    document.getElementById("start").hidden = true;
    document.getElementById("play").hidden = false;
    console.log(x);
}

//game logic
function game() {
    let a = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (a < x) {
        attempts--;
        document.getElementById("value").innerHTML = attempts;
        let d = document.createElement("div");
        d.innerHTML = `Number is GREATER than ${a}.`;
        document.getElementById("message").prepend(d);
    }
    else if (a > x) {
        attempts--;
        document.getElementById("value").innerHTML = attempts;
        let d = document.createElement("div");
        d.innerHTML = `Number is LOWER than ${a}.`;
        document.getElementById("message").prepend(d);
    }
    else {
       document.getElementById("wscore").innerHTML = `Your Score: ${attempts}`;
        document.getElementById("play").hidden = true;
        document.getElementById("win-page").hidden = false;
    }

    if (attempts == 0) {
        document.getElementById("reslose").innerHTML = `The number was ${x}.`;
        document.getElementById("play").hidden = true;
        document.getElementById("lose-page").hidden = false;
    }
}

//start button
let startbutton = document.getElementById("start-button");
startbutton.addEventListener("click", reset);

//submit button
document.getElementById("submit").addEventListener("click", game);

//play again win-button;
let playagain1 = document.getElementById("playagainwin");
playagain1.addEventListener("click",home);

//Play again lose-button;
let playagain2 = document.getElementById("playagainlose");
playagain2.addEventListener("click",home);

//Enter key
document.body.addEventListener("keyup",(event)=>{
    if(event.keyCode==13){
        if(document.getElementById("start").hidden==false){
            reset();
        }
        else if(document.getElementById("play").hidden==false){
            game();
        }
        else{
            home();
        }
    }
})
