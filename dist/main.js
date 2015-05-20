function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var bgCounter = 0
var bgInterval = setInterval(changeBackgroundColor,10000)

function changeBackgroundColor(){
	bgCounter++;
	var bgColor = document.querySelector("body");
	bgColor.style.backgroundColor = getRandomColor();
}





var counter = 0;
var intervalId = setInterval(time,10)

function time(){
	counter++;
	var t = new Date();
	var sec = t.getSeconds();
	var min = t.getMinutes();
	var hour = t.getHours();
	var myClock = document.getElementById("clock");
	if(sec < 10){
		myClock.innerHTML = hour + ":" + min + ":0" + sec
		
	}
	else if(min < 10){
		myClock.innerHTML = hour + ":0" + min + ":" + sec
		
	}
	else {
		myClock.innerHTML = hour + ":" + min + ":" + sec
	}

}


