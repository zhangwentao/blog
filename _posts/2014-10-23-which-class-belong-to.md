---
title: "这个对象属于哪个类?"
layout: post
category: "技术"
tag: ['javascript','web前端']
---

javascript还没有支持**Class**关键字.但是使用js的原型继承机制可以模拟类似java中的类.

如下,创建了一个Car类并创建了一个此类的实例myCar

代码一:

```javascript

function Car() {
}

var myCar = new Car();

```

然后给Car类添加一个start()方法,实现方式就是在Car的prototype属性上增加start方法.

代码二:

```javascript

Car.prototype.start = function () {
		console.log('stating');	
	}
};

```

还有另外一种写法:

代码三:

```javascript

Car.prototype = {
	constructor: Car,
	start: function () {
		console.log('stating');	
	}
};

```

因为每个新创建的函数对象都会有一个默认的prototype属性,这个属性上会默认有一个constructor属性,这个constructor就是对此函数的引用.在代码一中添加如下代码,可验证这种说法:

```javascript

Car.prototype.constructor === Car; // true

```

代码三其实是使Car的prototype属性引用了一个新创建的对象.并在这个新的prototype中添加了引用Car函数constructor属性.据我的经验,如果不指定constructor这个属性的话,也不会对类的定义有影响.这个constructor没用吗?!引用大犀牛书中的一段话:

>构造函数的原型中存在预先定义好的constructor属性,这意味着对象通常继承的constructor均指代他们的构造函数.由于构造函数是类的"公共标识",因此这个constructor属性为对象提供了类.	

怎样说明这个属性还有点用呢? instanceOf 运算符可以检测一个对象时候是某个类的实例,比如有一个 obj 对象,可以这样检测它时候是Car类的实例.

```javascript

obj instanceOf Car;

```

但是,怎样能直接知道某个对象是哪个类的实例呢?,而不是判断它是不是某个类的实例.就像说,"我不想知道这种动物是不是兔子,我想知道它到底是什么动物".这时constructor就有用了.

```javascript

obj.constructor.name;

```

这样就取到了对象obj的构造函数的函数名,也就是类的"公共标识",如果这时这个constructor是缺失的话,就无从得知了.所以应该保证constructor的正确设置.
