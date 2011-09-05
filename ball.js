function Ball(_ctx){
	this.ctx = _ctx;
	this.x = 10;
	this.y = 10;
	this.radius = 10;
}

Ball.prototype.draw = function(){
	var ctx = this.ctx;

	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
};
