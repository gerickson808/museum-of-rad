function clickClack(event) {
   // var rect = canvas.getContext("2d");
    var x = event.x;
    var y = event.y;
    circles[circle] = new Circle(x,y);
    circle++;
}

document.getElementById('main').onmousedown = function(){
  return false;
};

var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var back = ctx.getImageData(0, 0, 18, 18);
var circle = 0;
var circles = [];
var gravity = 1;
var wind = 0;
canvas.addEventListener('click',clickClack);
playGame = setInterval(move,20);

function drawCircle(x,y){
	ctx.beginPath();
	ctx.arc(x,y,5,0,2*Math.PI);
	ctx.stroke();
}

function Circle(x,y){
	drawCircle(x,y);
	this.x = x;
	this.y = y;
	console.log(this.y);
	this.velx = 10;
	this.vely = -20;
}

function move(){
	var oldx, oldy;
	circles.forEach(function(circle){
		if(circle.y < canvas.height-10){
			circle.vely += gravity;
			circle.velx += wind;
			oldx = circle.x;
			oldy = circle.y;
			ctx.putImageData(back, oldx-8, oldy-8);
			circle.y += circle.vely;
			circle.x += circle.velx;
			if (circle.y > canvas.height - 5) circle.y = canvas.height - 5;
			drawCircle(circle.x,circle.y);
		}
	});
}