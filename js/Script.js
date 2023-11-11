const nmuisica = document.getElementById("song-name");
const song = document.getElementsByClassName("audio");
const play = document.getElementById("pla");
const previous = document.getElementsByClassName('previous');
const next = document.getElementsByClassName('next');


const CharaGill = {
    nmuisica : 'Determination - Chara',
    file: 'Chara(Glitchtale)-Determinação_Acústico_GiLL'
};

let isPlaying = false;
const playlist = CharaGill;
let sortedplaylist = [...playlist];
let index = 1;

function updateSong(){
    song.src= `/musics/${sortedplaylist[index].file}.mp3`;
    nmuisica.innerText = sortedplaylist[index].nmuisica;
}

function playsong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true
}

function pausesong(){
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    song.pause();
    isPlaying = false
}

function previousSong(){
    
    if(index === 0){
        index = sortedplaylist.length - 1;
        
    }
    else{
        index -= 1
    }
    updateSong();
    playsong();
}

function nextSong(){
    if(index === 3){
        index = 0;
    }
    else{
        index += 1
    }
    updateSong();
    playsong();
}

function Decider(){
    alert("ola");
    if (isPlaying === true){
       pausesong();
    }
    else{
       playsong()
    }
}

updateSong();
play.addEventListener("click", playsong);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);