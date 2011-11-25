/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {

	window.requestAnimationFrame = ( function() {

		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

			window.setTimeout( callback, 1000 / 60 );

		};

	} )();

}

// Function.bind()
if( ! ( 'bind' in Function.prototype ) ){
  Function.prototype.bind = function(owner){
    var that = this;

    if( arguments.length <= 1 ){
      return function(){
        return that.apply( owner, arguments );
      };
    } else {
      var args = Array.prototype.slice.call( arguments, 1 );

      return function(){
        return that.apply( owner, arguments.length === 0 ? args : args.concat(
          Array.prototype.slice.call( arguments )
        ));
      };
    }
  };
}
