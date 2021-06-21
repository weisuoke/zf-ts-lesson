// 类 es6 类来调用的静态属性 私有的实例属性 共享的原型属性

// as 断言成 xxx
// ! 非空断言
// ? 链判断运算符 有值取值 没值返回 undefined

class Pointer {
    x!:number   // 表示实例上有这个属性
    y!:number
    constructor(x: number, y: number) { // 这些参数 函数中的使用方式，这里都可以使用
        this.x = x
        this.y = y
    }
}

let pointer = new Pointer(1, 2)

// public private protected readonly 类的修饰符
// public 表示 父类本身 子类 外面 都可以获取这个属性
// protected 受保护的 父类本身 子类能访问这个属性
// private 只有自己能访问到
class Animal {
    public name!:string;
    public readonly age!:number;   // readonly 表示属性不能修改
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 静态属性 和 静态方法 通过类来调用的就是静态的（是可以被继承的）
    static type = "动物"
    static getName() {
        return '动物类'
    }

    say() {
        console.log('say')
    }
}

class Cat extends Animal {
    address = ''
    constructor(name: string, age: number, address: string) {
        super(name, age);   // Animal.call  // 父类本身
        this.address = address
    }

    static getName() {  // 子类重写父类的方法
        super.getName(); // 静态方法中的 super 指的是父类
        return '猫类'
    }

    say() { // 原型中的 super 指代的是 父类的原型
        super.say();  // Animal.prototype
        console.log('cat say')
    }

    // 属性访问器，来访问私有属性
    private _eat: string = ''
    get eat() { // 原型属性
        return this._eat
    }
    set eat(newVal) {
        this._eat = newVal
    }
}

let animal = new Animal("动物", 100)
let tom = new Cat("Tom", 10, '美国')

export {}
