// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        setKeyCode('Clap', 'A');

    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        setKeyCode('Hihat', 'S');

    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        setKeyCode('Kick', 'D');

    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        setKeyCode('Openhat', 'F');

    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        setKeyCode('Boom', 'G');

    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        setKeyCode('Ride', 'H');

    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        setKeyCode('Snare', 'J');

    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        setKeyCode('Tom', 'K');

    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        setKeyCode('Tink', 'L');

    }
}

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}

function setKeyCode(name, code) {
    event.keyCode == code;
    let audio = document.getElementById(name);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(name).classList.add("playing");
    document.getElementById(name).addEventListener('transitionend', removePlaying);
}
