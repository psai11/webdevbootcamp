let SequencePlayer = [], SequencePC = [];
let newColor, level = 0;
let colors = ["green", "red", "yellow", "blue"];
let started = false;

$(document).keydown(function() {
    if(!started) {
        addSequence();
        started = true;
    }
});

$(".btn").click(function() {
    let classColor = this.className.split(" ")[1];
    SequencePlayer.push(classColor);
    // console.log(classColor);
    animation(classColor);
    playAudio(classColor);

    checkWin(SequencePlayer.length - 1);
});

function checkWin(index) {
    // console.log(index);
    if(SequencePC[index] === SequencePlayer[index]) {
        if(SequencePlayer.length === SequencePC.length) {
            setTimeout(function() {
                addSequence();
            }, 1000);
        }
    }
    else {
        // console.log("here");
        playAudio("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over!!! Press any key to start again.");
        
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        

        startOver();
    }
}

function addSequence() {
    SequencePlayer = [];
    level++;
    $("h1").text("Level - "+level);
    newColor = colors[Math.floor(Math.random()*4)];
    // console.log(newColor);
    SequencePC.push(newColor); 
    $("."+newColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playAudio(newColor);
}

function startOver() {
    level = 0;
    SequencePC = [];
    started = false;
}

function animation(btnColor) {
    $("."+btnColor).addClass("pressed");
    setTimeout(function() {
        $("."+btnColor).removeClass("pressed");
    }, 100);
}

function playAudio(audioFile) {
    var audio = new Audio("sounds/"+audioFile+".mp3");
    audio.play();
}
