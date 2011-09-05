function Paddle(_ctx, user){
	this.ctx = _ctx;
	this.user = !!user;
	this._width = _ctx.canvas.width;
	this._height = _ctx.canvas.height;
	this.width = 5;
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
		this.speed *= .85;
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

Paddle.prototype.animate = function(ball){
	if( ! this.user ){
		this.ai( ball );
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
	this.direction = ball > this.y ? 1 : -1;
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
