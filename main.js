var minutes = 25;
var seconds = "00";
var onBreak = false;
var isPaused = false;
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");
var currMins = minutes;
var currSecs = seconds;


function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function pause(){
    click.play();
    currMins = minutes;
    currSecs = seconds;
    document.getElementById("done").innerHTML = "Paused the timer!";
    document.getElementById("done").classList.add("show_message");
    isPaused = true;
    secsDelay.pause();
    minDelay.pause();
}

function setTime(){
    if(isPaused == true){
        minutes = currMins;
        seconds = currSecs;
        document.getElementById("done").innerHTML = "Unpaused the timer!";
        document.getElementById("done").classList.add("show_message");
        isPaused = false;
        secsDelay.resume;
        minDelay.resume;
    }
    if(onBreak == true && isPaused == false){
        minutes = 4;
        seconds = 59;
    }
    if(onBreak == false && isPaused == false){
        minutes = 24;
        seconds = 59;
    }
}

function decreaseMins(){
    if(isPaused==true){
        document.getElementById("minutes").innerHTML = currMins;
        clearInterval(minutes_interval);
        minutes_interval = "0";
        return;
    }else{
        minutes = minutes -1;
        document.getElementById("minutes").innerHTML = minutes;
    }

}

function decreaseSecs(){
    if(isPaused==true){
        document.getElementById("seconds").innerHTML = currSecs;
        seconds_interval = "0";
        clearInterval(seconds_interval);
        return;
    }else{
        seconds = seconds -1;
        document.getElementById("seconds").innerHTML = seconds;
        secondsTimer();
    }
    
    
}

function secondsTimer(){
    if(seconds <= 0){
        if(minutes <= 0){
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);
            if(onBreak == false){
                document.getElementById("done").innerHTML = "Session Complete! take a 5 minute break!";
                document.getElementById("done").classList.add("show_message");
            }
            if(onBreak == true){
                document.getElementById("done").innerHTML = "Break complete! Let's start a new session!";
                document.getElementById("done").classList.add("show_message");
            }
            bell.play();
            if(onBreak == false){
                onBreak = true;
                start();
            }else{
                onBreak = false;
                start();
            }
            
        }
        seconds = 60;
        
    }

}

function start(){
    click.play();

    setTime();
    
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(decreaseMins, 60000);
    var seconds_interval = setInterval(decreaseSecs, 1000);
}