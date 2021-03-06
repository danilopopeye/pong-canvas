function Paddle(pong, user){
	this.parent = pong;
	this.ctx = pong.ctx;
	this.user = !!user;
	this._width = pong.element.width;
	this._height = pong.element.height;
	this.width = 10;
	this.height = 96;
	this.x = user === true ? this.width * 2 : this._width - ( this.width * 2 );
	this.y = 190;
	this.yMax = this._height - this.height;
	this.yMiddle = this.yMax / 2;
	this.direction = 0;
	this.speed = 10;

	// moviment events
	if( user === true ){
		document.addEventListener('keyup', this.keyup.bind( this ), true);
		document.addEventListener('keydown', this.keydown.bind( this ), true);
	} else {
		this.speed *= 0.85;
	}

	this.draw();
}

Paddle.prototype.draw = function(){
	var ctx = this.ctx;

	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.closePath();
	ctx.fill();
};

Paddle.prototype.animate = function(){
	if( ! this.user ){
		this.ai();
	}

	this.move();
	this.draw();
};

Paddle.prototype.move = function(){
	this.y += this.speed * this.direction;

	if( this.y < 0 ){
		this.y = 0;
	} else if( this.y > this.yMax ){
		this.y = this.yMax;
	}
};

Paddle.prototype.ai = function( ball ){
	this.direction = this.parent.ball.y > this.y ? 1 : -1;
};

Paddle.prototype.keyup = function(e){
	if( e.which === 38 || e.which === 40 ){
		this.direction = 0;
	}
};

Paddle.prototype.keydown = function(e){
	if( e.which === 38 ){
		this.direction = -1;
	} else if( e.which === 40 ){
		this.direction = 1;
	}
};