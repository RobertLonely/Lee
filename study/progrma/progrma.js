/*
* @Author: 26291
* @Date:   2019-03-12 21:02:32
* @Last Modified by:   Lee
* @Last Modified time: 2019-04-19 14:29:39
*/
document.writeln('Hello,World!');
// var egname={
// "first-nmae":"wang",
// "middle-nmae":"ming",
// "last-name":"yuan",
//  aaa:function(){}
// };
// for(var key in egname){
// 	if(typeof egname[key]!=='function'){
// 		document.writeln(key+':'+egname[key]);
// 	}
// }

// var i;
// var properties=[
// 'first-name',
// 'middle-name',
// 'last-name',
// 'profession'
// ];
// for(i=0;i<properties.length;i++){
// 	document.writeln(
// 		i+':'+properties[i]
// 	);
// }

Function.prototype.method=function (name,func){
	if(!this.prototype[name]){
		this.prototype[name]=func;
	};
	return this;
};
// String.method('trim',function(){
// 	return this.replace(/^\s+|\s+$/g,'');
// });
// document.writeln('"'+"  neat   ".trim() + '"');
// Number.method('integer',function(){
// 	return Math[this<0?'ceil':'floor'](this);
// });
// document.writeln((-10/3).integer());

// var walk_the_DOM=function walk(node,func){
// 	func(node);
// 	node=node.firstChild;
// 	while(node){
// 		walk(node,func);
// 		node=node.nextsibling;
// 	}
// };
// var getElementsByAttribute=function(att,value){
// 	var results=[];
// 	walk_the_DOM(document.body,function(node){
// 		var actual=node.nodeType===1&& node.getAttribute(att);
// 		if(typeof actual ==='string'
// 		&&(actual===value || typeof value !=='string')){
// 			results.push(node);
// 		}
// 	});
// 	return results;
// };

// var factorial=function factorial(i,a){
// 	a=a || 1;
// 	if(i<2){
// 		return a;
// 	}
// 	return factorial(i-1,a*i);
// };
// document.writeln(factorial(4));

// var foo=function(){
// var a=3,b=5;
// var bar=function(){
// 	var b=7,c=11;
// 	a+=b+c;
// };
// document.writeln(bar());
// };

// var fade=function (node){
// 	var level=1;
// 	var step=function(){
// 		var hex=level.toString(16);
// 		node.style.backgroundColor='#FFFF'+hex+hex;
// 		if(level<15){
// 			level+=1;
// 			setTimeout(step,100);
// 		}
// 	};
// 	setTimeout(step,100);
// };
// fade(document.body);

// var add_the_handlers=function(nodes){
// 	var helper=function(i){
// 		return function(e){
// 			alert(i);
// 		};
// 	};
// 	var i;
// 	for(i=0;i<nodes.length;i+=1){
// 		nodes[i].onclick=helper(i);
// 	}
// };

// String.method('deentityify',function(){
// 	var entity={
// 		quot:'"',
// 		lt:'<',
// 		gt:'>'
// 	};
// 	return function(){
// 		return this.replace(/&([^&;]+);/g,function(a,b){
// 			var r=entity[b];
// 			return typeof r==='string'?r:a;
// 		}
// 		);
// 	};
// }());
// document.writeln('&lt;&quot;&gt;'.deentityify());

// var serial_maker=function(){
// 	var prefix='';
// 	var seq=0;
// 	return{
// 		set_prefix:function(p){
// 			prefix=String(p);
// 		},
// 		set_seq:function(s){
// 			seq=s;
// 		},
// 		gensym:function(){
// 			var result=prefix+seq;
// 			seq+=1;
// 			return result;
// 		}
// 	};
// };
// var seqer=serial_maker();
// seqer.set_prefix('Q');
// seqer.set_seq(1000);
// var unique=seqer.gensym();
// document.writeln(unique);

// Function.method('curry',function(){
// 	var slice=Array.prototype.slice,
// 	args=slice.apply(arguments),
// 	that=this;
// 	return function(){
// 		return that.apply(null,args.concat(slice.apply(arguments)));
// 	};
// });

