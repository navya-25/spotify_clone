console.log("Welcome to Spotify");


let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
//let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [

    {songName: "Kabhi Kabhi Aditi",filePath:"songs/1.mp3", coverPath:"pics/kb.jpg"},
    {songName: "Perfect",filePath:"songs/2.mp3", coverPath:"pics/pf.jpg"},
    {songName: "Shukran Allah",filePath:"songs/3.mp3", coverPath:"pics/ska.jpg"},
    {songName: "Tum Se Hi",filePath:"songs/4.mp3", coverPath:"pics/tsh.jpg"},
    {songName: "Akhiyaan",filePath:"songs/5.mp3", coverPath:"pics/ak.jpg"},
    {songName: "Ajab Si",filePath:"songs/6.mp3", coverPath:"pics/ajb.jpg"},
    {songName: "Subhanallah",filePath:"songs/7.mp3", coverPath:"pics/sub.jpg"},
    {songName: "Zehnaseeb",filePath:"songs/8.mp3", coverPath:"pics/zsnb.jpg"},
    {songName: "Thunder",filePath:"songs/9.mp3", coverPath:"pics/thunder.jpg"},
    {songName: "Barbaadiyaan",filePath:"songs/10.mp3", coverPath:"pics/bd.jpg"},
]
    
        


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0 ;
    }

    else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

    
