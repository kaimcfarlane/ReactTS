var mobHelpText = "Click START, the button will start off red. Wait until the button turns green and CLICK it as quick as possible. \n $$$ Means your attempt was successful. \n NOTE: Wait until results display before playing again.";
var hitBox = document.getElementById("hitBox");
var hitBoxText = document.getElementById("hitBoxText")
var isClicked = false;
var appeared = false;
var timeElap = 0;
var end = false;
var canvasDiv = document.getElementById("canvasDiv");
var chartDisplayed = false;
var scoreText = document.getElementById("scoreText");
var delay = 0;
// var helpText = document.getElementById("helpText");
// var check = document.getElementById("check");

setInterval(() =>{
    if(screen.width <=450)
    {
        helpText.innerText = mobHelpText;
    }
})

function startGame() {
    if(end) {
        
        canvasDiv.style.display = "none";
        var helpText = document.getElementById("helpText");
        if(helpText.style.display == "block") {
            helpText.style.display = "none";
        }
        hitBoxText.style.marginLeft = "-47px";
        // hitBoxText.innerText = "Click!";
        if(screen.width <= 450)
        {
            hitBoxText.innerText = "Wait!";
            hitBoxText.style.marginLeft = "-60px"
        }
        else
        {
            hitBoxText.innerText = "Click!";
        }
        hitBox.style.opacity = "100%";
        hitBox.style.backgroundColor = "#ff8181";
        hitBox.style.borderBottom = "solid 3px #bd6565";
        timeElap = 0;
        scoreText.innerText = "Score";
        appeared = false;

        delay = randomPos(2,7) * 1000;
        setTimeout(function appear(){
            hitBox.style.backgroundColor = "rgb(93 240 101)";
            hitBox.style.borderBottom = "solid 3px #449449";
            if(screen.width <= 450)
            {
                hitBoxText.innerText = "Click!";
                hitBoxText.style.marginLeft = "-63px";
            }
            else
            {
                hitBoxText.innerText = "Release!";
                hitBoxText.style.marginLeft = "-118px";
            }
            
            // hitBoxText.innerText = "Click!";
            appeared = true;
            chartDisplayed = false;
        },delay)

        itv1 = setInterval(function time(){
            if(isClicked)
            {
                timeElap += 10;
                console.log(timeElap);
                clearInterval(itv1);
                scoreText.innerText = "SCORE: " + timeElap + " ms"
                setTimeout(function fadeIn(){
                    hitBox.style.opacity = "25%";
                    // hitBox.className =  "fadeout";
                    setTimeout(() => {
                        canvasDiv.style.display = "block";
                        chartDisplayed = true;
                        end = true;
                        isClicked = false;
                        startButton.innerHTML = "PLAY AGAIN";
                    }, 800)
                },1500)
            }
            else if(appeared)
            {
                timeElap += 10;
            }
        },10)
    }
    else {
        var helpText = document.getElementById("helpText");
        if(helpText.style.display == "block") {
            helpText.style.display = "none";
        }
        hitBox.style.display = "block";
        if(screen.width <= 450)
        {
            hitBoxText.innerText = "Wait!";
        }
        else
        {
            hitBoxText.innerText = "Click!";
        }
        
        delay = randomPos(2,7) * 1000;
        setTimeout(function appear(){
            hitBox.style.backgroundColor = "rgb(93 240 101)";
            hitBox.style.borderBottom = "solid 3px #449449";
            if(screen.width <= 450)
            {
                hitBoxText.innerText = "Click!";
                hitBoxText.style.marginLeft = "-63px";
            }
            else
            {
                hitBoxText.innerText = "Release!";
                hitBoxText.style.marginLeft = "-118px";
            }
            // hitBoxText.innerText = "Click!";
            appeared = true;
        },delay)

        var itv1 = setInterval(function time(){
            if(isClicked)
            {
                timeElap += 10;
                console.log(timeElap);
                clearInterval(itv1);
                scoreText.innerText = "SCORE: " + timeElap + " ms"
                setTimeout(function fadeIn(){
                    hitBox.style.opacity = "25%";
                    // hitBox.className =  "fadeout";
                    setTimeout(() => {
                        canvasDiv.style.display = "block";
                        chartDisplayed = true;
                        end = true;
                        isClicked = false;
                        startButton.innerHTML = "PLAY AGAIN";
                    }, 800)
                },1500)
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
    if(screen.width <= 450)
    {
        hitBoxText.style.marginLeft = "-29px";
    }
    else
    {
        hitBoxText.style.marginLeft = "-15px";
    }
    hitBoxText.innerText = "$$$";
}

function randomPos(min, max) {
    return Math.random() * (max - min) + min;
}

hitBox.addEventListener('focus', () => {
    hitBox.style.backgroundColor = "#ffe733";
  });

