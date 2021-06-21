// 装饰器 前端中使用 stage-3 可能后期会有变化
// 扩展属性和方法

function addSay(target: any) { // 修饰类本身当前参数就是类
    target.x = 1
    target.prototype.say = function () {
        console.log('say')
    }
}

function toUpperCase(target: any, key: string) { // target实例 key 指的是属性
    let value = target[key];
    Object.defineProperty(target, key, {
        get() {
            return value.toUpperCase();
        },
        set(newValue) {
            value = newValue
        }
    })
}

function double(num: number) {
    return function (target: any, key: string) {
        let value = target[key];
        Object.defineProperty(target, key, {
            get() {
                return value * num
            },
        })
    }
}

function Enum(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = false
}

function params(target: any, key: string, index: number) {

}

@addSay     // 语法糖 只是为了简单一点
class Person {
    say!: Function

    @toUpperCase
    name:string = 'weisuoke'    // 直接默认走 set 方法

    @double(3)  // 装饰器 就是一个函数 函数返回函数
    static age: number = 10;    // 修饰类静态属性时 不会走 set 方法

    @Enum
    getName(@params xx:string) {

    }
}

let person = new Person()
person.say()

export {}
