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
var gameChoiceBtn = document.getElementById("gameChoiceBtn");
var gameSelect = document.getElementById("gameSelect");
// var dif = "";

// function changeBtnColor() {
//     if(dif=="easy") {
//         gameChoiceBtn.style.background = "#4ec864";
//     }
//     else if(dif=="med") {
//         gameChoiceBtn.style.background = "orange";
//     }
//     else {
//         gameChoiceBtn.style.background = "#c84e4e";
//     }
// }


function chooseDifEasy() {
    // dif ="easy";
    background.style.background = "#4ec864";
    gameChoiceBtn.style.background = "#4ec864";
    // gameChoiceBtn.addEventListener("mouseover", changeBtnColor);
}
function chooseDifMed() {
    // dif = "med";
    background.style.background = "orange";
    gameChoiceBtn.style.background = "orange";
    // gameChoiceBtn.addEventListener("mouseover", changeBtnColor);
}
function chooseDifHard() {
    // dif = "hard";
    background.style.background = "#c84e4e";
    gameChoiceBtn.style.background = "#c84e4e";
    // gameChoiceBtn.addEventListener("mouseover", changeBtnColor);
}

var isMusic = true;
var floatWords = document.getElementById('floatyCircles').getElementsByTagName('li');
var floatItem = document.getElementsByClassName("word");
const wordArr1 = ["String", "Listen", "Keyboard", "Cloud", "Piano", "Headset", "Note", "Sound", "Volume", "Lyric"];
const wordArr2 = ["Apple", "Banana", "Carrot", "Diamond", "Earth", "Fire", "Gorilla", "Helmet", "Iceberg", "Jackal"];


function gameModeSelect(){
    if(isMusic) {
        isMusic = false;
        for(var i=0;i<10;i++) {
            var img = document.getElementsByClassName("img")[i];
            // floatyWords.fontSize = 0;
            img.style.display = "none";
            var img2 = document.getElementsByClassName("img2")[i];
            img2.style.display = "block";
            floatItem[i].innerHTML = wordArr2[i];
        }

    }
    else {
        isMusic = true;
        
        for(var i=0;i<10;i++) {
            var img = document.getElementsByClassName("img")[i];
            console.log(floatWords);
            img.style.display = "block";
            var img2 = document.getElementsByClassName("img2")[i];
            img2.style.display = "none";
            floatItem[i].innerHTML = wordArr1[i];
        }
    }
    
}

//add new img to apple in html that is circular or block, make text dissapear when imgs on, we start on music so imgs firts then text;

// get cricle li from index.css for this html page and make background nothing.
//#4ec864, #c84e4e, #2d81c7