// File Including of the Project
require("./index.html");
require('./main.scss');
require('../node_modules/materialize-css/sass/materialize.scss');
// require('./images/rooftop.jpg');
require('./images/Play.png');
require('./images/stop.png');
require('./images/pause.png');
require('./images/vol.png');
require('./sounds/ADELEN.mp3');


// when the initial HTML fires



// get the default player element
let player;

const startPlaying = () => {
    player = document.getElementsByClassName('music_player')[0];
    player.controls = false;
}


const play_aud = () => {
    player.play();
    player.loop = true;
}

const pause_aud = () => {
    player.pause();
}

const stop_aud = () => {
    player.pause();
    player.currentTime = 0;
}

const change_vol = () => {
    player.volume = document.getElementById('vol').value;
}

window.play_aud = play_aud;
window.pause_aud = pause_aud;
window.stop_aud  = stop_aud;
window.change_vol = change_vol;

window.addEventListener('DOMContentLoaded', startPlaying());


let audioEl = document.getElementById('audio');
let ctrl = document.getElementById('audioControl');

audioEl.addEventListener('loadedmetadata', () => {

    let duration = audioEl.duration;
    let currentTime = audioEl.currentTime;

    document.getElementById('duration').innerHTML = elapsedTime(duration);
    document.getElementById('current-time').innerHTML = elapsedTime(currentTime);
    console.log('fsd');
} );

const elapsedTime = (totalSeconds) => {

    let sec = Math.floor(totalSeconds % 60);
    let min = Math.floor(totalSeconds / 60);

    if( sec < 10 )
        sec = "0" + sec;

    return min + ":" + sec;
}

const togglePlaying = () => {

    let play = ctrl.innerHTML === "Play";

    if(play)
    {ctrl.innerHTML = "Pause"; audioEl.play()}
    else
    { ctrl.innerHTML = "Play"; audioEl.pause();}
}

const updateBar = () => {

    let cur = audioEl.currentTime;
    let dur = audioEl.duration;

    if( cur == dur )
    {
        ctrl.innerHTML = "Play";
    }

    document.getElementById('current-time').innerHTML = elapsedTime(cur);

    let per = cur / dur;
    let progress = (400 * per);
    document.getElementsByClassName('prog-bar')[0].style.width = progress +"px";
    console.log(Math.floor(progress) + "%");
}

window.updateBar = updateBar;
window.togglePlaying = togglePlaying;