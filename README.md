# gogogo

Summary of interview experience

## ByteDance

---

### JavaScript

- 宏任务与微任务
- 闭包概念，应用（防抖节流）
  > 函数可以记住并访问所在的词法作用域时，即使函数在当前词法作用域之外执行。  
  > 防抖节流，函数柯里化，计时器，模块化。
- async/await 和 Promise 实现，await 返回什么
- 输入 url 到返回内容发生了什么
- 跨域方式，图片跨域，cookie 跨域
- 怎么给数据结构添加迭代器

  > 给数据结构添加 [Symbol.iterator] 方法，该方法返回一个遍历器对象，是 next 方法，next 执行返回当前成员信息，包含 value 和 done
  >
  > ```javaScript
  > Object.prototype[Symbol.iterator] = function () {
  >    const keys = Object.keys(this);
  >    let index = 0;
  >    return {
  >        next: () => {
  >            return {
  >                value: this[keys[index++]], // 每次迭代的结果
  >                done: index > keys.length // 迭代结束标识 false停止迭代，true继续迭代
  >            };
  >        }
  >    }
  > }
  > ```

- BOM 和 DOM 的区别
- 线程和进程
  > 进程是 CPU 资源分配的最小单位，线程是 CPU 调度的最小单位
- cookie 和 localstorge 的区别
- apply，call 和 bind 区别
  > 都可以改变函数运行时上下文。apply 接受 this 和一个参数数组，call 接受 this 和若干个参数。  
  > bind 参数传递类似 apply，但返回一个函数。
- Echarts 使用的是 svg 还是 canvas
  > canvas
- 正则中的 i 具体做了什么事
  > 把搜索修改为大小写不敏感
- instanceof typeof 以及 toString
- arguments 是数组吗？若不是，如何将它转化为真正的数组

  > 是类数组（有 length 属性）
  >
  > - Array.prototype.slice.call(arrLike)
  > - Array.from(arrLike)

- 立即执行函数（IIFE），是否是一种闭包
  > 不是，函数并不是在本身词法作用域之外执行的。
- js 继承如何实现
- 原型链
- ES6 寄生组合式
- ES6 继承,实例成员与静态成员处理
- 用 es6 实现实例继承
- 重排，重绘，合成层
- MDN 的 bind 函数 polyfill 怎么实现的
- map、{}、weakmap 区别
  > map 可以用任意类型作为键名，对象只可以用 string 和 symbol，weakmap 只接受对象作为键名，且对该对象是弱引用。
- [] == ![] ，[] == []
  > true, false。[] == []比较的是地址，不是同一个对象所以是 false。逻辑非的优先级高于相等操作符，所以先![]是 false
- new 操作符原理
- CommonJS 与 ES Module 差异

  > - CommonJS 输出的是一个值的拷贝，ES6 模块输出的是值的引用
  > - 前者是运行时加载，后者编译时输出接口
  > - 未完待续

- 事件模型
- 两个同域的页面之间的通信

  > - 监听 localstorage 的 onstorge 事件（只有非当前页面修改 localstorge 才会触发）
  > - postmessage
  > - iframe
  >   - window.location.hash
  >   - window.name
  >   - 互相调用 js

- encodeURI 和 encodeURIComponent 区别
  > encodeURIComponent 比 encodeURI 编码的范围更大。编码整个 url 用后者，部分 url 用前者
- 暂时性死区的定义
  > 只要块级作用域内存在 let 命令，它所声明的变量就绑定这个区域，不再受外部的影响，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
- 如何判断一个对象为空（如何判断 symbol 对象为空）
- 事件代理
- 装箱拆箱，隐式转换原则
  >
- V8 与 Libuv 事件循环的差异
- 尾调用，尾递归，尾调用优化
  > 当函数执行的最后一步是返回另一个函数的调用就叫尾调用，当尾调用自身就是尾递归。不需要外层函数调用记录时，在最后 return 另一个函数，只保留内层函数的调用记录即为尾调用优化。
