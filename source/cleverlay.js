/*============================================================================*\
	   ________                    __
	  / ____/ /__ _   _____  _____/ /___ ___  __
	 / /   / / _ \ | / / _ \/ ___/ / __ `/ / / /
	/ /___/ /  __/ |/ /  __/ /  / / /_/ / /_/ /
	\____/_/\___/|___/\___/_/  /_/\__,_/\__, /
									   /____/
	JavaScript for Cleverlay
	-----------------------------------------------------------------------
	© 2010-2016 by Carroket, Inc.
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

		var image = document.createElement('img');


		// Prepare the content frame.

		contentFrame.className = 'content-frame';

		contentFrame.style.width = width + 'px';


		// Prepare the image element.

		image.src = url;
		image.alt = alt;
		image.width = width;
		image.height = height;

		image.className = 'image';


		// Assemble the content.

		contentFrame.appendChild(image);

		this.overlay.appendChild(contentFrame);
	};

	Cleverlay.prototype.addPageOverlay = function() {

		var backdrop = document.createElement('div');

		var closeButton = document.createElement('div');


		this.overlay = document.createElement('div');


		// Prepare the overlay.

		this.overlay.className = 'cleverlay overlay';


		// Prepare the backdrop.

		backdrop.className = 'backdrop';


		// Prepare the close button.

		closeButton.className = 'close-button';

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

		contentFrame.className = 'content-frame';

		contentFrame.style.width = width + 'px';

		swfObject.data = url;
		swfObject.width = width;
		swfObject.height = height;

		swfObject.className = 'swf';

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

		var backdrop = document.querySelector('.cleverlay.overlay > .backdrop');

		var closeButton = document.querySelector('.cleverlay.overlay > .close-button');

		var contentFrame = document.querySelector('.cleverlay.overlay > .content-frame');

		var image = document.querySelector('.cleverlay.overlay > .content-frame > img');

		var swfObject = document.querySelector('.cleverlay.overlay > .content-frame > object.swf');


		this.overlay = document.querySelector('.cleverlay.overlay');

		this.overlay.removeChild(closeButton);


		if (image) {

			contentFrame.removeChild(image);
		}


		if (swfObject) {

			contentFrame.removeChild(swfObject);
		}


		document.body.removeChild(this.overlay);

		this.overlay.removeChild(contentFrame);

		this.overlay.removeChild(backdrop);
	};

	Cleverlay.prototype.show = function(object) {

		if (this.validateContentObject(object)) {

			return this.showContent(object.url, object.type, object.width, object.height, object.token);
		}

		else {

			return true;
		}
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

	Cleverlay.prototype.validateContentObject = function(object) {

		if (object.hasOwnProperty("url") && object.hasOwnProperty("type") && object.hasOwnProperty("width") && object.hasOwnProperty("height") && object.hasOwnProperty("token")) {

			return true;
		}

		else {

			return false;
		}
	};

	// If a namespace was specified, attach cleverlay to it.

	if (options instanceof Object && options.namespace instanceof Object) {

		options.namespace.cleverlay = cleverlay;
	}

})(window.document);