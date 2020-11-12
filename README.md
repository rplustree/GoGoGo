# GoGoGo

Summary of interview experience

## ByteDance

### JavaScript

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
- 立即执行函数，是否是一种闭包
- 伪调用
- js 继承如何实现
- 原型链
- ES6 寄生组合式
- ES6 继承 实例成员与静态成员处理
- 用 es6 实现实例继承
- 重排，重绘，合成层
- MDN 的 bind 函数 polyfill 怎么实现的
- map、{}、weakmap 区别
- [] == ![] ，[] == []
- new 操作符原理
- CommonJS 与 ES Module 差异
- 事件模型
- 两个同域的页面之间的通信
- encodeURI 和 encodeURIComponent 区别
- 暂时性死区的定义
- 如何判断一个对象为空（如何判断 symbol 对象为空）
- 事件代理
- 装箱拆箱，隐式转换
- V8 与 Libuv 事件循环的差异
- 尾递归
- typeof instanceof
- ajax 实现原理，以及和 fetch 的区别
- requestAnimationFrame 和 setInterVal 区别？用 rAF 实现
- 判断数组的方法
- map 有几个参数
- JS 加载阻塞 DOM 渲染问题，怎么解决
- 请说出以下代码打印的结果

  ```javascript
  log(1)
  setTimeout(() => {
    log(2)
  })
  Promise.resolve().then(() => {
    log(3)
  })
  var p = new Promise((res) => {
    log(4)
    setTimeout(() => {
      res(5)
      log(6)
    })
  })
  p.then((r) => {
    log(r)
  })
  ```

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

### FreamWork

- 什么是虚拟 DOM，批量更新了解么
- 收集依赖的过程和原理
- VUE 响应式如何实现
- 如何解除双向绑定
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
- Vuex 状态管理的理解，作用，原理
- 如何让组件使用 Vuex 里的 status（MapStatus）

### HTML

- HTML5 特性
- script 标签中 async 和 defer 的区别
- src 和 href 区别
- 块元素、行内元素有哪些？区别

### CSS

- CSS3 特性
- css 选择器优先级
- 三栏布局
- 圣杯布局
- 怎么理解负 margin
- 垂直居中
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
- cssModules
- GPU 加速开启（3d 属性）与原理（GPU）
- 伪类与伪元素差别
- 响应布局
- CSS 中哪些属性触发重绘？回流？

### Net

- OSI 五层（七层）协议
- get 和 post 区别
- HTTP 头设置什么可以获取用户 IP
- http 协议报文结构
- HTTP 状态码，200 fromcache 的情况，499
- http1.0,http2.0
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
- 三次握手
- 为什么有了 last-modified 还需要 etag
- HTTP 缓存 强缓存与协商缓存相关请求头与响应字段
- DNS 解析过程
- cookie setCookie 常见 cookie 属性
- session
- token 作用，可以改进的点，缺陷在哪（JWT）
- websocket 过程，websocket 丢包怎么解决
- https
- 服务端推送

### Code

- [斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)
- [最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)
- [最长上升子序列长度](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
- [最大连续子数组](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)
- [顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)
- [二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)
- [求二叉树的公共祖先节点](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)
- [和至少为 K 的最短子数组](https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/)
- [字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)
- [有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
- [栈的压入、弹出序列](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)
- [字符串转千分位](https://leetcode-cn.com/problems/thousand-separator/)
- [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
- [满足条件的子序列数目](https://leetcode-cn.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)
- [最小栈](https://leetcode-cn.com/problems/min-stack/)
- [大数相加](https://leetcode-cn.com/problems/add-two-numbers/)
- [通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)
- 输出 1-10000 所有回文数
- 手写 bind
- 实现一个{{}}语法
- 实现一个 sleep 函数
- 实现一个 promise.race
- 使用 Promise 实现 sleep(1000).then(()=>{console.log(2)}),先打印 1 过一秒打印 2
- 多行字符串转二维数组
- 页面所有节点数
- jsonp
- 深拷贝
- 防抖节流
- 柯里化
- 订阅发布模式
- 数组去重
- setTimeout 实现 fetch
- 基于 XHR 封装 fetch
- CSS 动画，div 每秒移动 100px
- CSS 画三角形
- 实现随机抽奖及优化 -统计一个字符串出现最多的字母：给出一段英文连续的英文字符串，找出重复出现次数最多的字母和它出现的次数
- 倒计时 截止时间 2020 年 11 月 11 日 0 点显示“剩余 XX 天 XX 时 XX 分 XX 秒”每秒刷新一次
- 二维数组 45° 输出
- 实现 fetchWithRetry(url, param, times, delay)到期结束，失败次数达到结束，不然就重试
- 三个异步 fetch 请求，只要有一个请求变成 resolve，那么就输出对应的 result，并结束。如果请求过程中出现错误，则需要在最后输出错误信息
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

### 性能优化，前端工程化

- 异步加载路由时，webpack chunk 的加载顺序怎么保证正确
- 优化首屏渲染的方式有哪几种
- Ssr 的渲染原理，与 csr 的区别
- eslint 的工作原理，怎么写一个 eslint rule
- Babel 原理，编译过程
- tree-shaking，为什么编译目标得是 ES6（ESM 静态优化机制）
- Webpack 性能优化
- Webpack 构建流程
- webpack 代码切割
- loader 与 plugin plugin 遵循的事件流机制

### 智力

- 老虎吃羊问题
- 13 黄 15 红 17 蓝，任意两种颜色加起来变成另外一种颜色（ps： 1 黄 + 1 红 = 2 蓝），请问可以吗，不可以的话为什么，有什么公式
- 一共有 25 枚硬币，有十枚正面朝上，你可以翻转硬币，但是不能用手感知到硬币是否正面朝上。现在闭着眼睛将硬币分成两堆，问如何操作才能让两堆硬币正面朝上的个数相同
- 三色龙（r,g,b）：每两只变色龙相遇会变成另一种，这三种满足什么数量关系可以最终全部变成一种颜色的

### 其他

- TS 泛型
- 大文件上传 分片（Blob 对象） 流式处理（Stream）
- 如何统计用户的浏览时长，要考虑到用户会切换页面，缩放页面等。多个点进行上报时，如何区分这些数据来自于同一个会话？
  > [https://yq.aliyun.com/articles/635301](https://yq.aliyun.com/articles/635301)
  - 统计 uv 与 pv
- 设计通用输入搜索组件
- 实现一个快照类并优化
- 文件上传
- 实现页面拖拽列表排序
- 实现上传图片实时浏览
- 循环 100000 个数，每隔 1s 调用一次回调函数
  > 可以用 setTimeout 模拟 setInterval 来实现
- 爆栈问题，如何解决
- 给一个递归等式，问如何设计
- JS 动态数组的实现
