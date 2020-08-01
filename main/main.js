var sound = new Audio("main/AUDIO/aud1.mp3");

function playAudio(){    
    sound.play(); 
    document.getElementById("aud_pause").style.visibility="hidden";  
    document.getElementById("aud_play").style.visibility="visible";  
}

function pauseAudio(){
    sound.pause();
    document.getElementById("aud_pause").style.visibility="visible";  
    document.getElementById("aud_play").style.visibility="hidden";  
}