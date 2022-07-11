//instance variables
var timerVis = false
var timer = document.getElementById("time");
let startTime = 60;
var textDisplay = document.getElementById("genText");
var inputText = document.getElementById("typeBox");
var score = 0;
var charTyped = 0;
var wordsTyped = 0;
var docScore = document.getElementById("Score");
var text = "";
var opaqueBackground = document.getElementById("typeSpace");
var checkbox = document.getElementById("checkbox");
var LPM = document.getElementById("LPM");
var WPM = document.getElementById("WPM");

//runs game when start button clicked and resets game when button clicked again
function startGame() {
    if(timerVis) {
        timer.style.display = "none";
        timerVis = false;
    }
    if(startTime<=0){
        var helpText = document.getElementById("helpText");
        if(helpText.style.display == "block") {
            helpText.style.display = "none";
        }
        i=0;
        score = 0;
        textDisplay.innerText = "";
        inputText.style.display = "inline-block";
        LPM.innerText = "LPM";
        WPM.innerText = "WPM";
        startButton.innerHTML = "START";
        startTime = 60;
        timer.style.display = "block";
        timerVis = true;
        text = getRandomText();
        returnSnippet(text);
        var itv1 = setInterval(function countDown() {
            startTime--;
            console.log("success " + startTime);
            timer.innerHTML = "TIME: " + startTime;
            if(startTime <= 0 || startTime < 1)
            {
                clearInterval(itv1);
                textDisplay.innerText = "TIMES UP!";
                inputText.style.display = "none";
                LPM.innerText = "LPM " + charTyped;
                WPM.innerText = "WPM " + wordsTyped;
                startButton.innerHTML = "PLAY AGAIN";
            }
        }, 1000);
    }
    else {
        timer.style.display = "block";
        timerVis = true;
        text =  getRandomText();
        returnSnippet(text);
        // textDisplay.innerText = returnSnippet(text);
        
        var itv1 = setInterval(function countDown() {
            startTime--;
            // console.log("success " + startTime);
            timer.innerHTML = "TIME: " + startTime;
            if(startTime == 1){
                endWordCount();
                console.log(wordsTyped);
            }
            if(startTime <= 0 || startTime < 1)
            {
                clearInterval(itv1);
                textDisplay.innerText = "TIMES UP!";
                inputText.style.display = "none";
                LPM.innerText = "LPM " + charTyped;
                WPM.innerText = "WPM " + wordsTyped;
                startButton.innerHTML = "PLAY AGAIN";
            }
        }, 1000);
    }
}

//iterates through each input and displayed character every time the user types
//adds green or red to displayed text as well as keeps score
var typed = false;
var x=0;
inputText.addEventListener("input", () => {
    var disText = textDisplay.querySelectorAll('span');
    var inputCharacters = inputText.value.split('');
    disText.forEach((disCharacter, pos) => {
        var inputChar = inputCharacters[pos];
        if(inputChar == null)
        {
            disCharacter.classList.remove("correct");
            disCharacter.classList.remove("incorrect");
            typed = false;
        }
        else if(inputChar == disCharacter.innerText)
        {
            disCharacter.classList.add("correct");
            disCharacter.classList.remove("incorrect");
            score++;
            console.log(score);
            typed = true;
        }
        else 
        {
            disCharacter.classList.remove("correct");
            disCharacter.classList.add("incorrect");
            score--;
            typed = true;
            console.log(score);
        }
        docScore.innerText = "SCORE " + score;
    })
    if (typed) 
    {
        returnSnippet(text);
        console.log(score);
        disText.forEach((disCharacter, pos) => {
            var inputChar = inputCharacters[pos];
            if(inputChar == " ") 
            {
                wordsTyped++;
                console.log(wordsTyped + " words have been typed");
            }
        })
    }
    charTyped++;

    console.log("changed");
})

function endWordCount() {
    var disText = textDisplay.querySelectorAll('span');
    var inputCharacters = inputText.value.split('');
    disText.forEach((disCharacter, pos) => {
        var inputChar = inputCharacters[pos];
        if(inputChar == " ") 
        {
            wordsTyped++;
            console.log(wordsTyped + " words have been typed");
        }
    })
}


//returns snippet of text from whole text and keeps a minimum number to keep track of where text it is
var i=0;
function returnSnippet(text) {
    var newText = text.split(' ').slice(i, i+=20).join(' ');
    i+=20;
    textDisplay.innerText = null;
    inputText.value = null;
    var periodFound = false;
    newText.split('').forEach(character => {
        const newSpan = document.createElement('span');
        newSpan.innerText = character;
        if(periodFound)
        {
            periodFound = false;
            newSpan.style.display = "inline-block";
            newSpan.style.width = "5px";
        }
        if(character == ".")
        {
            periodFound = true;
        }
        textDisplay.appendChild(newSpan);
    })
}