// var fibonacci=function(n){
// 	return n<2?n:fibonacci(n-1)+fibonacci(n-2);
// };
// for(var i=0;i<=10;i+=1){
// 	document.writeln('//'+i+':'+fibonacci(i));
// }

// var fibonacci=function(){
// 	var memo=[0,1];
// 	var fib=function(n){
// 		var result=memo[n];
// 		if(typeof result !=='number'){
// 			result=fib(n-1)+fib(n-2);
// 			memo[n]=result;
// 		}
// 		return result;
// 	};
// 	return fib;
// }();
// for(var i=0;i<=10;i+=1){
// 	document.writeln('//'+i+':'+fibonacci(i));
// }

//记忆函数；
// var memoizer=function(memo,formula){
// 	var recur=function(n){
// 		var result=memo[n];
// 		if(typeof result!=='number'){
// 			result=formula(recur,n);
// 			memo[n]=result;
// 		}
// 		return result;
// 	};
// 	return recur;
// };
// var fibonacci=memoizer([0,1],function(recur,n){
// 	return recur(n-1)+recur(n-2);
// });
// for(var i=0;i<=10;i+=1){
// 	document.writeln('//'+i+':'+fibonacci(i));
// }

// var Mammal=function(name){
// 	this.name=name;
// };
// Mammal.prototype.get_name=function(){
// 	return this.name;
// };
// Mammal.prototype.says=function(){
// 	return this.saying || '';
// };
// var myMammal=new Mammal('Herb the Mammal');
// var name=myMammal.get_name();
// document.writeln(name);
// //继承上面的Mammal
// var Cat=function(name){
// 	this.name=name;
// 	this.saying='meow';
// };
// Cat.prototype=new Mammal();
// Cat.prototype.purr=function(n){
// 	var i,s='';
// 	for(i=0;i<n;i+=1){
// 		if(s){
// 			s+='-';
// 		}
// 		s+='r';
// 	}
// 	return s;
// };
// Cat.prototype.get_name=function(){
// 	return this.says()+' '+this.name+' '+this.says();
// };
// var myCat=new Cat('Henrietta');
// var says=myCat.says();
// var purr=myCat.purr(5);
// var name=myCat.get_name();
// document.writeln(says+' ',purr+' ',name);

// Function.method('inherits',function (Parent){
// 	this.prototype=new Parent();
// 	return this;
// });
// var Cat=function(nmae){
// 	this.nmae=name;
// 	this.saying='meow';
// }
// .inherits(Mammal)
// .method('purr',function (n){
// 	var i,s='';
// 	for(i=0;i<n;i+=1){
// 		if(s){
// 			s+='-';
// 		}
// 		s+='r';
// 	}
// 	return s;
// })
// .method('get_name',function(){
// 	return this.says()+' '+this.name+' '+this.says();
// });
// var myCat=new Cat('Henrietta');
// var name=myCat.get_name();
// document.writeln(name);

// Array.method('reduce',function(f,value){
// 	var i;
// 	for(i=0;i<this.length;i+=1){
// 		value=f(this[i],value);
// 	}
// 	return value;
// });
// var data=[4,8,15,16,23,42];
// var add=function(a,b){
// 	return a+b;
// };
// var mult=function (a,b){
// 	return a*b;
// };
// var sum=data.reduce(add,0);
// var product=data.reduce(mult,1);
// data.total=function(){
// 	return this.reduce(add,0);
// };
// total=data.total();
// document.writeln(sum+' ',product+' ',total);

// Array.dim=function (dimension,initial){
// 	var a=[],i;
// 	for(i=0;i<dimension;i+=1){
// 		a[i]=initial;
// 	}
// 	return a;
// };
// var myArray=Array.dim(10,0);
// document.writeln(myArray);

// var matrix=[
// [0,1,2],
// [3,4,5],
// [6,7,8]
// ];
// document.writeln(matrix[2][1]);

