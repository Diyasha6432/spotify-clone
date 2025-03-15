console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('masterPlay');
let songs =[
   {songName: "LEVITATING", filePath: "song.mp3"},
   {songName: "LEVITATING", filePath: "song.mp3"},
   {songName: "LEVITATING", filePath: "song.mp3"},
   {songName: "LEVITATING", filePath: "song.mp3"},
   {songName: "LEVITATING", filePath: "song.mp3"},
   {songName: "LEVITATING", filePath: "song.mp3"},
]
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
     masterPlay.src=(masterPlay.src.includes('playcircle.png'))?'pause.png':'playcircle.png';
})
//Listens to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdeate')
    //update seekbar
})