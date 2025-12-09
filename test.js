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
// Template Literal: ` ${} ` like <f string   in python>
console.log(`The number array is ${numbers} and the array length is ${numbers.length}`)
*/


/*
// data type: undefined have't value; null have value but programer set an empty value, like<None in python>.
console.log(undefined + 1)      // NaN
console.log(null + 1)       // 1

    // typeof null === "object"   // 历史遗留 bug
    let name = 'pink'
    console.log(typeof name)        /string

    //data type transfer: 
        inner:
            string + everything = string;
            string -/* everything = NaN
            'number' -/* everything = number
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

    let letter = ['a','b','c','d']
    for (let i = 0; i < letter.length; i++) {
        console.log(letter[i]);        
    }
        // 无限循环：括号里没有任何参数和条件，没有内置break就是死循环
        for (;;) {
            console.log('无限循环');
            if (某个条件) {
                break;  // 满足条件时退出
            }
        }
*/


// 函数
function 函数名() {
    blank
}
