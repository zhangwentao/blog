---
title: "还是那条船吗?"
layout: post
category: "技术"
tag: ['js']
---

今天,再读<<大犀牛>>时,在Chapter 3: Types, Values, and Variables这章,文中说到:

>They can also be categorized as
>mutable and immutable types. A value of a mutable type can change. Objects and arrays
>are mutable: a JavaScript program can change the values of object properties and array
>elements. Numbers, booleans, null , and undefined are immutable—it doesn’t even
>make sense to talk about changing the value of a number, for example. Strings can be
>thought of as arrays of characters, and you might expect them to be mutable. In Java-
>Script, however, strings are immutable: you can access the text at any index of a string,
>but JavaScript provides no way to alter the text of an existing string.

曾经,不太明白,也就不太容易记住,再读的时候,忽然想到一个小故事:

>如果有一艘大木船,你一块一块的把组成船身的木板都替换成新的木板,那么当把所有木板都替换完之后,这艘船还是原来那艘吗?

我觉得,如果是把船上的不光是木板,包括船的框架都替换了,那么这就不是原来那条船了.如果只是替换了一部分,那么还是那条船.

类比以下,因为程序中的值在计算机里是被存储在内存里的.如果,在保证不把存储值需要的内存不完全写入新的值的情况下,那么这个值还是原来的那个值,就是说这个值虽然发生改变了,但它还是那个值.

如:字符串,如果要改变它,在js中也就是重写了存储这个字符串的所有内存.数字,和布尔值也是这样.

但是,object类型的值,就不一样,因为object是一个值的集合,它拥有指向其字段的所有引用,如果你改变了这些字段的值,或者增加或者删除了一些字段,那么这改变的只是对象拥有的引用,而并没有完全重写这个对象.也就是说,对象类型的值,就是那个没有被完全替换所有东西的那艘木船.

看不明白吧,其实我也不太明白,所以,写不太明白.

