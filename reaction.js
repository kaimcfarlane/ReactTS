//What I want
//Random dots, green means click, red means lost points/time
//Song Lyrics, Random words, Book, WPM game
//Click Timer (either with music beat or just as fast as possible, can be space bar or mouse clickers)


//Displays/hides button dropdown menu on click
var listOpen = false;
function openList() {
    var list = document.getElementById("gameSelect");
    if(listOpen) {
        list.style.display = "none";
        listOpen = false;
    }
    else {
        list.style.display = "block";
        listOpen = true;
    }
}

var helpTextVis = false
function revealHelpText() {
    console.log("success");
    var helpText = document.getElementById("helpText");
    if(helpTextVis) {
        helpText.style.display = "none";
        helpTextVis = false;
    }
    else {
        helpText.style.display = "block";
        helpTextVis = true;
    }
}