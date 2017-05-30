/**
* A simple DOM manipulation tool.
 * @fileOverview Constructor for SimpleDOM function.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */


/**
 * @module
 */
var Wrap = require('./Wrap.js');

/**
 * Wraps an HTMLElement with a jquery like function
 * @param  {string} input
 * @return {SimpleDOM} Wrapped HTMLElement
 */
var $ = function(input, specs){
  if( typeof input === 'undefined' ) {
    //log('input needed');
    return false;
  }
  var element;
  if( input.nodeName !== undefined ) {
    element = input;
  } else if( input.substr(0,1) === '#' ) {
    element = document.getElementById(input.substr(1));
  } else if( input.substr(0,1) === '.' ) {
    element = document.getElementByClassName(input.substr(1)[0]);
  } else if( input.constructor.prototype === HTMLElement || input instanceof SVGElement ) {
    element = input;
  } else {
    if( specs && specs.namespaceURI ) {
      element = document.createElementNS(specs.namespaceURI, input);
    } else if( specs && specs.textNode ) {
      element = document.createTextNode(specs.text);
    } else {
      element = document.createElement(input);
    }
  }
  return Wrap(element);
};

/**
 * Constructor for SimpleDOM function.
 * @exports $
 */
module.exports = $;
