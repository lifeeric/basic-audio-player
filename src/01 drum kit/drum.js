// require('./index.html');
require('./scss/style.scss');
require('./sounds/boom.wav');
require('./sounds/clap.wav');
require('./sounds/hihat.wav');
require('./sounds/kick.wav');
require('./sounds/openhat.wav');
require('./sounds/ride.wav');
require('./sounds/snare.wav');
require('./sounds/tink.wav');
require('./sounds/tom.wav')



// // play sound

const playSound = (e) => {
    console.log(e.keyCode)

    // get the key and and track
    const key   = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio ) return;

    audio.currentTime = 0;
    audio.play();
    console.log(e.keyCode)
}



// when user start clicking key

window.addEventListener('keydown', playSound);
