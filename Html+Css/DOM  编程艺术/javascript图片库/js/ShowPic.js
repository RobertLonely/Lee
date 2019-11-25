//------addLoadEvent函数
function addLoadEvent(func)
{
	var oldonload=window.onload;
	if(typeof window.onload !='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
    }
//window.onload=prepareGallery;
function prepareGallery()
{
	 var gallery=document.getElementById("imagegallery");
	 var links=gallery.getElementsByTagName("a");
	 for(var i=0;i<links.length;i++){
		 link[i].onclick=function(){
			 return ShowPic(this);
		 }
		 links[i].onkeypress=links[i].onclick;
	 }
	}

function ShowPic(whichpic)
 {   
	 var soure=whichpic.getAttribute("href");
	 var placeholder=document.getElementById("placeholder");
	 placeholder.setAttribute("src",soure);
	 var text=whichpic.getAttribute("title");
	 var description=document.getElementById("description");
	 description.firstChild.nodeValue=text;
	 return false;
 }
addLoadEvent(prepareGallery);// nodeValue一般只用来设置 文本节点的值。如果要刷新属性节点的值，一般使用setAttribute().