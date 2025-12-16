// 获取页面标签
document.querySelector('css选择器')     //返回第一个元素，可直接修改
document.querySelectorAll('css选择器')  //返回伪数组，需要遍历才能修改

// 操作元素属性
    // 读写元素内容
    对象.innerText      // 读写纯文本内容
    对象.innerHTML      // 读写含HTML标签的内容
    对象.innerHTML += '追加内容'        // 前两个会覆盖，这个不会

    // 读写元素属性
    对象.属性

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




// 事件监听
对象.addEventListener('事件类型',函数)

