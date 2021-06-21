class Person {  // 给这个 person 增加了属性
    // name: string
    constructor(public name: string) {
        this.name = name;
    }
}

interface IClass<T> {   // 表示是一个构造函数类型
    new (name: string): T   // 可以用类当成类型
}

function createInstance<T>(clazz: IClass<Person>, name: string) {
    return new clazz(name)
}

let r = createInstance<Person>(Person, '张三')

// 泛型 就是当调用时传入具体类型 先用一个标识来占位

// ======================================================

// 泛型 特性 就是为了 在声明时不能确定类型，只有在使用的时候， 才能决定类型
// 函数 接口、类型别名 类

// 函数中使用泛型
function createArray<T>(times: number, val: T) {
    let result = [];
    for(let i = 0; i < times; i++) {
        result.push(val)
    }
    return result
}

let r1 = createArray(3, 'ABC'); // 不传入类型 ts 也会自动推导类型

// 泛型可以使用多个
// 元组 [string, number] => [number, string]

// T, K代表类型变量
function swap<T, K>(tuple: [T, K]): [K, T] {
    return [tuple[1], tuple[0]]
}

// 函数表达式的写法
// 写到函数上的泛型表示调用函数时 传入具体类型，写在接口后面的标识使用接口时传入类型
interface MySwap {
    <A, B>(tuple: [A, B]): [B, A]
}
const swap2: MySwap = <A, B>(tuple:[A, B]):[B,A] => {
    return [tuple[1], tuple[0]]
}

// 在接口使用时传递参数
interface IArr<A, B> {
    [key: number]: B    // 可索引接口
}

const swap3 = <A, B>(tuple: IArr<A, B>):IArr<A, B> => {
    return [tuple[1], tuple[0]]
}

// 求和函数， 我期望求和
const sum = <T extends number>(a: T, b: T):T => {
    return (a + b) as T
}

// 只要传入的两个参数类型一致即可
sum(1, 2);  // 1和2得具备数字的能力，约束T都是number类型，只要拥有 number 能加的功能
// 泛型约束 约束泛型的能力

// 我希望你传入的数据 只要是带有 length 属性即可
type WithLen = {length: number}
// T 满足里面的条件
function getType<T extends {length: WithLen}>(obj: T) {
    obj.length
}

// 默认泛型 不传递 默认给与类型
interface DStr<T=string> {
    name: T  // 可能是数组、number、boolean
}
type T1 = DStr
type T2 = DStr<number>
type T3 = DStr<boolean>
let str:T1 = {name: '123'}
let str2:T2 = {name: 123}
let str3: T3 = {name: true}

// 约束属性 keyof 表示去对象中的所有key属性
const getVal = <T extends Object, K extends keyof T>(obj: T, key: K) => {

}

getVal({a: 1, b: 2}, 'a')

class MyArray<T> {
    public arr:T[] = []
    add(v: T) {
        this.arr.push(v)
    }
    getMaxNum():T {
        let arr = this.arr;
        let max = arr[0];
        for(let i = 1; i < arr.length; i++) {
            let current = arr[i];
            current > max ? max = current : void 0;
        }
        return max
    }
}

let arr = new MyArray<number>()

arr.add(1);
arr.add(2);
arr.add(3);

export {}
