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

	Cleverlay.prototype.addPageOverlay = function()
	{
		var body = document.body;


		var backdrop = document.createElement('div');

		var closeButton = document.createElement('div');


		this.overlay = document.createElement('div');


		// Prepare the overlay.

		this.overlay.id = 'PageOverlay';


		// Prepare the backdrop.

		backdrop.id = 'PageOverlayBackdrop';


		// Prepare the close button.

		closeButton.id = 'PageOverlayCloseButton';

		closeButton.onclick = removePageOverlay;


		// Assemble everything.

		body.appendChild(this.overlay);

		this.overlay.appendChild(backdrop);

		this.overlay.appendChild(closeButton);
	};

	Cleverlay.prototype.removePageOverlay = function() {

		var body = document.body;


		var backdrop = document.getElementById('PageOverlayBackdrop');

		var closeButton = document.getElementById('PageOverlayCloseButton');

		var contentFrame = document.getElementById('PageOverlayContentFrame');

		var swfObject = document.getElementById('PageOverlaySWFObject');


		this.overlay = document.getElementById('PageOverlay');

		this.overlay.removeChild(closeButton);


		if (swfObject) {

			contentFrame.removeChild(swfObject);
		}


		this.overlay.removeChild(contentFrame);

		this.overlay.removeChild(backdrop);


		body.removeChild(this.overlay);
	};

	// If a namespace was specified, attach cleverlay to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.cleverlay = cleverlay;
	}

})(window);