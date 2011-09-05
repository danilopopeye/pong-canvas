function Paddle(_ctx, user){
	this.ctx = _ctx;
	this._width = _ctx.canvas.width;
	this._height = _ctx.canvas.height;
	this.width = 5;
	this.height = 96;
	this.x = user === true ? this.width * 2 : this._width - ( this.width * 2 );
	this.y = 190;
	this.yMax = this._height - this.height;
	this.direction = 0;
	this.speed = 10;

	// moviment events
	if( user === true ){
		document.addEventListener('keyup', this.keyup.bind( this ), true);
		document.addEventListener('keydown', this.keydown.bind( this ), true);
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
