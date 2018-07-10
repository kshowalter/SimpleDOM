

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
      attributeName = 'class';
    } else {
      attributeName = name;
    }
    if( typeof value === 'function' ){
      this.elem[attributeName] = value;
    } else if( attributeName === 'innerHTML' ){
      console.log('innerHTML');
      this.elem[attributeName] = value;
    } else {
      this.elem.setAttribute(attributeName, value);
    }
    //console.log(attributeName, value);
    return this;
  },
  css: function(name, value){
    if( value === undefined ){
      return this.elem.style[name];
    }
    this.elem.style[name] = value;
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
