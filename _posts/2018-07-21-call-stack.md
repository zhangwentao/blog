---
title: '调用栈' 
layout: post
category: '技术'
published: true
tag: ['javascript','基本概念']
---

在学习JavaScript的事件循环（event loop）的过程中，遇到了调用栈（call stack）的概念。阅读了若干资料，对此概念感觉更加清晰了。在此记录并分享一下自己的理解。

# 强调一下

首先，需要“咬文嚼字”一下，“调用栈”，应该更加精确的描述为“函数调用栈”，因为此概念所涉及的就是关于函数调用过程的，而不其他代码的执行过程，所以强调一下。

# 解释器对函数调用的大概过程

+ 当代码调用一个函数，解释器将此函数放入 call stack 栈顶，然后开始执行此函数。

+ 任何在函数中调用的函数，会被继续堆砌到 call stack 栈顶，然后执行。（每当遇到函数调用此过程会不断进行）。（此过程会构造出一个 栈（LIFO））。

+ 任何一个函数执行完毕后，都会被从 call stack 栈顶移除。解释器会回到此函数被调用的地方继续执行。（每当函数执行完毕，此过程会不断进行）

+ 函数执行过程中构建的call stack （栈） 如果超过，解释器定义的栈的容量，会出现堆栈溢出错误（stack overflow）。

# 参考资料
> https://developer.mozilla.org/en-US/docs/Glossary/Call_stack