// 获取页面标签
document.querySelector('css选择器')     //返回第一个元素，可直接修改
document.querySelectorAll('css选择器')  //返回伪数组，需要遍历才能修改
    // 获取HTML元素
    document.documentElement    // 获取 <html> 元素
    document.body              // 获取 <body> 元素
    document.head              // 获取 <head> 元素
        // 示例：设置页面滚动
        document.documentElement.scrollTop = 0;  // 滚动到页面顶部
    // 获取设备信息
    window.devicePixelRatio    // 设备像素比（高分辨率屏幕，如 Retina 为 2）
        // 网页端（桌面）：通常 1-2；移动端：iPhone 为 2-3，Android 为 1-3
        // 示例：console.log(window.devicePixelRatio);  // 输出 1 或 2

// 操作元素属性
    // 读写元素内容
    对象.innerText      // 读写纯文本内容
    对象.innerHTML      // 读写含HTML标签的内容
    对象.innerHTML += '追加内容'        // 前两个会覆盖，这个不会

    // 读写元素属性
    对象.属性
        // 元素尺寸和位置
            // 滚动
                // scroll：读写滚动距离，只读内容总尺寸（包括不可见部分）
                对象.scrollTop    // 可读写：垂直滚动距离（像素）
                对象.scrollLeft   // 可读写：水平滚动距离（像素）
                对象.scrollWidth    // 只读：内容总宽度（包括不可见部分）
                对象.scrollHeight   // 只读：内容总高度（包括不可见部分）
    
                // 滚动方法：只写
                window.scrollTo(x, y)  // 滚动到指定位置（x水平像素，y垂直像素）
                window.scrollTo({ top: y, left: x, behavior: 'smooth' })  // 平滑滚动

            // offset：只读，包括边框、滚动条的尺寸和位置（相对于offsetParent）
            对象.offsetWidth     // 宽度（包括边框、滚动条）
            对象.offsetHeight    // 高度（包括边框、滚动条）
            对象.offsetLeft      // 左边距（相对于offsetParent）
            对象.offsetTop       // 上边距（相对于offsetParent）
            对象.offsetParent    // 定位父元素

            // client：只读，内容区域尺寸和边框宽度（不包括滚动条）
            对象.clientWidth     // 内容宽度（不包括边框、滚动条）
            对象.clientHeight    // 内容高度（不包括边框、滚动条）
            对象.clientLeft      // 左边框宽度
            对象.clientTop       // 上边框宽度

            // getBoundingClientRect：只读，返回相对于视口的完整矩形信息
            对象.getBoundingClientRect()    // 返回{top, right, bottom, left, width, height}

    // 读写样式属性
    对象.style.样式属性      // 针对性读写  backgroundColor ➡️ background-color 多组单词-命名转换为小驼峰命名
        // 读类名
        对象.className      // 读取整个class属性值，返回字符串（如"nav box"）
        对象.classList      // 读取类名列表，返回DOMTokenList对象（如class="nav box"，返回['nav', 'box']）
        // 借助类方法可批量修改样式属性
        对象.className = 'new类名'       // 添加修改类名，会覆盖之前类名
        对象.classList.add('new类名')      // 追加类名，不会覆盖之前的类名
        对象.classList.remove('类名')       // 删除类名
        对象.classList.toggle('类名')       // 切换类名：有就删掉，没有就加上
        对象.classList.contains('类名')     // 检查类名是否存在：返回TF

    // 读写表单元素属性
    表单.属性名 = '新值'
        // 修改表单元素示例
            const input = document.querySelector('input[type="checkbox"]')
            input.checked = true  // 选中checkbox
            const button = document.querySelector('button')
            button.disabled = true  // 禁用button
        // 获取表单内容
            表单.value  // 单标签 e.g.<input>
            表单.innerHTML  // 双标签 e.g.<button></button>
    // 读写自定义属性：HTML5规定必须以'data-'开头
    对象.dataset.自定义属性
        // 示例
        HTML: <div data-id="1" data-name="box"></div>
        const div = document.querySelector('div');
        console.log(div.dataset);        // {id: "1", name: "box"} （键值对形式打印所有属性）
        console.log(div.dataset.id);     // "1" （打印特定属性）