- typeof instanceof
  > js 不同的对象在底层存储为为二进制，前三位存储其类型信息。  
  > instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
- ajax 实现原理，以及和 fetch 的区别
  > ajax 核心是 XMLHttpRequest 对象，存在回调地狱  
  > fetch 是 XMLHttpRequest 的替代方案，脱离了 XHR，提供了丰富的 API,更加底层化，语法更简单，基于 promise 实现
- requestAnimationFrame 和 setInterVal 区别
  > requestAnimationFrame 方法与屏幕刷新率保持同步，利用这个刷新频率进行页面重绘。当页面处于未激活的状态下，该页面的屏幕绘制任务也会被系统暂停，requestAnimationFrame 也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了 CPU 开销。  
  > 使用 setInterval 实现动画容易失帧。
- 判断数组的方法

  > - array instanceof Array
  > - array.constructor === Array
  > - array.\_\_proto\_\_.constructor === Array
  > - Array.isArray(array)
  >
  > - ```javascript
  >   if (!Array.isArray) {
  >     Array.isArray = function (arg) {
  >       return Object.prototype.toString.call(arg) === '[object Array]'
  >     }
  >   }
  >   ```

- map 函数有几个参数
  > callback(**currentValue**,index,array),this  
  > 返回由原数组每个元素执行回调函数的结果组成的新数组，不会对空数组检测
- JS 加载阻塞 DOM 渲染问题怎么解决

  > - 放在代码最后延迟加载
  > - defer 延迟，在文档解析完成开始执行
  > - async 异步加载
  > - 动态创建 DOM

- 请说出以下代码打印的结果

  ```javascript
  console.log(1)
  setTimeout(() => {
    console.log(2)
  })
  Promise.resolve().then(() => {
    console.log(3)
  })
  var p = new Promise((res) => {
    console.log(4)
    setTimeout(() => {
      res(5)
      console.log(6)
    })
  })
  p.then((r) => {
    console.log(r)
  })
  ```

  > 1、4、3、Promise、2、6、5

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

  > 1，3

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

  > 3  
  > 3  
  > 执行 a()时将全局 b 赋值为 3

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

  > script start、async1 start、async2、promise1、script end、async1 end、promise2、setTimeout

---

### FreamWork

- VUE 响应式如何实现，收集依赖的过程和原理
  > **数据监听 + 发布订阅模式**  
  > 1.依赖收集 2.数据初始化，被 Object.defineProperty()设置 getter 和 setter 函数，被响应式的属性都有 Dep 对象 3.组件在挂载阶段，调用 mountComponent 方法会新建 Watcher 对象,每个组件对应一个 Watcher
  > 4.Watcher 在构造函数中会触发组件的\_render()函数（\_render() 是由 Watcher 代替组件执行的），此函数会触发数据的 getter()方法，执行 dep.depend(),相当于执行了当前 Watcher 的 addDep()，在 addDep()中 Watcher 保存了该 dep 对象，而且执行了 dep 的 addsub()订阅方法 5.派发更新 6.修改 data 的响应式属性会触发该属性的 setter 方法，在 setter 中触发 dep.notify(),依次调用依赖该属性的 Vue 组件的更新函数
- 如何解除双向绑定
  > 数据深拷贝
- v-model 的原理，Vue 实例是怎么拿到 data 属性的
  > 是个语法糖，在给 input 元素添加 v-model 属性时，默认会把 value 作为元素的属性，然后把 input 事件作为实时传递 value 的触发事件。  
  > vue 在实例化的时候，在 getData 方法中用 call 修改了指针，使 data 指向了 vm 实例
- 如何实现数组的监听，为什么 push 这些数组操作可以实现？
- proxy 的优势
- vue 的数组方法可以实现响应式吗？为什么这些 push 的数组方法可以而直接令 arr[x] = xx 不可以呢？
  > 因为没有重写下标属性的 get 和 set 方法
- vue 自定义指令
- nextTick()
  > 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
