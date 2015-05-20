function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var bgCounter = 0;
var bgInterval = setInterval(changeBackgroundColor,3000);

function changeBackgroundColor(){
	bgCounter++;
	var bgColor = document.querySelector("body");
	bgColor.style.backgroundColor = getRandomColor();
}





var counter = 0;
var intervalId = setInterval(time,0001);

function time(){
	counter++;
	var dd = "AM"
	var t = new Date();
	var sec = t.getSeconds();
	var min = t.getMinutes();
	var hour =t.getHours();
	var myClock = document.getElementById("clock");
	if(sec < 10){
		sec = "0" + sec;
	}
	if(min < 10){
		min = "0" + min;
	}
	if(hour < 10){
		hour = "0" + hour;
	}
	
	if(hour == 22 || hour == 23){
    	hour = hour - 12;
    	dd = "PM";
    }
	if(hour >= 12) {
        hour = hour - 12;
        hour = "0" + hour;
        dd = "PM";
    }
    if(hour == 0){
    	hour = 12;
    }
 
	
	myClock.innerHTML = hour + ":" + min + ":" + sec + " " + dd;
}


