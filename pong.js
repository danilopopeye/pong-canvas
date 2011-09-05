(function(window){
	function Pong(){
		this.element = document.getElementById('stage');
		this.ctx = this.element.getContext('2d');

		// add the ball
		this.ball = new Ball( this.ctx );

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

		this.ball.animate();
	};

	window.pong = new Pong();
})(window);