var light=true;
function lightMode() {
    if(light)
    {
        opaqueBackground.style.backgroundColor =  "rgb(0 0 0 / 33%)";
        light = false;
    }
    else 
    {
        opaqueBackground.style.backgroundColor = "rgba(255, 255, 255, 0.358)";
        light = true;
    }
}

var easyMode = document.getElementsByClassName("difficultyChoice")[0];
var medMode = document.getElementsByClassName("difficultyChoice")[1];
var hardMode = document.getElementsByClassName("difficultyChoice")[2];
var background = document.getElementById("background");
var gameChoiceBtn = document.getElementById("gameChoiceBtn");
var gameSelect = document.getElementById("gameSelect");
var dif = "hard";

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


//keeps track of diffcutly selected
function chooseDifEasy() {
    dif ="easy";
    background.style.background = "#4ec864";
    gameChoiceBtn.style.background = "#4ec864";
    // opaqueBackground.style.backgroundColor =  "rgb(0 0 0 / 33%)";
    // gameChoiceBtn.addEventListener("mouseover", changeBtnColor);
}
function chooseDifMed() {
    dif = "med";
    background.style.background = "orange";
    gameChoiceBtn.style.background = "orange";
    // gameChoiceBtn.addEventListener("mouseover", changeBtnColor);
}
function chooseDifHard() {
    dif = "hard";
    background.style.background = "#c84e4e";
    gameChoiceBtn.style.background = "#c84e4e";
    // gameChoiceBtn.addEventListener("mouseover", changeBtnColor);
}

var isMusic = true;
var floatWords = document.getElementById('floatyCircles').getElementsByTagName('li');
var floatItem = document.getElementsByClassName("word");
const wordArr1 = ["String", "Listen", "Keyboard", "Cloud", "Piano", "Headset", "Note", "Sound", "Volume", "Lyric"];
const wordArr2 = ["Apple", "Banana", "Carrot", "Diamond", "Earth", "Fire", "Gorilla", "Helmet", "Iceberg", "Jackal"];

//keeps track of game mode selected
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


//gets randome Text based on game modes from the arrays below.
function getRandomText() {
    if(dif=="easy" && isMusic) {
        return easySongs[randomNum(0,2)];
    }
    else if(dif=="med" && isMusic) {
        return medSongs[randomNum(0,2)];
    }
    else if(dif=="hard" && isMusic) {
        return hardSongs[randomNum(0,2)];
    }


    // else if(dif=="easy" && !isMusic) {

    // }
    // else if(dif=="med" && !isMusic) {
        
    // }
    // else if(dif=="hard" && !isMusic) {
        
    // }

}//returns ranfom number between a range
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const easySongs = ["I've never seen a diamond in the flesh. \
I cut my teeth on wedding rings in the movies. \
And I'm not proud of my address. \
In a torn up town, no postcode envy. \
But every song's like. \
Gold teeth, Grey Goose, trippin' in the bathroom. \
Bloodstains, ball gowns, trashin' the hotel room. \
We don't care. \
We're driving Cadillacs in our dreams .\
But everybody's like. \
Cristal, Maybach, diamonds on your timepiece. \
Jet planes, islands, tigers on a gold leash. \
We don't care. \
We aren't caught up in your love affair. \
And we'll never be royals (royals). \
It don't run in our blood. \
That kind of luxe just ain't for us. \
We crave a different kind of buzz. \
Let me be your ruler (ruler). \
You can call me queen bee. \
And baby, I'll rule (I'll rule, I'll rule, I'll rule). \
Let me live that fantasy.",

"Shine bright like a diamond. \
Shine bright like a diamond. \
Find light in the beautiful sea. \
I choose to be happy. \
You and I, you and I. \
We're like diamonds in the sky. \
You're a shooting star I see. \
A vision of ecstasy. \
When you hold me, I'm alive. \
We're like diamonds in the sky. \
I knew that we'd become one right away. \
Oh, right away. \
At first sight I felt the energy of sun rays. \
I saw the life inside your eyes. \
So shine bright, tonight, you and I. \
We're beautiful like diamonds in the sky. \
Eye to eye, so alive. \
We're beautiful like diamonds in the sky.",

"Right, my yiy just changed. \
You just buzzed the front gate. \
I thank God you came. \
How many more days could I wait?. \
I made plans with you. \
And I won't let em fall through. \
I, I, I, I, I. \
I think I'd lie for you. \
I think I'd die for you. \
Jodeci Cry For You. \
Do things when you want me to. \
Like controlla, controlla. \
Yeah, like controlla, controlla. \
Yeah, okay, you like it. \
When I get, aggressive, tell you to. \
Go slower, go faster. \
Like controlla, controlla. \
Yeah, like controlla, controlla."

];

