function setup() {
	this.width = windowWidth;
	this.height = windowHeight;
	createCanvas(this.width, this.height);
}

function draw() {
	drawCircle(this.width / 2, this.height / 2, mouseX);
}

function drawCircle(x, y, radius) {
	ellipse(x, y, radius);

	// if(radius > 5){
	// 	drawCircle(x + .5, y, radius);
	// }
	// drawCircle();
}