// Array.matrix=function(m,n,initial){
// 	var a,i,j,mat=[];
// 	for(i=0;i<m;i+=1){
// 		a=[];
// 		for(j=0;j<n;j+=1){
// 			a[j]=initial;
// 		}
// 		mat[i]=a;
// 	}
// 	return mat;
// }
// var myMatrix=Array.matrix(4,4,0);
// document.writeln(myMatrix[3][3]);
// Array.identity=function(n){
// 	var i,mat=Array.matrix(n, n, 0);
// 	for(i=0;i<n;i+=1){
// 		mat[i][i]=1;
// 	}
// 	return mat;
// };
// myMatrix=Array.identity(4);
// document.writeln(myMatrix[3][3]);

// var parse_url=/^(?:([A_Za_z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)
// (?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
// var url="http://www.ora.com:80/goodparts？q#fragment";
// var result=parse_url.exec(url);
// var names=['url','scheme','slash','host','port','path','query','hash'];
// var blanks='          ';
// var i;
// for(i=0;i<names.length;i+=1){
// 	document.writeln(names[i]+':'+
// 	blanks.substring(names[i].length),result[i]);
// }

// var parse_number=/^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
// var test=function(num){
// 	document.writeln(parse_number.test(num));
// };
// test('-1');
// test('123.45E-67');

// function make_a_matcher(){
// 	return /a/gi;
// }
// var x=make_a_matcher();
// var y=make_a_matcher();
// x.lastIndex=10;
// document.writeln(y.lastIndex);

// var a=['a','b','c'];
// var b=['x','y','z'];
// var c=a.shift();
// document.writeln(c,a);

// var n=[4,8,19,16,23,42];
// document.writeln(n.sort());
// n.sort(function(a,b){
// 	return a-b;
// });
// document.writeln(n);

// var m=['aa','bb','a',4,8,15,16,23,42];
// m.sort(function(a,b){
// 	if(a===b){
// 		return 0;
// 	}
// 	if(typeof a===typeof b){
// 		return a<b?-1:1;
// 	}
// 	return typeof a<typeof b?-1:1;
// });
// document.writeln(m);

// var by=function(name,minor){
// 	return function (o,p){
// 		var a,b;
// 		if(o && p && typeof o==='object'&& typeof p==='object'){
// 			a=o[name];
// 			b=p[name];
// 			if(a===b){
// 				return typeof minor==='function' ? minor(o,p):0;
// 			}
// 			if (typeof a=== typeof b){
// 				return a<b?-1:1;
// 			}
// 			return typeof a<typeof b?-1:1;
// 		}else{
// 			throw{
// 				name:'error',
// 				message:'Expected an object when sorting by '+name
// 			};
// 		}
// 	};
// };
// var s=[
// {first:'Joe',last:'Besser'},
// {first:'Moe',last:'Howard'},
// {first:'Joe',last:'DeRita'},
// {first:'Shemp',last:'Howard'},
// {first:'Larry',last:'Fine'},
// {first:'Curly',last:'Howard'}
// ];
// document.writeln(s.sort(by('last',by('first'))));

// var a=['a','b','c'];
// var r=a.splice(1,1,'ache','bug');
// document.writeln(a,' '+r)

// var a=['a','b','c'];
// var r=a.unshift('?','@');
// document.writeln(a,r);

// document.writeln(Math.PI.toString(35));
// document.writeln(Math.PI.toExponential(100));

// var a={member:true,hasownProperty:0};
// var b=Object.create(a);
// var t=a.hasOwnProperty('member');
// var u=b.hasOwnProperty('member');
// var v=b.member;
// var g=a.hasownProperty;
// document.writeln(t,u,v,g);

// String.method('entityify',function(){
// 	var character={
// 		'<':'&lt;',
// 		'>':'&gt;',
// 		'&':'&amp;',
// 		'""':'&quot;'
// 	};
// 	return function(){
// 		return this.replace(/[<>&"]/g,function(c){
// 			return character[c];
// 		});
// 	};
// }());
// alert("<&>".entityify());
// var text='<html><body bgcolor=linen><p>'+
// 'This is <b>bold<\/b>!<\/p><\/body><\/html>';
// var tags=/[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
// var a,i;
// a=text.match(tags);
// 	for(i=0;i<a.length;i+=1){
// 		document.writeln((' // [' + i + '] '+ a[i]).entityify());
// 	}

