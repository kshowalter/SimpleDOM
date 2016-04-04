//var Value = require('./k_DOM_extra.js').Value;
//var Selector = require('./k_DOM_extra.js').Selector;

var Wrap = require('./Wrap.js');


var $ = function(input){
  if( typeof input === 'undefined' ) {
    //log('input needed');
    return false;
  }
  if( input.substr(0,1) === '#' ) {
    var element = document.getElementById(input.substr(1));
    return Wrap(element);
  } else if( input.substr(0,1) === '.' ) {
    var element = document.getElementByClassName(input.substr(1)[0]);
    return Wrap(element);
  } else {
    if( input === 'value' ) {
      if( Value !== undefined ) {
        var element = Value();
        return element;
      } else {
        console.log("Error: Value not defined");
        return false;
      }
    } else if( input === 'selector' ) {
      if( Selector !== undefined ) {
        var element = Selector();
        return element;
      } else {
        console.log("Error: Selector not defined");
        return false;
      }
    } else {
      var element = document.createElement(input);
      return Wrap(element);
    }
  }
}

module.exports = $;
