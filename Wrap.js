

/**
 * Prototype object for the element wrapper.
 */
var wrapperPrototype = {
  text: function(string){
    this.elem.textContent = string;
    return this;
  },
  append: function(subElement){
    if( subElement instanceof String){
      subElement = document.createTextNode(subElement);
    }

    if( subElement instanceof Node ){
      this.elem.appendChild(subElement);
    } else {
      this.elem.appendChild(subElement.elem);
    }
    return this;
  },
  appendTo: function(parentElement){
    if( parentElement instanceof Node ){
      parentElement.appendChild(this.elem);
    } else {
      parentElement.append(this);
    }
    return this;
  },
  attr: function(name, value ){
    var attributeName;
    if( name === 'class'){
      attributeName = 'className';
    } else {
      attributeName = name;
    }
    this.elem[attributeName] = value;
    return this;
  },
  unwrap: function(){
    return this.elem;
  },
  clear: function(){
    //this.elem.innerHTML = '';
    while (this.elem.firstChild) {
      this.elem.removeChild(this.elem.firstChild);
    }
    return this;
  }
};


/**
 * @constructor Wraps an HTMLElement with a jquery like function.
 * @param  {HTMLElement} element
 * @return {function} HTMLElement wrapped by SimpleDOM
 */
var Wrap = function(element){
  var W = Object.create(wrapperPrototype);
  W.elem = element;
  return W;
};


/**
 * @exports Wrap
 */
module.exports = Wrap;
