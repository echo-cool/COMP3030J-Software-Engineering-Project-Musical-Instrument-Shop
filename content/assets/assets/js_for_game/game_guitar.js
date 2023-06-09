class Guitar {
    constructor(context, buffer) {
        this.context = context;
        this.buffer = buffer;
    }

    setup() {
        this.gainNode = this.context.createGain();
        this.source = this.context.createBufferSource();
        this.source.buffer = this.buffer;
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);

        this.gainNode.gain.setValueAtTime(0.8, context.currentTime);
    }

    play() {
        this.setup();
        this.source.start(context.currentTime);
    }

    stop() {
        var ct = this.context.currentTime + 0.5;
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
        this.source.stop(ct);
    }

}

class Buffer {

    constructor(context, urls) {
        this.context = context;
        this.urls = urls;
        this.buffer = [];
    }

    loadSound(url, index) {
        let request = new XMLHttpRequest();
        request.open('get', url, true);
        request.responseType = 'arraybuffer';
        let thisBuffer = this;
        request.onload = function () {
            // Safari doesn't support promise based syntax
            thisBuffer.context
                .decodeAudioData(request.response, function (buffer) {
                    thisBuffer.buffer[index] = buffer;
                    // updateProgress(thisBuffer.urls.length);
                    if (index === thisBuffer.urls.length - 1) {
                        thisBuffer.loaded();
                    }
                });
        };
        request.send();
    };

    getBuffer() {
        this.urls.forEach((url, index) => {
            this.loadSound(url, index);
        })
    }

    loaded() {
        document.querySelector('.notes').style.height = "auto";
        document.querySelector('.notes').style.opacity = 1;
        loaded = true;
    }

    getSound(index) {
        return this.buffer[index];
    }

}

let iteration = 0;

let guitar = null;
let preset = 0;
let loaded = false;

function playGuitar() {
    let index = parseInt(this.dataset.note) + preset;
    guitar = new Guitar(context, buffer.getSound(index));
    guitar.play();
}

function stopGuitar() {
    guitar.stop();
}

let context = new (window.AudioContext || window.webkitAudioContext)();


let sounds = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G4.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A4.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D%236.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C7.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D7.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G4.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A4.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_E5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A5.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D%236.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_E6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_G6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_A6.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_C7.mp3',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/d_D7.mp3'
];


let buffer = new Buffer(context, sounds);
let guitarSound = buffer.getBuffer();

let buttons = document.querySelectorAll('.notes .note');
buttons.forEach(button => {
    button.addEventListener('mouseenter', playGuitar.bind(button));
    button.addEventListener('mouseleave', stopGuitar);
})


// let audio = document.querySelector('audio');
// let circle = document.querySelector('.circle');

// audio.addEventListener('pause', pauseTrack);
// audio.addEventListener('play', playTrack);

// function play_start() {
//     // audio.pause();
//     // pauseTrack();
// }


// circle.addEventListener('click', () => {
//     preset = (preset === 0) ? 15 : 0;
//     circle.classList.toggle('rock');
// })
// audio.addEventListener('ended', () => {
//     pauseTrack();
// });

// function playTrack() {
//     play.querySelector('.pause-icon').style.display = "block";
//     play.querySelector('.play-icon').style.display = "none";
// }
//
// function pauseTrack() {
//     play.querySelector('.pause-icon').style.display = "none";
//     play.querySelector('.play-icon').style.display = "block";
// }


let audio_embed = $(".guitar-audio-player");

function load_guitar_example1() {
    // guitar = new Guitar(context, buffer.getSound(2));
    // audio_embed.attr("src", sounds[0]);
}

function load_guitar_example2() {
    // guitar = new Guitar(context, buffer.getSound(4));
    // audio_embed.attr("src", sounds[1]);
}

function play_start() {
    $(".show-style-guitar").toggle("wrapper-hidden");
    console.log("start", audio_embed.attr("src"), audio_embed.paused);
    audio_embed[0].play();
}


function play_stop() {
    $(".show-style-guitar").toggle("wrapper-hidden");
    console.log("stop", audio_embed.attr("src"), audio_embed.paused);
    if (!audio_embed[0].paused) {
        audio_embed[0].pause();
    }
}



