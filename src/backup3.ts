// 函数想要表示类型 function函数关键字来声明 表达式方式来声明

// 考虑入参和函数的返回值
// 声明不赋值 就是 any 类型
// 1)
function sum(a: string, b: string): string {
    return a + b
}

// 2) 如果使用的是表达式， 你给他给定义了类型， 你可以把一个兼容的函数赋予给他
type Sum = (a1: string, b1: string) => string
let sum2: Sum = (a: string, b: string): string => {
    return a + b;
}

// 可选参数 b? 表示b可以不传
let sum3 = (a: string, b?: string) => {

}

let sum4 = (a: string, b: string = 'b'): string => {
    return a + b
}

// 剩余参数
let sum5 = (...args: number[]) => {
}

// 函数的重载
// 希望吧一个字符串或者数字转换成一个数组
// 123 => [1, 2, 3];
// '123' => ['1', '2', '3']
function toArray(value: number): number[]
function toArray(value: string): string[]
function toArray(value: number | string) {
    if (typeof value === 'string') {
        return value.split('')
    } else {
        return value.toString().split('').map(item => parseInt(item))
    }
}

export {}

