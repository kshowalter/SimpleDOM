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
var $ = function(input, config){
  if( typeof input === 'undefined' ) {
    //log('input needed');
    return false;
  }
  var element;
  if( input.substr(0,1) === '#' ) {
    element = document.getElementById(input.substr(1));
    return Wrap(element);
  } else if( input.substr(0,1) === '.' ) {
    element = document.getElementByClassName(input.substr(1)[0]);
    return Wrap(element);
  } else {
    if( config && config.namespaceURI ) {
      element = document.createElementNS(config.namespaceURI, input);
    } else {
      element = document.createElement(input);
    }
    return Wrap(element);
  }
};

/**
 * Constructor for SimpleDOM function.
 * @exports $
 */
module.exports = $;
