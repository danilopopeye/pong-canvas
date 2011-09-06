function Ball(pong){
	this.parent = pong;
	this.ctx = pong.ctx;
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
		height = this.ctx.canvas.height,
		user = this.parent.user,
		cpu = this.parent.cpu;

	if( x <= 0 || right >= width ){
		// this.parent.play = false;
		this.direction.x *= -1;
	}

	if( y <= 0 || bottom >= height ){
		this.direction.y *= -1;
	}

	if( this.direction.x === -1 && ( this.x === ( user.x + user.width ) ) ){
		console.log('user line');
		this.paddleCollision( user );
	}

	if( this.direction.x === 1 && ( ( this.x + this.radius ) === cpu.x ) ){
		this.paddleCollision( cpu );
	}
};

Ball.prototype.paddleCollision = function( paddle ){
	var ball = this.y + this.radius / 2;

	if( ball >= paddle.y && ball <= ( paddle.y + paddle.height ) ){
		this.direction.x *= -1;
	}
};
