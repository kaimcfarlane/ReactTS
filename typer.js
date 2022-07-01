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