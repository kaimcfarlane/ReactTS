var timerVis = false
var timer = document.getElementById("time");
let startTime = 30;
var startButton = document.getElementById("startButton");
function startGame() {
    if(timerVis) {
        timer.style.display = "none";
        timerVis = false;
        document.getElementsByClassName("dot")[0].style.display = "none";
    }
    if(startTime<=0) {
        
        var helpText = document.getElementById("helpText");
        if(helpText.style.display == "block") {
            helpText.style.display = "none";
        }
        else {
            helpText.style.display = "block";
        }


        startButton.innerHTML = "START";
        startTime = 30;
        timer.style.display = "block";
        timerVis = true;
        document.getElementsByClassName("dot")[0].style.display = "block";
        document.getElementsByClassName("dot")[0].style.right = randomPos(0,93) + "%";
        document.getElementsByClassName("dot")[0].style.top = randomPos(100,600) + "px";
        var itv1 = setInterval(function countDown() {
            startTime--;
            console.log("success " + startTime);
            timer.innerHTML = "TIME: " + startTime;
            if(startTime <= 0 || startTime < 1)
            {
                clearInterval(itv1);
                document.getElementsByClassName("dot")[0].style.display = "none";
                startButton.innerHTML = "PLAY AGAIN";
            }
        }, 1000);
        var space = 2500;
        function start()
        {
        var spawnIncreaseTo = setTimeout(function() {
            if (space>=1000)
            {
                space -= 160;
                setSpawn();
                start();
            }
            else if (space>=350){
                space -=50;
                setSpawn();
                start();
            }
            else if(startTime<=0) {
                clearTimeout(spawnIncreaseTo);
            }
            else {
                setSpawn();
                start();
            }
        }, space);
        }
        start();
    }
    else {
        var helpText = document.getElementById("helpText");
        if(helpText.style.display == "block") {
            helpText.style.display = "none";
        }
        else {
            helpText.style.display = "block";
        }
        startButton.innerHTML = "START";
        timer.style.display = "block";
        timerVis = true;
        document.getElementsByClassName("dot")[0].style.display = "block";
        document.getElementsByClassName("dot")[0].style.right = randomPos(0,93) + "%";
        document.getElementsByClassName("dot")[0].style.top = randomPos(100,600) + "px";
        var itv1 = setInterval(function countDown() {
            startTime--;
            console.log("success " + startTime);
            timer.innerHTML = "TIME: " + startTime;
            if(startTime <= 0 || startTime < 1)
            {
                clearInterval(itv1);
                document.getElementsByClassName("dot")[0].style.display = "none";
                startButton.innerHTML = "PLAY AGAIN";
            }

        }, 1000);
        var space = 2500;
        function start()
        {
        var spawnIncreaseTo = setTimeout(function() {
            if (space>=1000)
            {
                space -= 160;
                setSpawn();
                start();
            }
            else if (space>=350){
                space -=50;
                setSpawn();
                start();
            }
            else if (startTime<=0) {
                clearTimeout(spawnIncreaseTo);
            }
            else{
                setSpawn();
                start();
            }
        }, space);
        }
        start();

    }
}

function setSpawn() {
    document.getElementsByClassName("dot")[0].style.right = randomPos(0,93) + "%";
    document.getElementsByClassName("dot")[0].style.top = randomPos(100,600) + "px";
    var num = Math.round(Math.random());
    if (num==0) {
        document.getElementsByClassName("dot")[0].style.background = green;
    }
    else {
        document.getElementsByClassName("dot")[0].style.background = red;
    }
}

var red = "#ff392f";
var green = "greenyellow";
var points = 0
var userScore = document.getElementById("userScore");
document.getElementsByClassName("dot")[0].style.background = green;
function score() { 
    //Issue is that color isn't being assinged any value ( just go to console and fix)
    // color = document.getElementsByClassName("dot")[0].style.background;

    if(document.getElementsByClassName("dot")[0].style.background == green )
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

    document.getElementsByClassName("dot")[0].style.right = randomPos(0,93) + "%";
    document.getElementsByClassName("dot")[0].style.top = randomPos(100,600) + "px";
    console.log("color is " + document.getElementsByClassName("dot")[0].style.background + " and score is " + points);
}

function randomPos(min, max) {
    return Math.random() * (max - min) + min;
}

// function getRandomSpawn() {
//     var pos = [randomPos(0,96) + "%", randomPos(100,727) + "px"]
//     return pos;
// }



