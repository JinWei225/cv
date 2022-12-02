var numberOfButton = document.querySelectorAll(".drum").length;
for (let i = 0; i<numberOfButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
        case "s":
            var snare = new Audio("snare.mp3");
            snare.play();
        case "d":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
        case "j":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
        case "k":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
        case "l":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
        default:
            break;
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}
