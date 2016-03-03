var wrapper_prototype = {
  html: function(html){
    this.elem.innerHTML = html;
    return this;
  },
  append: function(sub_element){
    this.elem.appendChild(sub_element.elem);
    return this;
  },
  appendTo: function(parent_element){
    parent_element.append(this);
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
  }
};

var Wrap = function(element){
  var W = Object.create(wrapper_prototype);
  W.elem = element;
  return W;
};


module.exports = Wrap;
