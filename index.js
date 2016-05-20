/**
* A simple DOM manipulation tool.
 * @fileOverview Constructor for SimpleDOM function.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */

//var Value = require('./kDOMExtra.js').Value;
//var Selector = require('./kDOMExtra.js').Selector;


/**
 * @module
 */
var Wrap = require('./Wrap.js');

/**
 * Wraps an HTMLElement with a jquery like function
 * @param  {string} input
 * @return {SimpleDOM} Wrapped HTMLElement
 */
var $ = function(input){
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
    if( input === 'value' ) {
      if( Value !== undefined ) {
        element = Value();
        return element;
      } else {
        console.log('Error: Value not defined');
        return false;
      }
    } else if( input === 'selector' ) {
      if( Selector !== undefined ) {
        element = Selector();
        return element;
      } else {
        console.log('Error: Selector not defined');
        return false;
      }
    } else {
      element = document.createElement(input);
      return Wrap(element);
    }
  }
};

/**
 * Constructor for SimpleDOM function.
 * @exports $
 */
module.exports = $;