const medSongs = ["Sometimes, all I think about is you. \
Late nights in the middle of June. \
Heat waves been fakin’ me out. \
Can’t make you happier now. \
Sometimes, all I think about is you. \
Late nights in the middle of June. \
Heat waves been fakin’ me out. \
Can’t make you happier now. \
Usually I put somethin’ on TV. \
So we never think about you and me. \
But today I see our reflections clearly. \
In Hollywood, layin’ on the screen. \
You just need a better life than this. \
You need somethin’ I can never give. \
Fake water all across the road. \
It’s gone now, the night has come, but. \
Sometimes all I think about is you. \
Late nights in the middle of June. \
Heat waves been fakin’ me out. \
Can’t make you happier now.",

"Turn up the radio. \
Blast your stereo. \
Right now. \
This joint is fizzlin. \
It's sizzlin. \
Right. \
Yo check this out right here. \
Dude wanna hate on us (dude). \
Dude need to ease on up (dude). \
Dude wanna act on up. \
But dude get shut like flava shut (down). \
Chick say she ain't down. \
But chick backstage when we in town (ha). \
She like man on drum (boom). \
She wanna hit n' run (err). \
Yeah, that's the speed. \
That's who we do. \
That's who we be. \
B-L-A-C-K E-Y-E-D P to the E. \
Then the A to the S. \
When we play you shake your ass. \
Shake it, shake it, shake it girl. \
Make sure you don't break it, girl. \
Cause we gonna.",

"I love the way you walk into the room. \
Body shining lightin' up the place. \
And when you talk, everybody stop. \
'Cause they know you know just what you sayin. \
The way that you protect your friends. \
Baby I respect you for that. \
And when you grow you'll take everyone you love along. \
I love that stuff. \
Don't fly me away. \
Don't need to buy a diamond key to unlock my heart. \
You shelter my soul, you're my fire when I'm cold. \
I want you to know. \
You had me at hello. \
Hello, hello. \
'Cause you had me at hello. \
Hello, hello. \
'Cause it was many years ago. \
Baby when you stole my cool. \
'Cause you had me at hello. \
Hello, hello. \
I get so excited when you travel with me. \
Baby while I'm on my grind. \
And never will I ever let my hustle. \
Come between me and my family time and. \
You keep me humble, I like this type. \
'Cause you know there's more to life. \
And if I need ya, you will be here. \
You will make the sacrifice."
];

const hardSongs = ["Sí, sabes que ya llevo un rato mirándote. \
Tengo que bailar contigo hoy. \
Vi que tu mirada ya estaba llamándome. \
Muéstrame el camino que yo voy. \
Oh, tú, tú eres el imán y yo soy el metal. \
Me voy acercando y voy armando el plan \
Solo con pensarlo se acelera el pulso. \
Ya, ya me estás gustando más de lo normal \
Todos mis sentidos van pidiendo más. \
Esto hay que tomarlo sin ningún apuro \
Despacito. \
Quiero respirar tu cuello despacito. \
Deja que te diga cosas al oído. \
Para que te acuerdes si no estás conmigo. \
Despacito.", 

"This flippity dippity-hippity hip-hop. \
You don't really wanna get into a pushin' match. \
With this rappity brat, packin' a MAC in the back of the Ac'. \
Backpack rap crap, yap-yap, yackety-yack. \
And at the exact same time, I attempt these lyrical acrobat stunts while I'm practicin' that. \
I'll still be able to break a fricken' table. \
Over the back of a couple of maggots and crack it in half. \
Only realized it was ironic, I was signed to Aftermath after the fact. \
How could I not blow? All I do is drop bombs. \
Feel my wrath of attack \
Rappers are havin' a rough time period, here's a maxi pad. \
It's actually disastrously bad for the wack. \
While I'm masterfully constructing this masterpièce. \
'Cause I'm beginnin' to feel like a Rap God, Rap God. \
All my people from the front to the back nod, back nod. \
Now, who thinks their arms are long enough to slap box, slap box? \
Let me show you maintainin' this shit ain't that hard, that hard. \
Everybody want the key and the secret to rap immortality like Ι have got.",

"Babylon position the queen and set the pawn.   \
And start transform like Deceptacon. \
Anytime delegates have a discrepence. \
Well a bare tension with some long weapons. \
Night vision upon the attack mission. \
Colaliton of folly-ticians get switch on. \
If you look in the face of the newly born. \
The newly born face malnutrition. \
Suspicion to what is them ambition. \
Total destruction start to ignition. \
And the world still a fight over religion. \
Everyone have a right to a decision. \
Superstition the people reflect upon, something nuh right. \
I man suspect a con. \
Cause them lost inna darkness beyond. \
And none shall escape except the ones, who. \
Exodus with no question, \
Better put on your khaki uniform."
]

const easyWords = [""];
const medWords = [""];
const hardWords = [""];




//add new img to apple in html that is circular or block, make text dissapear when imgs on, we start on music so imgs firts then text;

// get cricle li from index.css for this html page and make background nothing.
//#4ec864, #c84e4e, #2d81c7