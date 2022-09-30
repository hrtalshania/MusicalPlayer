
let songs = [
    { info1: "Song 1", info2: "Artist 1", image: "assets1/1.png", audio: "assets1/1.mp3" },
    { info1: "Song 2", info2: "Artist 2", image: "assets1/2.png", audio: "assets1/2.mp3" },
    { info1: "Song 3", info2: "Artist 3", image: "assets1/3.png", audio: "assets1/3.mp3" }
];

let currentIndex = 0;

function back() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = 2;
    setDetails(currentIndex);
    random_bg_color();
}

function next() {
    currentIndex++;
    if (currentIndex > 2) currentIndex = 0;
    setDetails(currentIndex);
    random_bg_color();

}

function setDetails(index) {
    let audio = document.getElementById('audioControl');
    audio.pause();
    audio.currentTime = 0;

    document.getElementById('myaudio').setAttribute('src', songs[index].audio);
    document.getElementsByClassName('song_image')[0].setAttribute('src', songs[index].image);

    document.getElementsByClassName('info1')[0].innerHTML = songs[index].info1;
    document.getElementsByClassName('info2')[0].innerHTML = songs[index].info2;

    audio.load();
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
}