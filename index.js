/**
* A simple DOM manipulation tool.
 * @fileOverview Constructor for SimpleDOM function.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.2.0
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

  if( input.constructor === Object && input.elem ){
    return input;
  }

  if( specs && specs.tag === 'textNode'){
    specs.textNode = true;
  }

  if( input.constructor === Object && input.tag ){
    specs = input;
    input = specs.tag;
  }

  var element;
  if( input.nodeName !== undefined ) {
    element = input;
  } else if( input.substr && input.substr(0,1) === '#' ) {
    element = document.getElementById(input.substr(1));
  } else if( input.substr && input.substr(0,1) === '.' ) {
    element = document.getElementsByClassName(input.substr(1))[0];
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
  if( element ){
    var sdom = Wrap(element);
    if( specs ){
      if( specs.props ){
        for( var name in specs.props ){
          sdom.attr(name, specs.props[name]);
        }
      }
      if( specs.text ){
        sdom.text( specs.text );
      }
    }
    return sdom;
  } else {
    return false;
  }
};

/**
 * Constructor for SimpleDOM function.
 * @exports $
 */
module.exports = $;
