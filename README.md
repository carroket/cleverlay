# Cleverlay

**A Clean, Fast, Simple Media Overlay System for Web Sites**

## Overview

Cleverlay is a clean, fast, simple media overlay system for Web sites. From photos to video games and more, it provides an easy way for Web sites to present both images and rich media without cluttering pages or requiring page changes.

Cleverlay already supports images and Adobe Flash content. Support for other kinds of content may be added later.


## Usage

### Deployment

First, place **cleverlay.js** somewhere sensible then load it in your HTML like so:

```html
<script src="path/to/cleverlay.js"></script>
```

### Configuration

Cleverlay supports initialization-time configuration via an options object containing either or both of the following properties:
* **autoRun** (Boolean)
* **namespace** (Object)

To use an options object, simply pass it into the function expression as a second parameter in the call at the end of **cleverlay.js**.

Find this:

```javascript
})(window.document);
```

Then change that to something like this:
```javascript
})(window.document, { /* Option properties go here. */ });
```

#### Auto-Run

The **autoRun** property of the options object is not yet used. It is a place-holder for future functionality.

#### Namespace

By default, Cleverlay is encapsulated, but if you wish, it can expose a reference to itself to an object you specify via the **namespace** property of the options object.

For example, if you want a global reference to enable easy testing or tinkering from a JavaScript console, you might do something like this:

```javascript
})(window.document, { namespace: window });
```

In that case, you would be able to access Cleverlay via **window.cleverlay**.

You may wish to consider using a custom object to hold references to any components, thereby minimizing top-level clutter. For example, you might do something like this:

```javascript
})(window.document, { namespace: window.components = window.components || {} });
```

In that case, you would be able to access Cleverlay via **window.components.cleverlay**.

## Availability

Cleverlay is available for download from [GitHub](https://github.com/carroket/cleverlay) free of charge. It is licensed via the standard MIT License.

A more robust and refined version of Cleverlay should soon be available along with correspondingly improved documentation. In the meantime, you are welcome to download and tinker with the work in progress. Star it. Watch it. Fork it if you are so inclined. Knock yourself out.

## Demos

Want to see Cleverlay in action? The [Cleverlay Web site](http://cleverlay.com/) features a few samples that use a work-in-progress version.

## "Cleverlay"?

Clever + Overlay = Cleverlay

## Who made this?

Cleverlay was made by [Brian Sexton](http://briansexton.com/) of [Carroket, Inc.](http://carroket.com/)