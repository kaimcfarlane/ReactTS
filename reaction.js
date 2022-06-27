//What I want
//Random dots, green means click, red means lost points/time
//Song Lyrics, Random words, Book, WPM game
//Click Timer (either with music beat or just as fast as possible, can be space bar or mouse clickers)

listOpen = false;
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