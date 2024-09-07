function hello(){
	console.log("hello");
}
// setTimeout -> 1 udaa ajilna
// setInterval -> hyzgaargui ajilna
// setInterval(hello,1000); 1000=1second

// define
var time = document.getElementsByTagName('h1')[0]; // querySelector is when you call a class
var ol = document.getElementsByTagName('ol')[0];
var startBtn = document.querySelector('.startBtn');
var stopBtn = document.querySelector('.stopBtn');
var second = 0, minute = 0, hour = 0, millisecond = 0;
// function
function watch(){
	millisecond++;
	if (millisecond == 100) {
		second++;
		millisecond = 0;
		if (second == 60) {
			minute++;
			second = 0;
			if (minute == 60) {
				hour++;
				minute = 0;
			}
		}
	}
	// ternary operator ?;
	var ms = millisecond < 10 ? "0" + millisecond : millisecond; // Milliseconds variable is 'ms'
	var s = second < 10 ? "0" + second : second;
	var m = minute < 10 ? "0" + minute : minute;
	var h = hour < 10 ? "0" + hour : hour;
	time.innerText = h + ":" + m + ":" + s + ":" + ms;
}
var up;
function start(){
	up = setInterval(watch, 10); 
	startBtn.disabled = true;
}
function stop(){
	clearInterval(up);
	if(startBtn.disabled == true){
		startBtn.disabled = false;
	}
}
function lap(){
	// shineer tag uusgeh document.createElement('tagName');
	var li = document.createElement('li');
	li.innerText = time.innerText; 
	console.log(li);
	ol.append(li);
}
function restart(){
	second = 0, minute = 0, hour = 0, millisecond = 0;
	
	time.innerText="00:00:00:00";
	ol.innerText="" ;
	clearInterval(up);
	if(startBtn.disabled == true){
		startBtn.disabled = false;
	}
}