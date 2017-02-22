---
title: '为什么this === window' 
layout: post
category: '技术'
tag: ['javascript','前端']
---

我的猜想

```javascript
var window = new Window();

function topLevelFunction(window) {

/*
 our code is written there by JavaScript's internal implementation.
 so, the code below run correctly.
*/

	window === this;  // => true

}

topLevelFunction.call(window,window);