// var b=/&.+;/.test('frank &amp; beans');
// document.writeln(b);

// var name='Curly';
// var text='Mississippi';
// var p=text.lastIndexOf('ss');
//     // p=text.lastIndexOf('ss',3);
//     // p=text.lastIndexOf('ss',6);
// var initial=name.charCodeAt(0);
// var s='C'.concat('a','t');
// document.writeln(initial,s,p);

// var m=['AAA','A','aa','a','Aa','aaa'];
// m.sort(function(a,b){
// 	return a.localeCompare(b);
// });
// document.writeln(m);

// var oldareacode=/\((\d{3})\)/g;
// var p='(555)666-1212'.replace(oldareacode,'$1-');
// document.writeln(p);

// var text='and in it he says "Any damn fool could',
//     a=' |a|b|c| ',
//     c=text.slice(33),
//     b=text.length,
//     d=a.split(/\|/),
//     e=String.fromCharCode(67,97,116);
// document.writeln(e);

// function* next_id() {
//  for(let n=1;n<100;n++){
//     yield n;
// }
// }
// var f=next_id();
// f.next();
// for (var x of next_id()) {
//     console.log(x);
// }

// function is32Bit(c){
// 	return c.codePointAt(0)>0xFFFF;
// }
// console.log(is32Bit("𠮷"));
// console.log(is32Bit("a"));
// console.log(String.fromCodePoint(134071));

// let normalized=values.map(function(text){
// 	return text.normalize();
// });
// normalized.sort(function(first,second){
// 	if(first<second){
// 		return -1;
// 	}else if(first===second){
// 		return 0;
// 	}else{
// 		return 1;
// 	}
// });

// let text="𠮷";
// console.log(text.length);
// console.log(/^.$/.test(text));
// console.log(/^.$/u.test(text));

// function codePointLength(text){
// 	let result=text.match(/[\s\S]/gu);
// 	return result?result.length:0;
// }
// console.log(codePointLength("abc"));
// console.log(codePointLength("𠮷bc"));

// let msg="Hello world!";
// console.log(msg.startsWith("Hello",4));
// console.log(msg.endsWith("e",1));
// console.log(msg.includes("o",7));

// function passthru(literals,...substitutions){
// 	let result="";
// 	for(let i=0;i<substitutions.length;i++){
// 		result+=literals[i];
// 		result+=substitutions[i];
// 	}
// 	result+=literals[literals.length-1];
// 	return result;
// }
// let count=10,
//     price=0.25,
//     message=passthru`${count} items cost $${(count * price).toFixed(2)}.`;
// console.log(message);

// let value=5;
// function getValue(){
// 	return value++;
// }
// function add(first,second=getValue()){
// 	return first + second;
// }
// console.log(add(1,1));
// console.log(add(1));
// console.log(add(1));

// function checkArgs(...args){
// 	console.log(args.length);
// 	console.log(arguments.length);
// 	console.log(args[0],arguments[0]);
// 	console.log(args[1],arguments[1]);
// }
// checkArgs("a","b");

// function a(){}
// var b=function(){};
// console.log(a.name);
// console.log(b.name);

// let node={
// 	type:"Identifier",
// 	name:"foo"
// },
// type="Literal",
// name=5;
// function outputInfo(value){
// 	console.log(value===node);
// }
// outputInfo({type,name}=node);
// console.log(type);
// console.log(name);

// window.onload=function(){
// //window.onload = function(){ }是在页面中所有内容加载完成后才执行
// 	var fileInput=document.getElementById('test-image-file'),
// 	    info=document.getElementById('test-file-info'),
// 	    preview=document.getElementById('test-image-preview');

