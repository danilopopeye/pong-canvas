function Ball(_ctx){
	this.ctx = _ctx;
	this.x = 10;
	this.y = 10;
	this.radius = 10;
	this.speed = 10;
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

	this.x += this.speed;

	this.draw();
};

Ball.prototype.collision = function(){
	var
		x = this.x,
		width = this.ctx.canvas.width,
		right = x + this.radius;

	if( x <= 0 || x >= width ){
		this.speed *= -1;
	}
};
