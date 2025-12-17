/*
//Input & Output (alert, prompt have highest excute order)

alert('hello js')
document.write("I'm here")

console.log("magic")

prompt('enter your age')

//; can be moved


// variable & constant
let variable1 = 10, variable2 = prompt('enter your age')
console.log(variable1)
document.write(variable2)

const PI = 3.14     //声明变量直接用const，如果发现后面需要修改再改成let
console.log(PI)


let num1 = 10, num2 = 20
[num1, num2] = [num2, num1]
*/

/*
// Array
    let numbers = [10,1,23,55,50]
    // 增
        数组.push()   //追加末尾，跟python里的append一样
        数组.unshift()    //追加开头

    // 删
        数组.pop()    //删减末尾，括号内不加任何参数
        数组.shift()    //删减开头，括号内不加任何参数
        数组.splice(起始索引位置,个数)  //指定位置

    // js中长度是数组的属性，用 数组.length; python中长度是一个方法函数，用len()
        numbers.length

    // sort函数-排序：sort(function(){})
        numbers.sort(function(a,b) {    //升序
            return a - b
        })
        numbers.sort(function(a,b) {   //降序
            return b - a
        })

    // 取模运算循环数组索引：循环0到arr.length-1
        i = (i + 1) % 数组.length      // 向后循环
        i = (i - 1 + 数组.length) % 数组.length   // 向前循环，避免负索引
        
// Template Literal: ` ${} ` like <f string   in python>
console.log(`The number array is ${numbers} and the array length is ${numbers.length}`)
*/


/*
// data type:
False：0、false、null、undefined、NaN、""（空字符串）。
    
    // undefined & null
        console.log(null == undefined);   // true
        console.log(null === undefined);  // false
        // undefined: 没有值
            console.log(undefined + 1);  // NaN    undefined 转为数字是 NaN
            console.log(undefined - 1);  // NaN
            console.log(undefined + "1"); // "undefined1" (字符串拼接)
        // null: 有值但程序员用于设空值，常用于初始化，类似 Python 的 None
            console.log(null + 1);       // 1   null 转为数字是 0
            console.log(null - 1);       // -1
            console.log(null + "1");     // "null1" (字符串拼接)



    // typeof
        console.log(typeof null);      // "object" (历史遗留bug)
        console.log(typeof "pink");    // "string"
        console.log(typeof 123);       // "number"

    //data type transfer: 
        inner:
            string + everything = string;
            string -/* everything = NaN
            'number' -/* everything = number    // 减法会把空字符串''转化成0
            + 'number' = number     //positive transfer
        outter:
            let num = Numbe(prompt('Enter your age'))
            let num = + prompt('Enter your age')        //same

            parseInt()      //int
            parseFloat()        //float
*/




/*
// 运算符
    // 一元运算符（自增和返回值的顺序跟符号展示一致，自我单独输出不同，但对变量num的操作结果都一样）
        // 演示后置自增
            let num1 = 5;
            let a = num1++;  // 返回值后自增
            console.log(a);  // 5（输出旧值）
            console.log(num1);  // 6（偷着增）
        // 演示前置自增
            let num2 = 5;
            let b = ++num2;  // 自增后返回值
            console.log(b);  // 6（输出直达结果）
            console.log(num2);  // 6 (明着增)

    // 比较运算符：隐形转换
        ===全等（数据类型、值）
        !==不全等
            Nan不等于任何（包括自己） 返回 false
            数字 0 返回 false
        字符串比较（ASCII字符代码表） 
            ➡️ 'a' < 'b' 返回 true ； 
            'aa' < 'ab' 返回 true 顺序比较，先比较左右两边第一个字符a&a，再比较第二个a&b
            'aa' < 'aac' 返回 true
            空字符串 返回 false

    // 逻辑运算符：&&且 ； ||或 ； ！取反     (||一真则真  ；  优先级 && > ||)
    year = prompt()
    alert(year % 4 === 0 && year%100 !==0 || year % 400 === 0)
        // 逻辑中断(短路)：拿左边来判断，右边怎么样无所谓
            // &&：左T返回右，左F返回左
            console.log(11 && 22)  // 11T，返回22
            console.log(0 && 22)   // 0F，返回0（0在js里代表F）
            // ||：左T返回左，左F返回右
            console.log(11 || 0)   // 11T，返回11
            console.log(0 || 22)   // 0F，返回22        
*/        


