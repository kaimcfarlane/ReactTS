var timerVis = false
var timer = document.getElementById("time");
let startTime = 30;
var hitBox = document.getElementById("hitBox");
var hitBoxText = document.getElementById("hitBoxText")
var isClicked = false;
var appeared = false;
var timeElap = 0;
// var check = document.getElementById("check");
function startGame() {
    if(timerVis) {
        // timer.style.display = "none";
        // timerVis = false;
    }
    else {
        hitBox.style.display = "block";
        
        var delay = randomPos(2,7) * 1000;
        setTimeout(function appear(){
            hitBox.style.backgroundColor = "#51da51";
            hitBox.style.borderBottom = "solid 3px #449449";
            hitBoxText.innerText = "Click!";
            hitBoxText.style.marginLeft = "-47px";
            // hitBoxText.innerText = "Click!";
            appeared = true;
        },delay)

        var itv1 = setInterval(function time(){
            if(isClicked)
            {
                timeElap += 10;
                console.log(timeElap);
                clearInterval(itv1);
            }
            else if(appeared)
            {
                timeElap += 10;
            }
        },10)

        // timer.style.display = "block";
        // timerVis = true;
        // var itv1 = setInterval(function countDown() {
        //     startTime--;
        //     console.log("success " + startTime);
        //     timer.innerHTML = "TIME: " + startTime;
        //     if(startTime <= 0 || startTime < 1)
        //     {
        //         clearInterval(itv1);
        //     }
        // }, 1000);
    }
}


function hit() {
    console.log("HIT");
    isClicked = true;
    // hitBoxText.innerText = "$";
    hitBoxText.innerText = "$$$";
    hitBoxText.style.marginLeft = "-15px";
}

function randomPos(min, max) {
    return Math.random() * (max - min) + min;
}

