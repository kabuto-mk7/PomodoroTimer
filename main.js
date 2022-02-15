var minutes = 25;
var seconds = "00";

var onBreak = false;

var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
    click.play();

    if(onBreak == false){
        minutes = 24;
        seconds = 59;
    }

    if(onBreak == true){
        minutes = 5;
        seconds = 59;
    }

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes -1;
        document.getElementById("minutes").innerHTML = minutes;

    }

    function secondsTimer(){
        seconds = seconds -1;
        document.getElementById("seconds").innerHTML = seconds;
        
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
}