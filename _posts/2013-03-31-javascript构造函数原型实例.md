---
title: javascript 构造函数 原型 实例
layout: post
---

以下我将通过几个小试验来了解一个对象和它的构造函数、原型、它构造函数的prototype属性间的关系，以及一个通过new和构造函数创建的对象，从被创建到被构造函数初始话的过程。

####最简单的情况一：

首先，创建构造函数Person：
<pre class="brush:js">
function Person () {
}
</pre>

然后，给这个Person函数的prototype上添加属性：
<pre class="brush:js">
Person.prototype.sayHi = function(){
     return 'hello';
}
</pre>

最后，我们可以创建这个构造函数的实例：
<pre class="brush:js">
var p = new Person();
</pre>

这时，我们调用：
<pre class="brush:js">
p.sayHi();      // hello
</pre>

我们在p上可以调用p的构造函数Person的prototype上定义的方法。
<br>
####情况二：

首先，创建构造函数Person：
<pre class="brush:js">
function Person () {
}
</pre>

然后，我们就创建Person的实例：
<pre class="brush:js">
var p = new Person();
</pre>

这时，再给这个Person函数的prototype上添加属性：
<pre class="brush:js">
Person.prototype.sayHi = function(){
     return 'hello';
}
</pre>

最后，我们调用：
<pre class="brush:js">
p.sayHi();   //hello
</pre>

结果还是一样的。

以上两种情况说明了，当用Person构造函数创建实例p的时候，js解释器，已经自动把p的原型的引用『指向』了Person的prototype属性所引用的对象；当我们为Person的prototype属性添加了sayHi()方法之后,因为p的原型对象和Person的prototype属性是一个对象，所以，p也自然可以调用这个从其原型继承的sayHi()方法。
<br>

####情况三，再复杂一点：

首先，创建构造函数Person：
<pre class="brush:js">
function Person () {
}
</pre>

然后，我们就创建Person的实例：
<pre class="brush:js">
var p = new Person();
</pre>

之后，注意！现在做的会与上面有所不同：
<pre class="brush:js">
Person.prototype = {
     sayHi： function(){
             return 'hello';
     }
}
</pre>

最后，我们调用：
<pre class="brush:js">
p.sayHi();
//TypeError: Object Person has no 
//method 'sayHi' 
</pre>

p上没有sayHi这个方法。

接着：我们这样：
<pre class="brush:js">
var p2 = new Person();
p2.sayHi(); // hello
</pre>

这是为什么呢？会不会有这样的疑问：p的原型不是和Person的prototype属性指向的是同一个对象啊。注意！！！比较上边对Person的prototype属性的具体操作。发现了吧，对，情况三中，我们在创建p的时候，Person的prototype是js解释器自动创建的默认的原型对象。之后，的代码Person.prototype = {},使Person的prototype指向了一个新创建的对象。这时p的原型还是指向那个默认的原型对象，而Person的prototype已经是另外一个对象了。所以，我们给这个全新的Person的prototype对象，添加的sayHi（）方法是p继承不到的。
<br>
####情况四,再复杂一点：

我们直接在Person的构造函数里给Person创建一个全新的prototype对象。
<pre class="brush:js">
function Person() {
      Person.prototype = {
             sayHi: function(){
                     return 'hello';
             }
      }
}
</pre>

然后，创建实例：
<pre class="brush:js">
var p = new Person();
</pre>

调用：
<pre class="brush:js">
p.sayHi(); 
//TypeError: Object Person has no
//method 'sayHi' 
</pre>

为什么？不要着急，接着看，再创建一个实例
<pre class="brush:js">
var p2 = new Person();
</pre>

调用：
<pre class="brush:js">
p2.sayHi(); // hello
</pre>

####结论：
用new和构造函数创建对象时,过程是这样的：首先，js解释器，会创建一个实例对象，接着就会把这个原形对象指向其构造函数的prototype属性指向的对象，然后，才会调用其构造函数。如上例，当p被创建的时候，js解释器，把p的原型指向了Person的默认prototype对象，这基本上是一个空对象，所以p上没有sayHi方法。然后Person被调用了，其内部的代码被运行，Person的prototype属性被指向了一个全新的对象，这个对象上有一个sayHi()属性。接着我们又用Person函数创建了另外一个对象p2,这时，Person的prototype属性，已经在初始化p时被指向了一个包含sayHi()方法的对象。所以可以成功调用p2.sayHi().这种构造方法的写法是不建议的，因为每创建一个新的对象，其构造函数的prototype属性即被重新指定一个全新的对象，破坏了对象的继承。
