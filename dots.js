var timerVis = false
var timer = document.getElementById("time");
let startTime = 30;
function startGame() {
    if(timerVis) {
        timer.style.display = "none";
        timerVis = false;
        document.getElementsByClassName("dot")[0].style.display = "none";
    }
    else {
        timer.style.display = "block";
        timerVis = true;
        document.getElementsByClassName("dot")[0].style.display = "block";
        document.getElementsByClassName("dot")[0].style.right = randomPos(0,100) + "%";
        document.getElementsByClassName("dot")[0].style.top = randomPos(60,727) + "px";
        var itv1 = setInterval(function countDown() {
            startTime--;
            console.log("success " + startTime);
            timer.innerHTML = "TIME: " + startTime;
            if(startTime <= 0 || startTime < 1)
            {
                clearInterval(itv1);
            }
        }, 1000);
    }
}

var red = "#ff392f";
var green = "greenyellow";
var points = 0
var userScore = document.getElementById("userScore");
function score() { 
    //Issue is that color isn't being assinged any value ( just go to console and fix)
    // color = document.getElementsByClassName("dot")[0].style.background;

    if(document.getElementsByClassName("dot")[0].style.background == green)
    {
        points++;
        userScore.innerHTML = "SCORE: " + points;
    }
    else 
    {
        points--;
        userScore.innerHTML = "SCORE: " + points;
    }

    var num = Math.round(Math.random());
    if (num==0) {
        document.getElementsByClassName("dot")[0].style.background = green;
    }
    else {
        document.getElementsByClassName("dot")[0].style.background = red;
    }

    document.getElementsByClassName("dot")[0].style.right = randomPos(0,100) + "%";
    document.getElementsByClassName("dot")[0].style.top = randomPos(60,727) + "px";

    





    console.log("color is " + document.getElementsByClassName("dot")[0].style.background + " and score is " + points);
}

function randomPos(min, max) {
    return Math.random() * (max - min) + min;
}