- composition API
- 什么是虚拟 DOM，批量更新了解么
- diff 算法，Vue 和 react 的 diff 算法的区别
  > 1. 数据改变时，setter 方法通知 Watcher，调用 patch 给真实的 DOM 打补丁
  > 2. patch 会先判断 sameNode，值得比较就执行 patchVnode
  > 3. patchVnode 只比较同层级的节点，执行 updateChildren 函数比较子节点
  > 4. updateChildren 取出新旧 Vdom 的子节点取出，分别有头尾两个指针 oldStartIdx、newStartIdx、oldEndIdx、newEndIdx，当 oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx 时，有四种比较情况，每次比较完后指针移动：
  >
  >    - 旧头和新头 sameVnode，patchVnode
  >    - 旧尾和新尾 sameVnode，patchVnode
  >    - 旧头和新尾 sameVnode，dom 第一节点移到最后
  >    - 旧尾和新头 sameVnode，dom 最后节点移到开头
  >
  > 5. 若未能匹配到以上规则，创建一张旧节点的 key 的 map 表，拿新节点的 key 去查找。如果没找到，新建元素节点，如果有的话，判断是否是 sameVnode，是的话 patchVnode 并 insertBefore ,否的话创建新元素 6.旧节点循环先完的话，add 剩下的新节点，新节点先循环完的画，删除剩余的旧节点
- 浏览器路由，hashchage 了解么
- 组件通信
  > 父子组件：prop/$emit,$children/$parent(不推荐),refs,  
  > 隔代组件：provide/inject,$attrs/$listeners  
  > 兄弟组件：eventBus,Vuex
- Vue 和 React 的不同点
  > 监听数据变化的原理不同  
  > 数据流不同  
  > 功能组合方式（HOC 和 mixins）  
  > 组件通信的区别  
  > 模板渲染方式  
  > Redux 和 Vuex
- Vuex 状态管理的理解，作用，原理
- 如何让组件使用 Vuex 里的 status
  > mapState
- Vue 生命周期
  > 在 beforeCreat 和 created 之间进行数据观测，绑定数据响应式变化  
  > 在 created 和 beforeMount 之间，先判断是否有 el(挂载节点)存在，否的话直到 vm.$mount(el)执行，然后判断是否存在 template 参数，存在的话编译为 render 函数，否的话将外部的 HTML 做为 template 编译成 render 函数  
  > 在 beforeMount 和 mounted 之间，用 $el 替代 el(内存中编译好的模板内容替换页面内容)

---

### HTML

- HTML5 特性
  > - 语义化标签，eg.
- script 标签中 async 和 defer 的区别
  > async 会异步加载执行 js，不按顺序执行。defer 会异步加载 js，等所有元素解析完成，在 DOMContentLoaded 事件触发之前完成。
- src 和 href 区别
  > src 引入并替换当前标签，href 在当前文档和资源之间确立联系
- 块元素、行内元素有哪些？区别

---

### CSS

- CSS3 特性
- css 选择器优先级
- 三栏布局
  > 浮动，content 在最后，两侧浮动定宽  
  > 定位布局  
  > flex  
  > table 布局,父元素 disply: table，子元素 display: table-cell,左右定宽  
  > grid 布局，display: grid; grid-template-columns: 100px 1fr 100px;
- 两栏布局
  > float + margin-left  
  > 相对定位  
  > flex
