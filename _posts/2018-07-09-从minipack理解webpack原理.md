---
title: '从minipack理解webpack原理' 
layout: post
category: '技术'
published: true
tag: ['javascript','前端','webpack','minipack']
---

模块打包器的功能是将小块独立的代码编制成更大而复杂的可以运行在浏览器中的代码。这些小块的代码就是 一些 JavaScript 文件，其中用模块系统描述了彼此的依赖关系。

``` javascript

    let ID = 0; //设置全局变量 id

```

``` javascript

    /*
     * 提取单个模块的依赖信息 和 代码 组装成 模块信息对象。
     */
    function createAsset(filename) {
         //1. 读取 filename 指定的文件,获取 文件内容 content
         //2. 通过 babylon 解析 content 为 抽象语法树 ast
         //3. 创建 dependencies 数组，用以保存 此模块 依赖模块的文件的相对路径。
         //4. 通过遍历语法树 ast 找出 所有的  依赖声明（import、require语句）中的 路径，存入 dependencies 数组。
         //5. 给 当前 模块 设置 唯一标识 id = ID++;
         //6. 使用 babel 从当前 语法树 ast 中提取并转义成浏览器可运行的 代码 code
         //7. 组装并返回 模块信息对象
        {
            id,
            filename,
            dependencies,
            code
        }
    }

```

```javascript

/*
 * 从 entry 开始，提取每个模块的 依赖信息对象，并 构建 依赖图
 */
function createGraph(entry) {
        //1. 提取 入口文件 entry 的依赖信息，为 主资源 mainAsset
        //2. 创建 数组 queue = [mainAsset]
        //3. 遍历 数组 queue 对每个数组项 asset 执行以下操作：
        //    A. 给 asset  增加 属性 mapping = {}
        //    B. 获取 asset 所在的 目录 dirname
        //    C. 遍历 asset 的 dependencies 数组中的 相对路径 relativePath, 执行以下操作：
        //         a. 通过 dirname 获取 relativePath 的 绝对路径 absolutePath
        //         b. 通过 createAsset 提取 absolutePath 对应文件的 模块信息对象 赋值给 child
        //         c. 在 asset 的 mapping 中 增加一个 键值对：relativePath -> child.id
        //         d. 将 child 添加到 queue 尾部。
        //返回 queue
        // 此时 queue 中的 每个模块对象 数据结构为 
        {
            id,
            filename,
            dependencies,
            code,
            mapping
        }
}

```


```javascript

    /*
     * 通过 依赖图 进行打包，把所有模块代码和依赖关系打包成一个 大字符串
     */
    function bundle (graph) {
        // 此处的 graph 就是 上一步中的 queue
        //1. 创建 modules = ''
        //2. 遍历 graph 对 其每一项 mod 执行以操作，最终构建一个 字符串，如：
            `1: [
                    function (require, module, exports) {
                        // codes 
                    },
                    {
                        '../lib/an_module.js':  5,
                        '../another_lib/an_module.js': 8
                    }
             ],`
        //3.构建 自运行函数 
            
    }

```

自运行函数：bootstrap 函数，我把这叫做 “引线函数” ，标准称作 “引导程序”

```javascript

    `(function (modules) {
        function require(id) {
            const [fn, mapping] = modules[id];
            function localRequire(name) {
                return require(mapping[name]);
            }
            const module = { exports: {} };
            fn(localRequire, module, module.exports);
            return module.exports;
        }
        require(0);
    })({ ${modules} })`;

```

require(id) 函数的作用是，从之前生成好的 id -> [ function,dependenciesArray ] 字典中，通过参数id找到指定的 模块（函数，及其依赖信息）。
主要功能是：
    1. 把id对应的模块中 “向外暴露的公开字段（包括，属性和函数）”提取出来。
    2. 并向模块中注入require函数，使模块具有引入依赖的能力，
    3. 以此递归执行，从根到达每个树叶，全都执行。

此外，最终包裹成的这个 自执行 函数，中，手动调用了 require(0), id为0的模块是，构造依赖图时，整个程序的 入口 模块。从这里开启整个程序的执行。
