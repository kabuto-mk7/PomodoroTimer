var minutes;
var seconds;
var loop;

var onBreak = false;
var isPaused = false;
var launched = false;
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

init();

function init()
{
	minutes = 25;
	seconds = "00";
	document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function pause(){
    click.play();
    document.getElementById("done").innerHTML = "Paused the timer!";
    document.getElementById("done").classList.add("show_message");
	clearInterval(loop);
}

function setTime(){
    if(onBreak == true)
	{
        minutes = 5;
        seconds = "00";
    }
    else
	{
        minutes = 25;
        seconds = "00";
    }
}

function breakHandler()
{
	
	if(onBreak == true)
	{
		onBreak = false;
		document.getElementById("done").innerHTML = "Break complete! Let's start a new session!";
		document.getElementById("done").classList.add("show_message");
	}
	else
	{
		onBreak = true;
		document.getElementById("done").innerHTML = "Session Complete! take a 5 minute break!";
		document.getElementById("done").classList.add("show_message");
	}
	setTime();
	bell.play();
}

function mainFn()
{
	if (seconds <= 0 && minutes <= 0)
	{
		breakHandler();
	}
	
	if (seconds <= 0 && minutes > 0)
	{
		seconds = 60;
		seconds -= 1;
		minutes -= 1;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
	}
	
	else
	{
		seconds -= 1;
		document.getElementById("minutes").innerHTML = minutes;
		document.getElementById("seconds").innerHTML = seconds;
	}
}

function start(){
    click.play();

    // var minutes_interval = setInterval(decreaseMins, 60000);
	while (launched == false)
    {
		loop = setInterval(mainFn, 1000);
		launched = true;
	}
}