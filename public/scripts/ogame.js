var canvas = document.getElementById('main');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var circle = [];
var i = 0;
var gravity = 1;
var wind = 0;

document.getElementById('main').onmousedown = function(){
  return false;
};

canvas = oCanvas.create({
	canvas: '#main',
	background:'color: #DDD',
	clearEachFrame: true,
	drawEachFrame: true,
	fps:60,
	disableScrolling:true
});

function shootCircle(e){
	circle[i] = canvas.display.arc({
		x:e.x,
		y:e.y,
		velX:10,
		velY:-20,
		radius:8,
		start:0,
		end:360,
		stroke:'2px #000',
	});
	canvas.addChild(circle[i]);
	i++;
}

canvas.bind("click tap",function(e){
	shootCircle(e);
	console.log(circle);
	console.log(circle[i-1]);
});

function applyGravity(grav){
	circle.forEach(function(ball){
		ball.velY += grav;
	});
}

function applyWind(wind){
	circle.forEach(function(ball){
		ball.velX -= wind;
	});
}
function moveBalls(){
	circle.forEach(function(ball){
		if (ball.y + ball.radius < canvas.height){
			ball.x += ball.velX;
			ball.y += ball.velY;
		}
		else ball.y= canvas.height - ball.radius;
	});
}

function setUpEnvironment(){


}

canvas.setLoop(function(){
	applyGravity(gravity);
	applyWind(wind);
	moveBalls();
}).start();
