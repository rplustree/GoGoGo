# GoGoGo

Summary of interview experience

## ByteDance

### JavaScript

- EventLoop 看代码

  > ```javaScript
  > async function async1() {
  > console.log('async1 start');
  > await async2();
  > console.log('async1 end');
  > }
  > async function async2() {
  > console.log('async2');
  > }
  > console.log('script start');
  > setTimeout(function () {
  > console.log('setTimeout');
  > }, 0);
  > async1();
  > new Promise(function (resolve) {
  > console.log('promise1');
  > resolve();
  > }).then(function () {
  > console.log('promise2');
  > });
  > console.log('script end');
  > ```

- 宏任务与微任务
- 闭包概念，应用（防抖节流）
- 每隔一秒输出数组一项
- async/await 和 Promise 实现，await 返回什么
- 输入 url 到返回内容发生了什么
- Diff 算法
- webpack 了解么
- 跨域方式
- token
- 怎么给数据结构添加迭代器
- BOM 和 DOM 的区别
- 线程和进程
- 多页面之间的通信
- cookie 和 localstorge 的区别
- apply，call 和 bind 区别
- echar 使用的是 svg 还是 cavas
- 正则中的 i 具体做了什么事
  > 把搜索修改为大小写不敏感
- instanceof typeof 以及 toString
- arguments 是数组吗？若不是，如何将它转化为真正的数组
- js 继承如何实现
- 请说出以下代码打印的结果

  > ```javascript
  > if ([] == false) {
  >   console.log(1)
  > }
  > if ({} == false) {
  >   console.log(2)
  > }
  > if ([]) {
  >   console.log(3)
  > }
  > if ([1] == [1]) {
  >   console.log(4)
  > }
  > ```

- 代码运行结果

  > ```javascript
  > var a = function () {
  >   this.b = 3
  > }
  > var c = new a()
  > a.prototype.b = 9
  > var b = 7
  > a()
  > console.log(b)
  > console.log(c.b)
  > ```

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

### HTML

- script 标签中 async 和 defer 的区别

### CSS

- css 选择器优先级
- 三栏布局
- 用 css 画一个扇形
- CSS 实现骰子 3 的那面
- 多行超出显示省略号
- rem 和 em 原理
- BFC 以及触发方式，怎么解决自适应问题的
- 垂直居中
- 样式重叠怎么解决

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
- jsonp
- 深拷贝

### 智力

- 老虎吃羊问题
