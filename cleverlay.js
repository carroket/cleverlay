/*============================================================================*\
	   ________                    __
	  / ____/ /__ _   _____  _____/ /___ ___  __
	 / /   / / _ \ | / / _ \/ ___/ / __ `/ / / /
	/ /___/ /  __/ |/ /  __/ /  / / /_/ / /_/ /
	\____/_/\___/|___/\___/_/  /_/\__,_/\__, /
									   /____/
	JavaScript for Cleverlay
	-----------------------------------------------------------------------
	© 2010-2015 by Carroket, Inc.
	http://www.carroket.com/
	-----------------------------------------------------------------------
	Made by Brian Sexton.
	http://www.briansexton.com/
	-----------------------------------------------------------------------
	MIT License

\*============================================================================*/

(function(document, options) {

	var cleverlay = new Cleverlay();

	function Cleverlay() {

		if (options instanceof Object && options.autoRun === true) {

			this.autoRun = true;
		}
	}

	// TO DO: Write it, cut it, paste it, save it. Load it, check it, quick—rewrite it.

	Cleverlay.prototype.addImage = function(url, width, height, alt) {

		var contentFrame = document.createElement('div');

		var img = document.createElement('img');


		// Prepare the content frame.

		contentFrame.id = 'PageOverlayContentFrame';

		contentFrame.className = 'CleanContentFrame';

		contentFrame.style.width = width + 'px';


		// Prepare the img element.

		img.src = url;
		img.alt = alt;
		img.width = width;
		img.height = height;

		img.id = 'PageOverlayImage';


		// Assemble the content.

		contentFrame.appendChild(img);

		this.overlay.appendChild(contentFrame);
	};

	Cleverlay.prototype.addPageOverlay = function() {

		var backdrop = document.createElement('div');

		var closeButton = document.createElement('div');


		this.overlay = document.createElement('div');


		// Prepare the overlay.

		this.overlay.id = 'PageOverlay';


		// Prepare the backdrop.

		backdrop.id = 'PageOverlayBackdrop';


		// Prepare the close button.

		closeButton.id = 'PageOverlayCloseButton';

		closeButton.onclick = this.removePageOverlay;


		// Assemble everything.

		this.overlay.appendChild(backdrop);

		this.overlay.appendChild(closeButton);

		document.body.appendChild(this.overlay);
	};

	Cleverlay.prototype.addSWF = function(url, width, height) {

		var contentFrame = document.createElement('div');

		var swfObject = document.createElement('object');

		var swfParam = document.createElement('param');


		this.overlay.style.height = document.body.offsetHeight + 'px';


		// Prepare the content frame.

		contentFrame.id = 'PageOverlayContentFrame';

		contentFrame.className = 'CleanContentFrame';

		contentFrame.style.width = width + 'px';

		swfObject.data = url;
		swfObject.width = width;
		swfObject.height = height;

		swfObject.id = 'PageOverlaySWFObject';
		swfObject.title = 'SWF Content (' + url + ')';


		// Prepare the SWF param element.

		swfParam.name = 'movie';
		swfParam.value = url;


		// Assemble the content.

		swfObject.appendChild(swfParam);

		contentFrame.appendChild(swfObject);

		this.overlay.appendChild(contentFrame);
	};

	Cleverlay.prototype.removePageOverlay = function() {

		var backdrop = document.getElementById('PageOverlayBackdrop');

		var closeButton = document.getElementById('PageOverlayCloseButton');

		var contentFrame = document.getElementById('PageOverlayContentFrame');

		var swfObject = document.getElementById('PageOverlaySWFObject');


		this.overlay = document.getElementById('PageOverlay');

		this.overlay.removeChild(closeButton);


		if (swfObject) {

			contentFrame.removeChild(swfObject);
		}


		document.body.removeChild(this.overlay);

		this.overlay.removeChild(contentFrame);

		this.overlay.removeChild(backdrop);
	};

	Cleverlay.prototype.showContent = function(url, type, width, height, token) {

		if (type == 'swf')
		{
			this.addPageOverlay();
			this.addSWF(url, width, height);
			return false;
		}

		else if (type == 'image')
		{
			this.addPageOverlay();
			this.addImage(url, width, height, token);
			return false;
		}

		else
		{
			return true;
		}
	};

	// If a namespace was specified, attach cleverlay to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.cleverlay = cleverlay;
	}

})(window.document);