/*
// 条件语句
    // if 后要加() 后要加{}
    if (条件) {
        blank
    } else if (blank) {     // 不能跟python里一样写elif
        blank
    } else {
        blank
    }

    // 三元运算符
    condition ? x : y      // 类似于python的条件表达式：x if condition else y，但是顺序不同

    // switch （一定是=== ；加 case 和 default 和 break）
    switch (变量){
        case 值1:
            blank
            break
        case 值2:
            blank
            break
        default:
            blank
            break
    }

    // while (continue / sbreak)
    while (条件) {
        blank
    }

    // for
    for (初始变量值;条件;变化量) {
        blank
    }
    
    for (let k in 数组名/对象名) {
        blank
    }

        // 遍历数组
        let letter = ['a','b','c','d']
        for (let i = 0; i < letter.length; i++) {
            console.log(letter[i]);        
        }

        for (let x in letter) {
            console.log(x)      // 以字符串形式返回数组下标，有隐患所以不推荐以此方法遍历数组
            console.log(letter[x])
        }
        
        // 遍历对象
        let obj = {name: "John", age: 30, city: "Mankato"};
        for (let key in obj) {
            console.log(key)      // 以字符串形式返回key，所以实际上返回的是'name' 
            console.log(obj[key])     // 返回的是'name'，所以我们不能用obj.key
        }

        // 无限循环：括号里没有任何参数和条件，没有内置break就是死循环
        for (;;) {
            console.log('无限循环');
            if (某个条件) {
                break;  // 满足条件时退出
            }
        }
*/


/*
// 函数
function 函数名() {
    blank
}l
    // 立即执行函数
    (function (){})()   //如果函数需要参数，最后一个括号需要传入参数
*/



/*
// object：类似于无序数组
let 对象名 = {
    属性名: '属性值',
    方法名: function(){
        blank
    }   // 后面还有函数的话，这里也要加逗号
}
对象名.方法名()    //调用函数

    // 属性的增删查改
        // 增
        对象名.key = value
        对象名['key'] = value
        // 删
        delete 对象名.key
        // 查
        对象名.key
        对象名['key']
        // 改
        对象名.key = new_vlaue

    // Js内置对象
        //Math
            //属性：
                Math.PI     //圆周率 π，约 3.14159
                Math.E     //自然对数的底 e，约 2.718
                Math.LN2     //2 的自然对数
                Math.LN10     //10 的自然对数
                Math.LOG2E     //以 2 为底的 e 的对数
                Math.LOG10E     //以 10 为底的 e 的对数
                Math.SQRT1_2     //1/2 的平方根
                Math.SQRT2     //2 的平方根
                
            //方法：
                Math.abs(x)     //绝对值
                Math.ceil(x)     //向上取整
                Math.floor(x)     //向下取整
                Math.round(x)     //四舍五入
                Math.max(a, b, ...)     //最大值
                Math.min(a, b, ...)     //最小值
                Math.pow(base, exponent)     //幂运算
                Math.sqrt(x)     //平方根
                Math.random()     //[0,1)之间的随机数
                    // [0,10] 之间的整数
                    let randomInt0to10 = Math.floor(Math.random() * 11)
                    // [1,10] 之间的整数
                    let randomInt1to10 = Math.floor(Math.random() * 10) + 1
                    // [n,m] 之间的整数
                    let randomIntNtoM = Math.floor(Math.random() * (m - n + 1)) + n
                Math.sin(x); Math.cos(x); Math.tan(x)     //三角函数
                Math.log(x)     //自然对数
                Math.exp(x)     //e 的 x 次幂
*/

function getRandom(N,M) {
    return Math.floor(Math.random() * (M - N + 1)) + N
}
或者是
    return parseInt(Math.random() * (M - N + 1)) + N
// 栈和堆：76集