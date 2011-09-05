(function(window){
	function Pong(){
		this.element = document.getElementById('stage');
		this.ctx = this.element.getContext('2d');

		// add the ball
		this.ball = new Ball(this);

		// user and cpu paddle
		this.user = new Paddle(this, true);
		this.cpu = new Paddle(this);

		// run it
		this.animate();
	}

	Pong.prototype.clear = function(){
		this.ctx.clearRect(
			0, 0, this.element.width, this.element.height
		);
	};

	Pong.prototype.animate = function(){
		requestAnimationFrame(
			this.animate.bind( this )
		);

		this.clear();

		this.stage();

		this.user.animate();
		this.cpu.animate();
		this.ball.animate();
	};

	Pong.prototype.stage = function(){
		var ctx = this.ctx, half = this.element.width / 2;

		// divisory line
		ctx.beginPath();
		ctx.moveTo( half, 0 );
		ctx.lineTo( half, this.element.height );
		ctx.stroke();

		// TODO put the scores here too
	};

	window.pong = new Pong();
})(window);
