const beats = document.querySelectorAll("button.drum");

function annimation(thisKey) {
    pressedButton = document.querySelector("."+thisKey);
    pressedButton.classList.add("pressed");
    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 100);
}

function playSound(beatName) {
    annimation(beatName);
    var audio = new Audio("sounds/"+beatName+".mp3");
    audio.play();
}

beats.forEach(function(btn) {
    btn.addEventListener('click', function(){
        playSound(this.innerHTML)
    })
});

document.addEventListener("keydown", function(e) {
    playSound(e.key)
});
