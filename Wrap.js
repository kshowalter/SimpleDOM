var wrapper_prototype = {
  text: function(string){
    this.elem.textContent = string;
    return this;
  },
  append: function(sub_element){
    if( sub_element instanceof Node ){
      this.elem.appendChild(sub_element);
    } else {
      this.elem.appendChild(sub_element.elem);
    }
    return this;
  },
  appendTo: function(parent_element){
    if( parent_element instanceof Node ){
      parent_element.appendChild(this.elem);
    } else {
      parent_element.append(this);
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

var Wrap = function(element){
  var W = Object.create(wrapper_prototype);
  W.elem = element;
  return W;
};

module.exports = Wrap;
