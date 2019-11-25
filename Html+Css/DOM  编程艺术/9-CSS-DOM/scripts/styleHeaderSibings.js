function styleHeaderSiblings(tag,theclass) {
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName(tag);
  for (var i=0; i<headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
    addClass(elem,theclass);
  }
}
addLoadEvent(function(){styleHeaderSiblings("h1","intro")});