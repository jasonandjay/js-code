function patch(el, patches) {
  var index = 0;
  traverse(el, index, patches)
}

function traverse(el, index, patches) {
  var children = el.childNodes
  children.forEach(child => {
    doPatch(child, index++, patches)
  })
  doPatch(el, index, patches)
}

function doPatch(el, index, patches) {
  console.log('index', index)
  var patch = patches[index]
  patch.forEach(item => {
    if (item.type === 'REMOVE') {
      el.parentNode.removeChild(el)
    } else if (item.type === 'REPLACE') {
      const newDom = vdom2Element(item.value)
      el.parentNode.replaceChild(newDom, el)
    } else {
      setAttributes(el, item.value)
    }
  })
}