// 间歇函数 - 定时器
setInterval(函数, 间隔时间) // 开启 非匿名函数别加小括号，间隔时间单位是毫秒
clearInterval(变量名)
    // 示例
    let timer = setInterval(function(){    // 定时器需要经常开关需用let定义
        console.log('每隔一秒执行一次');
    }, 1000)
    clearInterval(timer)   // 关闭定时器



// 事件: js交互的核心
    // 事件类型
        - click        // 鼠标点击事件
        - mouseenter   // 鼠标经过元素事件
        - mouseleave   // 鼠标离开元素事件
        - mouseover    // 鼠标进入元素事件（会冒泡）
        - mouseout     // 鼠标离开元素事件（会冒泡）
        - Keydown      // 键盘按键按下事件
        - Keyup        // 键盘按键释放事件
        - focus        // 元素获得焦点事件
        - blur         // 元素失去焦点事件
        - input        // 输入框内容改变事件
        - submit       // 表单提交事件（用于 form 元素）
        - load         // 所有外部资源加载完毕事件
            window.addEventListener('load',function(){})    // 等待页面所有资源加载完毕后回调函数
            img.addEventListener('load',function(){})    // 等待图片加载完毕后回调函数
        - DOMContentLoaded    // 初始HTML加载完毕事件（对象document）
        - scroll       // 滚动事件
        - resize
        
        // M端（移动端）触摸事件与注意事项
        - touchstart      // 触摸开始（首次接触屏幕）
        - touchmove       // 触摸移动（手指滑动）
        - touchend        // 触摸结束（手指离开屏幕）
        - touchcancel     // 触摸被中断（如系统弹窗、来电等）
            // TouchEvent 常用属性（事件对象 e）
                e.touches           // 当前屏幕上所有触点（TouchList）
                e.targetTouches     // 当前目标元素上的触点（TouchList）
                e.changedTouches    // 本次事件中发生变化的触点（TouchList）
            // Touch 对象常用属性
                Touch.identifier    // 触点 id（用于多指触控跟踪）
                Touch.clientX, clientY  // 相对视口的坐标
                Touch.pageX, pageY      // 相对页面（含滚动）的坐标

    // 事件监听
        // 绑定
        对象.addEventListener('事件类型',函数)
        // 解绑: 匿名函数无法解绑
        对象.removeEventListener('事件类型',函数)

    // 事件对象
        // 事件监听器函数的参数，通常命名为event、e或eve，包含事件信息
        function(e) {
            console.log(e.target)  // 触发事件的元素
            console.log(e.type)    // 事件类型，如'click'
            e.preventDefault()     // 阻止默认行为，如表单提交
            e.stopPropagation()    // 阻止事件冒泡
            // 键盘事件
            console.log(e.key)     // 按键值，如'Enter'
            // 鼠标事件
            console.log(e.clientX, e.clientY)  // 鼠标相对于视窗位置
            console.log(e.offsetX, e.offsetY)  // 鼠标相对于触发元素位置
        }
        // 用法示例
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                console.log('按下了 Enter', e.target.value)
            }
        })

    // 环境对象
        this  // 指向当前执行上下文的对象
            // 在全局作用域中（非函数内），this 指向 window 对象
            // 没有对象的普通函数，this 指向 window
            // 有对象的函数，this 指向调用它的对象
            // 在事件监听器中，this 指向触发事件的元素
            // 在构造函数中，this 指向新创建的实例
            // 示例
            button.addEventListener('click', function() {
                console.log(this)  // 指向 button 元素
            })

    // 事件流：事件在DOM树中的传播过程
        // 捕获阶段：事件从根元素向下传播到目标元素。
        // 冒泡阶段：事件从目标元素向上传播回根元素。
        对象.addEventListener('事件类型', 事件处理函数, 是否使用捕获机制)   // 第三个参数：true 为捕获阶段，false（默认）为冒泡阶段
            // 阻断事件流传播，把事件限制在当前元素内
                e.stopPropagation
            // 事件委托: 给父元素，依赖于事件冒泡
                e.target.tagName    // tagName的元素要大写，对具体子元素操作得加target，如e.target.innerHTML
            
    // 阻止事件默认行为
        e.preventDefault