- 圣杯布局
- 怎么理解负 margin
- 垂直居中
- flex
- 用 css 画一个扇形
- CSS 实现骰子 3 的那面
- 多行超出显示省略号
- rem 和 em 原理

  > em 作为 font-size 的单位时，其代表父元素的字体大小，em 作为其他属性单位时，代表自身字体大小  
  > rem 作用于非根元素时，相对于根元素字体大小；rem 作用于根元素字体大小时，相对于其出初始字体大小，让 html 字体大小一直等于屏幕宽度的百分之一，在页面 domReady、resize 和屏幕旋转中设置
  >
  > ```javaScript
  > document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px'`
  > ```

- BFC 以及触发方式，怎么解决自适应问题的
- 垂直居中
- 样式重叠怎么解决
- 移动端和 pc 端布局方案
- 盒模型 content-box 和 border-box
  > 标准盒模型 width = content width,实际大小 = width + padding + border
  > 怪异盒模型 盒子实际大小 = width = content width + padding + border
- display:none/visibility: hidden/opacity:0 的区别
  > display:none 隐藏后不占据空间，引起重排重绘，不会被继承，无法触发绑定事件。  
  > visibility: hidden 和 opacity:0 占据空间，只会重绘，可被继承，opacity:0 邦定事件可以触发，可以用于 transition
- transition 和 animation，哪一个性能更好
- cssModules
- GPU 加速开启（3d 属性）与原理（GPU）
- 伪类与伪元素差别
- 响应布局
- CSS 中哪些属性触发重绘？回流？

---

### Net

- OSI 五层（七层）协议
  > 物理层，数据链路层，通信层，传输层，（会话层，状态层），应用层
- get 和 post 区别
  > 前者获取数据，后者提交修改数据  
  > 前者参数会附在 url 上明文传输，有长度限制，后者放在请求体中，无限制  
  > 前者可收藏为书签可以被缓存，参数被保存在历史记录中
  > 前者是幂等请求
- HTTP 请求的幂等概念的理解以及常见请求的幂等性
- HTTP 头设置什么可以获取用户 IP
  > X-Forwarded-For:client,proxy1,proxy2
- http 协议报文结构
  > 请求头：方法 url 版本  
  > 请求体  
  > 请求正文  
  > 响应头：版本 响应码 原因短语  
  > 响应体  
  > 响应正文
- HTTP 状态码 200 fromcache 的情况，499
  > 命中强缓存，cache-control:max-age=XXX,Expries:XXX（会被前者覆盖）  
  > 499 是服务端处理时间过长，客户端主动关闭了连接
- 为什么有了 last-modified 还需要 etag
  > 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新 GET  
  > 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说 1s 内修改了 N 次)，If-Modified-Since 能检查到的粒度是 s 级的，这种修改无法判断(或者说 UNIX 记录 MTIME 只能精确到秒)  
  > 某些服务器不能精确的得到文件的最后修改时间
- HTTP 缓存，强缓存与协商缓存相关请求头与响应字段
  > 强缓存：Expires,cache-control  
  > 协商缓存：上次响应头 Etag 和 Last-Modified，对应请求头 If-None_Match,If-Modified-Since
- cache-control 的值
  > public: 所有内容都被缓存  
  > private: 内容只被缓存在私有缓存中  
  > no-cache: 不直接使用缓存，要协商缓存  
  > no-store: 所有内容都不会被保存在缓存中或者 Internet 临时文件中  
  > max-age
- http1.0,http2.0

  > - 二进制分帧传输
  > - https
  > - 服务端推送
  > - 首部压缩(HPACK)
  > - 请求优先级
  > - 多路复用

- CSRF
- XSS

  > 分为存储型，反射型和 DOM 型，反射型只执行一次，持久性会存入数据库造成更大危害  
  > 防范手段：
  >
  > - 对标签过滤
  > - 纯前端渲染
  > - 对常见的符号进行编码，例如<>，&，/之类

- TCP 和 UDP 区别
  > TCP 面向链连接，只能一对一通信，UDP 无连接不可靠传输，且支持多种交互通信  
  > TCP 面向字节流，UDP 面向报文  
  > TCP 首部开销大，UDP 只有 8 字节  
  > TCP 用于可靠传输应用，比如文件传输，UDP 适用于实时应用
- option 预请求
- 跨域的同时携带 cookie
  > Access-Control-Allow-Credentials:true  
  > Access-Control-Allow-Origin 为单一域名  
  > 请求属性 withCredentials = true
- 知道 referer 头部吗，直接请求服务器时 referer 是多少，在 CSRF 中的作用
  > 引荐网站的地址，在点击网页的链接，发送表单，加载静态资源会发送 referer 字段，直接输入网址或者点击书签不会发送。  
  > 使用 rel="noreferrer"不会发送该字段，或者设置 Referrer Policy 首部  
  > 验证 referer 可以有效的防止 CSRF
- 请求头常见字段
- 三次握手
  > 1. 客户端向服务端发送 SYN 报文（SYN 标志位为 1），指明自己的 ISN（初始 seq = x），客户端处于 SYN_SEND 状态
  > 2. 服务端收到后发送 SYN 报文，指定自己的 ISN（seq = y），同时将收到的 x+1 作为 ACK 确认发送给客户端，此时服务端处于 SYN_REVD 状态
  > 3. 客户端将服务端的 y+1 作为 ACK 发送给服务端，收到后双方都处于 ESTABLISHED 状态
- 四次挥手
  > 1.客户端发起关闭请求，发送 FIN 报文，指明 seq = x，处于 FIN_WAIT1 状态 2.服务端收到后发送 ACK（ack = x+1），处于 CLOSE_WAIT 状态 3.服务端发送完数据后，发送 FIN（seq = y）和 ACK（ack = x+1）,处于 LAST_ACK 状态 4.客户端发送 ACK(seq = x+1，ack = y+1),进入 TIME_WAIT 状态，经过 2MSL（最长报文段寿命，默认为两分钟） 后，客户端 CLOSED，服务端收到后 CLOSED
- DNS 解析过程
  > 浏览器缓存 -> host 文件 >- 路由器缓存 -> LDNS(本地域名解析服务系统)  
  > LDNS 代替主机依次向根域名服务器，顶级域名服务器，次级域名服务器发起递归查询
- Set-Cookie 常见 cookie 属性
  > value,expires,domain,path,secure
- 前端鉴权
  > HTTP Basic Authentication  
  > session-cookie  
  > token  
  > OAuth
- token 作用，缺陷在哪（JWT）
  > 前端鉴权  
  > 默认的 token 不加密，延长 token 需要前端替换旧 token
- HTTP 和 Websocket 的联系
- websocket 过程，websocket 丢包怎么解决
  > 握手：客户端握手请求，服务端拼接 Sec-WebSocket-Key 和全局唯一标识 258EAFA5-E914-47DA-95CA-C5AB0DC85B11，然后经过 SHA-1 hash 编码和 base64 编码作为服务端的握手返回  
  > 数据传输的基本单位为 Messages，这些 Message 由一个或多个 Frames 组成  
  > 可以使用 TCP 的关闭方法或者任意一点发送指定控制序号的数据的帧，另一方接收到后关闭连接
- https

  > #### CA 证书签发
  >
  > 1. 服务方向第三方机构 CA 提交公钥，组织信息等信息申请认证
  > 2. CA 验证后向申请者签发认证文件-证书,证书包括：申请者公钥，申请者信息，CA 机构信息，有效时间，证书序列号等明文信息， 一个签名。签名的产生算法：首先用散列函数计算公开的明文摘要，然后用 CA 的私钥对信息摘要加密
  > 3. 客户端向服务端发送请求，服务端返回证书文件 4.客户端读取证书明文信息，采用相同的散列函数得到摘要，利用内置的 CA 公钥解密签名，如果一致，则证书，公钥合法 5.客户端验证证书相关域名信息，有效时间等 6.客户端内置信任 CA 的根证书,包含 CA 的私钥
  >
  > #### 加密流程
  >
  > 1. 客户端发起请求，服务端返回证书（包括服务端公钥）
  > 2. 客户端验证证书有效性，如果有效，则生成一个随机值，用证书的公钥对其加密
  > 3. 客服端向服务端传送加密信息
  > 4. 服务端用私钥解密后，用客户端传来的随机值（私钥）对内容进行对称加密
  > 5. 客户端得到信息后用随机值解密

- 服务端推送
- 服务端拿什么与客户端进行通信

---

### Code

- ~~[斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)~~
- ~~[二叉树镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/submissions/)~~
- ~~[最长不含重复字符的子字符串](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)~~
- ~~[最长上升子序列长度](https://leetcode-cn.com/problems/longest-increasing-subsequence/)~~
- ~~[最大连续子数组](https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/)~~
- ~~[顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)~~
- ~~[二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)~~
- ~~[比较版本号](https://leetcode-cn.com/problems/compare-version-numbers/)~~
- ~~[求二叉树的公共祖先节点](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)~~
- [和至少为 K 的最短子数组](https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/)
- [字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)
- ~~[有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)~~
- [栈的压入、弹出序列](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)
- ~~[字符串转千分位](https://leetcode-cn.com/problems/thousand-separator/)~~
- ~~[买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)~~
- [满足条件的子序列数目](https://leetcode-cn.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)
- [最小栈](https://leetcode-cn.com/problems/min-stack/)
- ~~[大数相加](https://leetcode-cn.com/problems/add-two-numbers/)~~
- [通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)
- 输出 1-10000 所有回文数
- 手写 bind
- 实现一个{{}}语法
- 实现一个 promise.race
- 使用 Promise 实现 sleep(1000).then(()=>{console.log(2)})，先打印 1 过一秒打印 2

> ```javaScript
> function sleep(delay) {
>   delay = delay || 1000
>   return new Promise((resolve, reject) => {
>     setTimeout(() => {
>       resolve(1)
>      }, delay)
>   })
> }
> ;(async function () {
>   for (let i = 0; i < 10; i++) {
>     await sleep(1000)
>     console.log(i)
>   }
> })()
> ```

- 多行字符串转二维数组
- 每隔一秒输出数组一项

> ```javaScript
> const arr = [1,2,3,4,5,6]
> function sleep(delay) {
>   delay = delay || 1000
>   return new Promise((resolve, reject) => {
>     setTimeout(() => {
>       resolve(1)
>      }, delay)
>   })
> }
> ;(async function () {
>   for (let i = 0; i < arr.length; i++) {
>     await sleep(1000)
>     console.log(arr[i])
>   }
> })()
> ```

- 字符串去除首尾空格
  > str = str.replace(/^\s*|\s*$/g, '')
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
- 实现随机抽奖及优化
- 统计一个字符串出现最多的字母：给出一段英文连续的英文字符串，找出重复出现次数最多的字母和它出现的次数
- 倒计时 截止时间 2020 年 11 月 11 日 0 点显示“剩余 XX 天 XX 时 XX 分 XX 秒”每秒刷新一次
- 二维数组 45° 输出
- 实现 fetchWithRetry(url, param, times, delay)到期结束，失败次数达到结束，不然就重试
- 三个异步 fetch 请求，只要有一个请求变成 resolve，那么就输出对应的 result，并结束。如果请求过程中出现错误，则需要在最后输出错误信息

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
  function get(obj, str) {
    const list = str.split('.')
    return list.reduce((pre, cur) => {
      let index = cur.indexOf('[')
      let index1 = cur.indexOf(']')
      if (index >= 0) {
        let key = cur.substring(0, index)
        let val = cur.substring(index + 1, index1)
        return pre[key][val]
      } else {
        return pre[cur]
      }
    }, obj)
  }
  get(object, 'a[0].b.c')
  //应该返回 3
  ```

