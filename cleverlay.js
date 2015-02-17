/*============================================================================*\
	   ________                    __
	  / ____/ /__ _   _____  _____/ /___ ___  __
	 / /   / / _ \ | / / _ \/ ___/ / __ `/ / / /
	/ /___/ /  __/ |/ /  __/ /  / / /_/ / /_/ /
	\____/_/\___/|___/\___/_/  /_/\__,_/\__, /
									   /____/
	JavaScript for Cleverlay
	-----------------------------------------------------------------------
	© 2015 by Carroket, Inc.
	http://www.carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	http://www.briansexton.com/
	-----------------------------------------------------------------------
	MIT License

\*============================================================================*/

(function(window, options) {

	var cleverlay = new Cleverlay();

	function Cleverlay() {

		if (options instanceof Object && options.autoRun === true) {

			this.autoRun = true;
		}
	}

	// TO DO: Write it, cut it, paste it, save it. Load it, check it, quick—rewrite it.

	// If a namespace was specified, attach cleverlay to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.cleverlay = cleverlay;
	}

})(window);