// 节点
    // 元素节点（常用属性与方法）
        // 查找
            // 父节点
                parentNode           // 返回父节点（可能是 Element、Document 或 null）
                parentElement        // 返回父元素（Element 或 null，若父节点不是元素则为 null）

            // 子节点
                childNodes           // 返回 NodeList（包含元素、文本、注释等所有子节点）
                children             // 返回 HTMLCollection（仅包含元素子节点）

            // 兄弟节点
                previousElementSibling    // 上一个兄弟元素
                nextElementSibling        // 下一个兄弟元素

        // 增加
            document.createElement('标签名')     // 创建新元素节点
            parent.appendChild(node)             // 将 node 添加为 parent 的最后一个子节点
            parent.insertBefore(newNode, ref)    // 在 ref 节点前插入 newNode
            element.cloneNode(true)              // 克隆元素（true 深拷贝，包括子节点；false 浅拷贝）

        // 删除
            parent.removeChild(child)            // 删除指定的子节点 child

        // 修改
            parent.replaceChild(newNode, old)   // 用 newNode 替换 old 子节点


        // 节点类型常量（用于判断节点类型）
            Node.ELEMENT_NODE   // 1
            Node.TEXT_NODE      // 3
            Node.COMMENT_NODE   // 8

// 日期对象
    // 实例化创建日期对象
    new Date()  // 当前日期和时间
        // 指定日期字符串（推荐使用 ISO 格式，如 '2023-12-22T10:30:00'）
        new Date('2023-12-22')  
        // 指定年、月、日、时、分、秒（可选毫秒）
        new Date(2023, 11, 22, 10, 30, 0)  // 年、月、日、时、分、秒
        // 指定时间戳（毫秒数，从1970-01-01 00:00:00开始）
        new Date(1703242200000)  // 时间戳

    // 获取日期和时间
    日期对象.getFullYear()     // 获取年份（4位数字）
    日期对象.getMonth()        // 获取月份（0-11，0表示1月）
    日期对象.getDate()         // 获取日期（1-31）
    日期对象.getDay()          // 获取星期（0-6，0表示星期日）
    日期对象.getHours()        // 获取小时（0-23）
    日期对象.getMinutes()      // 获取分钟（0-59）
    日期对象.getSeconds()      // 获取秒钟（0-59）
    日期对象.getMilliseconds() // 获取毫秒（0-999）

    // 时间戳
    +new Date()                // 当前及指定时间戳
    日期对象.getTime()         // 当前及指定时间戳（需要实例化，毫秒数，从1970-01-01 00:00:00开始）
    Date.now()                 // 仅当前时间戳

    // 格式化输出
    日期对象.toLocaleString()  // 本地化日期时间字符串
    日期对象.toLocaleDateString()  // 本地化日期字符串
    日期对象.toLocaleTimeString()  // 本地化时间字符串


    // 示例
    const now = new Date();
    console.log(now.getFullYear());  // 2023
    console.log(now.getMonth() + 1); // 12（月份从0开始，需要+1）
    console.log(now.getTime());      // 时间戳

    // 补零操作：用于格式化日期时间（如月份、日小于10时补0）
        num < 10 ? '0' + num : num;

    // 时间戳毫秒转换成秒 再用秒转换公式：
        const totalSeconds = 时间戳 / 1000;  // 时间戳转秒
        d = parseInt(totalSeconds / 60 / 60 / 24); // 天
        h = parseInt(totalSeconds / 60 / 60 % 24); // 时
        m = parseInt(totalSeconds / 60 % 60); // 分
        s = parseInt(totalSeconds % 60); // 秒
        