- 实现发布订阅模式，具有以下公开方法

  ```javascript
  class EventEmit {
    constructor(elem, props) {}
    // 注册事件的回调函数
    on(event, callback) {}
    // 注册事件的回调函数，只执行一次
    once(event, callback) {}
    // 触发注册的事件回调函数执行
    emit(event, ...args) {}
    // 删除一个回调函数
    remove(event, callback) {}
  }
  class EventEmit {
    constructor() {
      this.events = new Map()
    }
    addEvent(key, fn, isOnce, ...args) {
      const value =
        this.events.get(key) || this.events.set(key, new Map()).get(key)
      value.set(fn, (...args1) => {
        fn(...args, ...args1)
        isOnce && this.off(key, fn)
      })
    }
    on(key, fn, ...args) {
      if (!fn) {
        return console.error('没有回调函数')
      }
      this.addEvent(key, fn, false, ...args)
    }
    once(key, fn, ...args) {
      this.addEvent(key, fn, true, ...args)
    }
    off(key, fn) {
      if (this.events.get(key)) {
        this.events.get(key).delete(fn)
      }
    }
    emit(key, ...args) {
      if (!this.events.get(key)) {
        console.warn('没有该事件')
        return
      }
      for (let cb of this.events.get(key).values()) {
        cb(...args)
      }
    }
  }
  ```

