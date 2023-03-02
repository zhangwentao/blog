---
layout: post
category: "THE-LINUX-COMMAND-LINE"
tag: ['bash','linux','译']
title: '用SHELL的视角看世界'
---
# 展开(expansion)
每次在你在终端上敲好命令按下回车键的时候,bash在执行这些命令之前已经对你敲下的这些文字做了些处理.比如"\*",对shell来说可能具有很多含义.产生这种效果的处理过程,叫做*展开(expansion)*.在shell执行你输入的命令之前,它可以把你输入的东西,展开成另外一些东西.为了具体说明,我们先看一下 echo 这个命令.echo 是shell内置的命令,他的功能很简单,就是把其参数输出到标准输出(终端)上.

``` bash
wentao@wentao-laptop:~$ echo this is a test
this is a test
```
这个例子非常简单,传给echo命令的所有参数都被显示在终端上了,再看另外一个例子:

``` bash
wentao@wentao-laptop:~$ echo *
Desktop Documents Music Templates Public Videos
```

发生了什么呢?为什么echo没有把\*显示在终端上?这是因为在echo命令执行之前,shell把\*展开成了其他一些东西(这个例子中,是当前工作目录中的文件的文件名).当按下回车后,在执行命令之前,shell自动展开命令中所有的符合条件的字符,所以echo命令就压根没有见到过\*,它见到的只有被shell展开后的结果.

## 路径名展开
\*(通配符)的展开机制叫做"路径名展开(pathname expansion)".例如,我们在如下的工作目录中:

```bash
wentao@wentao-laptop:~$ ls
Desktop Pictures Templates Documents Music Public Videos test.txt
```

我们可以执行如下的展开:

```bash
wentao@wentao-laptop:~$ echo D*
Desktop Documents
```

或者:

```bash
wentao@wentao-laptop:~$ echo *s
Pictures Templates Documents Videos
```

甚至:

```bash
wentao@wentao-laptop:~$ echo [[:upper:]]* 
Desktop Pictures Templates Documents Music Public Videos
```

还有:

```bash
wentao@wentao-laptop:~$ echo /usr/*/*bin
/usr/bin/prezip-bin /usr/local/bin /usr/local/sbin /usr/share/libc-bin
```

注\*: 原文出自[『THE LINUX COMMAND LINE』](http://book.douban.com/subject/6806862/)

# 总结:
+ ```*``` (通配符)展开只涉及到路径名的展开
+ shell会尝试将包含\*的字符串进行路径名展开操作.这个过程大概是这样.shell把包含\*的字符串当作路径名,在文件系统中进行匹配,\*可以匹配路径中任意个任意连续的字符或字符串,如果文件系统中实际存在的路径名与包含\*的字符串成功匹配,匹配成功的路径名就被加入到展开的结果中,展开的结果中的每个路径用空格进行分隔.
