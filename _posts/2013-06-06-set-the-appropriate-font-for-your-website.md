---
layout: post
title: 为你的网站设置合适的字体
category: "技术"
tag: ['css','字体']
---

在网页的设计中，对页面的各部分内容设置适合的字体很重要。尤其是在重阅读内容的页面更甚。恰到好处的字体相关的设置会给用户带来美好的阅读体验和享受。网页从无到有，基本上主要的过程是：设计，编码。放到现在的主题上，就是：选择字体，编写字体相关的css。

##选择字体
我觉得这一步，还是很需要平面媒体的设计排版理论和经验的。需要知道：哪些字体适合做［标题］、哪些字体适合做［正文］等等。如果对这些知识还欠缺的话不妨先做做功课。

###参考资料：
+ [各种字体类型的基础知识-维基百科](http://zh.wikipedia.org/wiki/%E8%A1%AC%E7%BA%BF%E4%BD%93#.E8.A5.BF.E6.96.B9.E5.AD.97.E4.BD.93.E4.B8.AD.E7.9A.84.E8.B5.B7.E6.BA.90)
+ [如何为你的网站选择最佳字体](http://www.pallasweb.com/fonts.html)

> Because computer screen resolutions vary, serif fonts can look blurred on many computers. The simplicity of sans serif fonts makes them easier to read on computers. They are the preferred choice for web site and PowerPoint presentations. 

虽然［衬线字体］在印刷出版中是最适合阅读的。但在电子设备上，由于各种设备的分辨率不同，其显示效果并不尽如人意。所以可以［非衬线字体］可能是你作为网页字体的理想选择。

[如何为你的网站选择最佳字体](http://www.pallasweb.com/fonts.html)一文中在传递网站形象，营造用户感受和技术需要三方面详细地说明了该如何选择适合的英文字体。对于如何选择中文字体也有参考价值。

##设置字体(CSS)
这一步就是“技术活儿”了。在《CSS 权威指南》 的[字体]章[字体匹配]节中详细说明了浏览器对每个应用了字体属性的元素进行字体匹配的过程。

其中有个例子，我觉得对如何选择中文字体很有帮助：
>你可能想指定在一个文档中使用 Times 或 任何其他 serif 字体：
>
>```css
>body { font-family: Times, serif;}
>```
>
>对每个元素，用户代理要检查该元素中的字符，并确定Times是否能提供匹配的字符。在大多数情况下，确实能做到这一点而没有任何问题。不过，假设段落中有一个汉字字符，Times 没有与这个汉字匹配的字符，所以用户代理必须忽略这个字符，或者查找另一个能满足该元素显示需求的字体。当然，任何西方字体都不太可能包含中文字符，不过假设存在这样一种字体（暂且称之为 AsiaTimes），用户代理显示该元素时可以使用这个字体——或者只是显示这个字符时使用该字体。因此，可能整个段落用AsiaTimes显示，或者段落中的所有内容都用Times显示，只有那个中文字除外，它用 AsiaTimes 显示。

这个例子告诉我们很重要的两点：

+ 任何西方字体都不太可能包含中文字符（但是反过来不一定成立，如：win-xp 预装的宋体中就包含英文字母）
+ 同一个元素中，中英文可以使用不同的字体显示（这点太重要了）

这样就可以分别为中英问选择适合的字体了，但是要注意在font-family中字体的顺序。例如：

```html
<p>english中文</p>
```

如果我们想要为这个p元素中的**英文**英字体使用**Times New Roman**字体，**中文**使用**宋体**，这样写css:

```css
p { font-family:'Times New Roman',宋体;}
```

font-family中的顺序反过来

```css
p { font-family:宋体,'Times New Roman';}
```

就不能达到想要的效果了，因为宋体同时包含中英文字符，中英文会全部用宋体显示(win-xp)。