- 实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：  
  • 要求最大并发数 maxNum  
  • 每当有一个请求返回，就留下一个空位，可以增加新的请求  
  • 所有请求完成后，结果按照 urls 里面的顺序依次打出

  ```javaScript
  function multiRequest(urls = [], maxNum) {
    const len = urls.length
    const res = new Array(len).fill(false)
    let count = 0
    return new Promise((resolve, reject) => {
      while (count < maxNum) next()
      function next() {
        let cur = count++
        if (cur >= len) {
          !res.includes(false) && resolve(res)
          return
        }
        const url = urls[cur]
        console.log(`开始 ${cur}`, new Date().toLocaleString())
        fetch(url)
          .then((res) => {
            res[cur] = res
            console.log(`完成 ${cur}`, new Date().toLocaleString())
            if (cur < len) next()
          })
          .catch((err) => {
            console.log(`结束 ${cur}`, new Date().toLocaleString())
            res[cur] = res
            if (cur < len) next()
          })
      }
    })
  }
  ```

---

### 性能优化，前端工程化

- 异步加载路由时，webpack chunk 的加载顺序怎么保证正确
- 优化首屏渲染的方式有哪几种
- ssr 的渲染原理，与 csr 的区别
- eslint 的工作原理，怎么写一个 eslint rule
- Babel 原理，编译过程
  > 解析，将代码转换成 AST  
  > 转换，访问 AST 的系欸但进行变换操作产生新的 AST  
  > 生成，用新 AST 为基础生成新代码
