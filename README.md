# GoGoGo

Summary of interview experience

## ByteDance

### JavaScript

- EventLoop 看代码

  ```javaScript
  async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
  }
  async function async2() {
  console.log('async2');
  }
  console.log('script start');
  setTimeout(function () {
  console.log('setTimeout');
  }, 0);
  async1();
  new Promise(function (resolve) {
  console.log('promise1');
  resolve();
  }).then(function () {
  console.log('promise2');
  });
  console.log('script end');
  ```

- 宏任务与微任务
- 闭包概念，应用（防抖节流）
- 每隔一秒输出数组一项
- async/await 和 Promise 实现，await 返回什么
- 输入 url 到返回内容发生了什么
- webpack 了解么
- 跨域方式，图片跨域，cookie 跨域
- token
- 怎么给数据结构添加迭代器
- BOM 和 DOM 的区别
- 线程和进程
- 多页面之间的通信
- cookie 和 localstorge 的区别
- apply，call 和 bind 区别，MDN 文档提供的 bind 函数 polyfill 实现细节
- echar 使用的是 svg 还是 cavas
- 正则中的 i 具体做了什么事
  > 把搜索修改为大小写不敏感
- instanceof typeof 以及 toString
- arguments 是数组吗？若不是，如何将它转化为真正的数组
- js 继承如何实现
- 请说出以下代码打印的结果

  ```javascript
  if ([] == false) {
    console.log(1)
  }
  if ({} == false) {
    console.log(2)
  }
  if ([]) {
    console.log(3)
  }
  if ([1] == [1]) {
    console.log(4)
  }
  ```

- 代码运行结果
- tree-shaking

  ```javascript
  var a = function () {
    this.b = 3
  }
  var c = new a()
  a.prototype.b = 9
  var b = 7
  a()
  console.log(b)
  console.log(c.b)
  ```

- 重排，重绘，合成层
- MDN 的 bind 函数 polyfill 怎么实现的
- map、{}、weakmap 区别
- [] == ![] ，[] == []
- new 操作符原理
- 事件模型
- 两个同域的页面之间的通信
- 如何统计用户的浏览时长，要考虑到用户会切换页面，缩放页面等。多个点进行上报时，如何区分这些数据来自于同一个会话？
  > [https://yq.aliyun.com/articles/635301](https://yq.aliyun.com/articles/635301)

### freamWork

- 什么是虚拟 DOM，批量更新了解么
- 收集依赖的过程和原理
- VUE 响应式如何实现
- 如何实现数组的监听，为什么 push 这些数组操作可以实现
- proxy 的优势
- vue 的数组方法可以实现吗？为什么这些 push 的数组方法可以而直接令 arr[x] = xx 不可以呢？
- vue 自定义指令
- nextTick
- composition API
- 浏览器路由，hashchage 了解么
- 组件通信
- v-model 的原理，Vue 实例是怎么拿到 data 属性的
- 原型链
- diff 算法,Vue 和 react 的 diff 算法的区别
- Vue 和 React 的不同点

### HTML

- script 标签中 async 和 defer 的区别

### CSS

- css 选择器优先级
- 三栏布局
- flex
- 用 css 画一个扇形
- CSS 实现骰子 3 的那面
- 多行超出显示省略号
- rem 和 em 原理
- BFC 以及触发方式，怎么解决自适应问题的
- 垂直居中
- 样式重叠怎么解决
- 移动端和 pc 端布局方案
- 盒模型 content-box 和 border-box
- display:none;visibility: hidden;opacity:0 的区别
- transition 和 animation，哪一个性能更好

### Net

- OSI 五层（七层）协议
- HTTP 头设置什么可以获取用户 IP
- HTTP 状态码
- CSRF
- XSS
- TCP 和 UDP 区别
- HTTP 请求的幂等概念的理解以及常见请求的幂等性
- option 预请求
- 跨域的同时携带 cookie
- 知道 referer 头部吗，直接请求服务器时 refer 是多少，在 CSRF 中的作用
- HTTP 和 Websocket 的联系
- 请求头常见字段
- catheControl 的值，服务端拿什么与客户端进行通信

### CODE

- 数据扁平化
- 手写 bind
- 最长上升子序列长度
- 最大连续子数组
- 顺时针打印二维矩阵
- 判断二叉树从父节点到字节点是否有一条和为 sum 的路径
- 实现一个{{}}语法
- 实现发布订阅模式，具有以下公开方法

  ```javascript
  class EventEmit {
    constructor(elem, props) {
      // your code
    }
    // 注册事件的回调函数
    on(event, callback) {
      // your code
    }
    // 注册事件的回调函数，只执行一次
    once(event, callback) {
      // your code
    }
    // 触发注册的事件回调函数执行
    emit(event, ...args) {
      // your code
    }
    // 删除一个回调函数
    remove(event, callback) {
      // your code
    }
  }
  ```

- 实现一个 sleep 函数
- 判断两个单词是否异位词
- 实现一个 promise.race
- 和至少为 K 的最短子数组
- 字符串所有排列的可能
- 多行字符串转二维数组
- 页面所有节点数
- jsonp
- 深拷贝
- 防抖节流
- 判断堆栈的出栈顺序是否合理
- 倒计时 截止时间 2020 年 11 月 11 日 0 点显示“剩余 XX 天 XX 时 XX 分 XX 秒”每秒刷新一次
- 求二叉树的公共祖先节点
- 字符串转千分位
- 实现深搜索，例如对于这样一个数组 city 和指定的 code，输出对应的 name：

  ```javascript
  var city = [
    {
      code: 0,
      name: 'beijing',
    },
    {
      code: 211,
      name: 'jiangsu',
      children: [
        {
          code: 212,
          name: 'nanjing',
        },
      ],
    },
  ]
  function search(code) {
    // code
    return name
  }
  ```

- 实现一个 foo 函数, 返回自身被调用的次数

  ```javascript
  a = foo()
  b = foo()
  c = foo()
  // 此时  a 的值是1;b的值是2;c的值是3;
  foo.reset()
  d = foo() // d的值是1, 说明foo重新开始计数;
  ```

  > ```javascript
  > const foo = (function () {
  >   let counter = 1
  >   function increase() {
  >     return counter++
  >   }
  >   increase.reset = function () {
  >     counter = 1
  >   }
  >   return increase
  > })()
  > ```

- 实现一个 get 函数，用来获取一个深嵌套对象中的值

  ```javascript
  var object = { a: [{ b: { c: 3 } }] }
  get(object, 'a[0].b.c')
  //应该返回 3
  ```

### 智力

- 老虎吃羊问题
- 13 黄 15 红 17 蓝，任意两种颜色加起来变成另外一种颜色（ps： 1 黄 + 1 红 = 2 蓝），请问可以吗，不可以的话为什么，有什么公式
