# SimpleDOM

A very simple DOM manipulation tool.

## API

### text(string)
Set elements content to the string. This removes any preexisting child elements.

### append(subElement)
Append the subElement as new child element. The subElement is within a SimpleDOM wrapper.

### appendTo(parentElement)
Append this element to the parentElement. The parentElement is within a SimpleDOM wrapper.

### attr(name, value )
Sets or creates and element attribute 'name' to the value 'value'

### unwrap()
Returns the wrapped DOM element.

### clear()
Removes all content from the element.
