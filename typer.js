var timerVis = false
var timer = document.getElementById("time");
let startTime = 30;
function startGame() {
    if(timerVis) {
        timer.style.display = "none";
        timerVis = false;
    }
    else {
        timer.style.display = "block";
        timerVis = true;
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

var easyMode = document.getElementsByClassName("difficultyChoice")[0];
var medMode = document.getElementsByClassName("difficultyChoice")[1];
var hardMode = document.getElementsByClassName("difficultyChoice")[2];
var background = document.getElementById("background");
function chooseDifEasy() {
    background.style.background = "#4ec864";
}
function chooseDifMed() {
    background.style.background = "orange";
}
function chooseDifHard() {
    background.style.background = "#c84e4e"
}

var isMusic = true;
var floatWords = document.getElementById('floatyCircles').getElementsByTagName('li');
function gameModeSelect(){
    if(isMusic) {
        isMusic = false;

    }
    
}

floatWords.style.background = "";
// get cricle li from index.css for this html page and make background nothing.
//#4ec864, #c84e4e, #2d81c7