// 	    fileInput.addEventListener('change',function(){
// 	    	console.log('change...');//显示执行顺序1
// 	    	// preview.style.backgroundImage = 'url("../images/bg.jpg")';
// 	    	if(!fileInput.value){
// 	    		info.innerHTML='没有选择文件';
// 	    		return;
// 	    	}
// 	    	var file=fileInput.files[0];
// 	    	info.innerHTML='文件:'+file.name+'<br>'+
// 	    	               '大小:'+file.size+'<br>'+
// 	    	               '修改:'+file.lastModifiedDate;
// 	    	if(file.type !== 'image/jpeg' && file.type !== 'image/png' &&
// 	    	 file.type !=='image/gif' && file.type !=='image/jpg'){
// 	    		alert('不是有效的图片文件！');
// 	    		return;
// 	    	}

// 	    	var reader=new FileReader();
// 	    	reader.onload=function(e){
// 	    		console.log('reader.onload');//显示执行顺序3
// 	    		var data=e.target.result;
// 	    		preview.style.backgroundImage='url('+data+')';
// 	    	};
// 	    	console.log('wait onload');//显示执行顺序2
// 	    	reader.readAsDataURL(file);
// 	    });

// };

// function success(text){
// 	var textarea=document.getElementById('test-response-text');
// 	textarea.value=text;
// }
// function fail(code){
// 	var textarea=document.getElementById('test-response-text');
// 	textarea.value='Error code:'+code;
// }
// var request;
// if(window.XMLHttpRequest){
// 	requset = new XMLHttpRequest();
// }else{
// 	requset = new ActiveObject('Microsoft.XMLHTTP');
// }
// requset.onreadystatechange = function(){//状态发生变化时，函数被回调
// 	if (requset.readyState === 4){//成功完成
// 		//判断响应结果：
// 		if (requset.status === 200){
// 			//成功，通过responseText拿到响应的文本：
// 			return success(requset.responseText);
// 		}else{
// 			//失败，根据响应码判断失败原因：
// 			return fail(requset.status);
// 		}
// 	}else{
// 		//HTTP请求还在继续...
// 	}
// }
// //发送请求：
// requset.open('GET','http://www.sina.com.cn');
// requset.send();
// alert('请求已发送，请等待响应...');

function refreshPrice(data){
	var p=document.getElementById("test-response-text");
	p.innerHTML="当前价格："+
	data['0000001'].name+':'+
	data['0000001'].price+';'+
	data['1399001'].name+':'+
	data['1399001'].price;
}
function getPrice(){
	var
	   price=document.createElement('script'),
	   head=document.getElementsByTagName("head")[0];
	   price.src='http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
	   head.appendChild(price);
}

function getWeather(){
	let
	   url='https://www.apiopen.top/weatherApi?city=',
	   city=document.getElementById('city'),
	   newURL=url+city.value;
	   console.log(newURL);//显示应用api的路径
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
    	if(xhr.readyState === 4){
    		if(xhr.status === 200){
    			return success(xhr.responseText);
    		}else{
    			alert('失败！');
    		}
    	}
    }
    xhr.open('GET',newURL);
    xhr.send();
}
function success(data){
	let
	   weather = document.getElementById('weatherInfo');
	   weatherInfo = JSON.parse(data);
	   console.log(weatherInfo);//显示解析的JSON字符串
	if(weatherInfo.code === 200){
		weather.innerHTML = '查询成功' + '<br>' +
		                    '当前城市：' +weatherInfo.data.city+ '<br>' +
		                    '当前温度：' +weatherInfo.data.wendu+ '。C' + '<br>' +
		                    '气温：' +weatherInfo.data.forecast[0].high+
		                    weatherInfo.data.forecast[0].low+ '<br>' +
		                    '天气：' +weatherInfo.data.forecast[0].type+ '<br>' +
		                    '风向：' +weatherInfo.data.forecast[0].fengxiang+
		                    weatherInfo.data.forecast[0].fengli+ '<br>'
		                    '注意：' +weatherInfo.data.ganmao
	}else{
		weather.innerText = weatherInfo.msg;
	}
}