- tree-shaking，为什么编译目标得是 ES6（ESM 静态优化机制）
- Webpack 性能优化
- Webpack 构建流程
- Webpack 代码切割
- loader 与 plugin，plugin 遵循的事件流机制

---

### 智力

- 老虎吃羊问题
  > 老虎数量为奇数吃羊，为偶数不吃
- 13 黄 15 红 17 蓝，任意两种颜色加起来变成另外一种颜色（ps： 1 黄 + 1 红 = 2 蓝），请问可以变成一种颜色吗，不可以的话为什么，有什么公式
  > 两两之间的差值等于 3 的倍数
- 三色龙（r,g,b）：每两只变色龙相遇会变成另一种，这三种满足什么数量关系可以最终全部变成一种颜色的
- 一共有 25 枚硬币，有十枚正面朝上，你可以翻转硬币，但是不能用手感知到硬币是否正面朝上。现在闭着眼睛将硬币分成两堆，问如何操作才能让两堆硬币正面朝上的个数相同
  > 将硬币分为两堆，15 个和 10 个，将 10 个的全部翻面则正面朝上的一样多

---

### 其他

- TS 泛型
- 大文件上传，分片（Blob 对象），流式处理（Stream）
- 如何统计用户的浏览时长，要考虑到用户会切换页面，缩放页面等。多个点进行上报时，如何区分这些数据来自于同一个会话？
  > [https://yq.aliyun.com/articles/635301](https://yq.aliyun.com/articles/635301)
- 统计 uv 与 pv
  > **pv**(page view)页面浏览量，**uv**(unique vistor)独立用户数  
  > pv 统计，检查 url 是否变化
  > uv 统计，利用 X-Forwarded-For 首部，拿到用户 IP，或者统计设备 Ip
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
