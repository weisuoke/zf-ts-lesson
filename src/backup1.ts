// ts 中拥有的类型

// 1. 基础类型

// 数字 字符串 布尔类型
// 所有的类型 : 后面都是类型 = 后面都是值

let num: number = 10;
let str: string = 'wsk';
let bool: boolean = true;

// 元组 表示长度和个数都（内容存放类型）限制好了
let tuple: [string, number, boolean] = ['wsk', 10, true]
// 可以向元组中添加内容， 不能通过索引添加属性
// 只能放入元组中声明过的类型
tuple.push('world');

// 数组 存放一类类型的集合
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2']

// 联合类型可以看作并集 既能使用数字又能使用字符串
let arr3:(number | string)[] = [1, 2, 3, '4']
let arr4: Array<number | string> = [1, 2, 3, '4']
let arr5: any[] = [1, 2, 3];    // 什么都能放

// 枚举类型
enum USER_ROLE {
    USER,   // 默认下标从0开始
    ADMIN,
    MANAGER
}
// 默认可以正向取出 也可以反举
console.log(USER_ROLE.USER)

// 异构枚举 可以在枚举中放不同类型
enum USER_ROLE2 {
    USER = 'a',
    ADMIN = 1,
    MANAGER
}
// 异构枚举，可以在枚举中放不同的类型，可以通过数字 自动向下推断
console.log(USER_ROLE2.USER)

// 常量枚举 只是提供了一种类型
const enum USER_ROLE3 { // 语义化
    USER,
    ADMIN
}

// any 类型 不进行类型检测的类型 相当于没有写类型
let any: any = ['zf', 11, true, {}] // 能不写 any 不写 any

// null 和 undefined
// 任何类型的子类型, 在严格模式下 只能将 null 和 undefined 赋值给 null undefined

let str2: number | string;

// void 空类型 只能接收 null 和 undefined。函数的返回值
// 函数默认的返回值是 undefined，默认在严格模式下不能将 null 赋值给 void
let v:void;

function a(): void {
    return undefined
}

// 字符串 数字 布尔类型 元组 数组 枚举 any null 和 undefined

// never类型 永远不是任何类型的子类型 可以把 never 赋予给任何类型
// 永远达不到的情况有三种
// 1. 错误
// 2. 死循环
// 3. 类型判断是会出现 never
function MyError():never {
    throw new Error("")
}
let n: never = MyError()

function whileTrue():never {
    while (true) {}
}

function byType(val: string|number) {
    if (typeof val == 'string') {
        val
    } else if (typeof val === 'number') {
        val
    } else {
        val // never
    }
}

// Symbol BigInt symbol 表示独一无二 元编程会用到
let s1 = Symbol('123');

// BigInt
let num1 = Number.MAX_SAFE_INTEGER + 1;
let num2 = Number.MAX_SAFE_INTEGER + 2;
console.log(num1 == num2)   // true

let num3 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
let num4 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2);
console.log(num3 == num4)   // false

// 对象类型 非原始数据类型 object

const create = (obj: object) => {

}

export {} // 防止模块干扰

