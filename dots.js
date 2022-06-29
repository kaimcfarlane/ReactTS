var timerVis = false
var timer = document.getElementById("time");
function startGame() {
    if(timerVis) {
        timer.style.display = "none";
        timerVis = false;
    }
    else {
        timer.style.display = "block";
        timerVis = true;
    }
}


let startTime = 30;
function countDown() {
    startTime--;
    console.log("success " + startTime);
    timer.innerHTML = "TIME: " + startTime;
}
setInterval(countDown, 1000);


