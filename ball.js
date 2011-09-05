function Ball(_ctx){
	this.ctx = _ctx;
	this.x = 10;
	this.y = 10;
	this.radius = 10;
	this.speed = 10;
	this.direction = {
		x: 1, y: 1
	};
}

Ball.prototype.draw = function(){
	var ctx = this.ctx;

	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
};

Ball.prototype.animate = function(){
	this.collision();

	this.x += this.speed * this.direction.x;
	this.y += this.speed * this.direction.y;

	this.draw();
};

Ball.prototype.collision = function(){
	var
		x = this.x, y = this.y,
		right = x + this.radius,
		bottom = y + this.radius,
		width = this.ctx.canvas.width,
		height = this.ctx.canvas.height;

	if( x <= 0 || right >= width ){
		this.direction.x *= -1;
	}
	
	if( y <= 0 || bottom >= height ){
		this.direction.y *= -1;
	}
};
