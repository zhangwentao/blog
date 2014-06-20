---
layout: post
category: "技术"
tag: ['javascript','设计模式']
---

使用javascript实现单例模式,由于上学时候学习的最多就是java,后来又做了很长时间的actionscript3,所以,在实现这个模式的时候,应该难免具有前两种语言的风格.如下是我用js实现的单例.

```javascript

function SingleTon() {
	throw new Error("this is a singleTon,please use getInstance method to get it's instance.");
}

SingleTon.prototype = {
	constructor : SingleTon,
	name : 'singleTon',
	sayHi : function() {
		console.log('hi! I am ' + this.name);
	}
}

SingleTon.getInstance = function () {
	if ( !SingleTon.instance ) {
		var tmp = function(){};
		tmp.prototype = SingleTon.prototype;
		SingleTon.instance = new tmp();
	} 
	return SingleTon.instance;
}

```

可以用如下代码,进行测试:

```javascript

var a = SingleTon.getInstance();
a.sayHi();

var b = SingleTon.getInstance();
b.sayHi();
b.name = 'jack';
b.sayHi();
a.sayHi();

var e = new SingleTon();

```

输出如下: 

```javascript

hi! I am singleTon 
hi! I am singleTon 
hi! I am jack 
hi! I am jack 
Uncaught Error: this is a singleTon,please use getInstance method to get it's instance. 

```
